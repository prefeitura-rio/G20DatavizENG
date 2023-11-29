<script>
    import {groups} from "d3-array";
    import { fade, fly } from 'svelte/transition';
    import { stepData } from "$stores/misc.js";

    export let data;
    export let color;
    export let highlightColor;
    export let pos;
    export let yearTotals;

    let w;
    let barChartW;

    
    function checkData(data, year) {
        if (pos == "inline") { return false } 
        else if (pos !== "overlay") { return true } 
        else {
            if (data[1] !== undefined && data[1].highlightYears.includes(year)) { return true; } 
            else { return false; }
        }
    }

    function calcPercentage(year, groupLen, i) {
        const yearMatch = yearTotals.find(d => d[0] == year);
        const yearTotLen = yearMatch[1].length;
        const percent = Math.round(groupLen/yearTotLen*100);
        return percent
    }

    $: groupedData = groups(data, d => d.year);
    $: filteredGroupedData = groupedData.filter(([year, _]) => 
    ["1906", "1908","1922", 
    "1928","1929", "1930", "1930","1931","1932","1933","1934","1935","1936","1937","1938","1939","1940",
    "1942","1947","1950","1955",
    "1967","1992","1999",
    "2007", "2012","2013",
    "2014","2016","2019",
    "2023", "2024" ].includes(year));
    $: numItems = filteredGroupedData.length;
    $: styleVar = `--num-items: ${numItems};`;
</script>

<svelte:window bind:innerWidth={w} />

    {#if pos == "overlay"}
        <p class="label left" style="color: {data[0]}">1906</p>
    {/if}
 
    <div class="chart-wrapper chart-wrapper-{pos}" bind:clientWidth={barChartW} style={styleVar}>
        {#if groupedData !== undefined}
        {#each filteredGroupedData as year, i}
        <div class={checkData($stepData, year[0]) ? "year-ball active" : "year-ball"}
            id="bar-{year[0]}"
            style="background-color: {checkData($stepData, year[0]) ? highlightColor : color};">
                    {#if pos == "overlay"}
                        <p class="count"
                            in:fly={{ y: 20, duration: 500 }} out:fade>
                            {year[0]}
                        </p>
                    {/if}
                    <span class="horizontal-line"></span>
                </div>
            {/each}
        {/if}
    </div>
    
    {#if pos == "overlay"}
        <p class="label right" style="color: {data[0]}">2024</p>
    {/if}

<style>
    .horizontal-line {
    position: absolute;
    height: 1px; /* or the thickness you desire */
    width: 100%; /* this ensures it spans the entire width of the ball */
    background-color: #a9a9a9; /* or any color you prefer */
    top: 50%; /* centers the line vertically */
    left: 0;
    transform: translateY(-50%); /* ensures perfect centering */
}

    .chart-wrapper {
        display: flex;
        flex-direction: row; 
        align-items: end;
        -webkit-align-items: flex-end;
        height: 100%;
        width: 100%;
        padding: 0 1rem;
        position: relative;
        border-bottom: 1px solid var(--color-gray-800);
    }
   
    .year-ball {
        width: calc(50% ); /* Adjust based on the number of items, subtracting margin */
        height: 0; /* Initial height to 0 */
        padding-top: calc(100% / var(--num-items) - 0.1rem);
        /* margin: 0 0.01rem; */
        border-radius: 50%; /* Circular shape */
        box-sizing: border-box; /* Include padding in width calculation */
        position: relative;
        transition: 0.25s linear;

    }
    .count {
        margin: 0;
        padding: 0;
        position: absolute;
        width: 100%;
        text-align: center;
        top: -1rem;
        left: 50%;
        transition: 0.25s linear;
        opacity: 0;
        letter-spacing: -0.05rem;
        font-family: var(--sans-display);
        font-size: var(--12px);
        white-space: nowrap;
        z-index: 1000;
        transform: translate(-50%, 0);
    }
    .year-ball.active .count {
        opacity: 1;
    }
    .label {
        margin: 0;
        padding: 0;
        display: flex;
        align-self: flex-end;
        align-items: center;
        font-family: var(--sans-display);
        font-size: var(--14px);
        padding: 0;
        line-height: 1;
        transition: 0.25s linear;
        z-index: 1000;
        letter-spacing: -0.05rem;
    }
    .label.left {
        margin: 0 1rem 0 0;
        position: absolute;
        bottom: -1.5rem;
        left: 1rem;
    }
    .label.right {
        margin: 0 0 0 1rem;
        position: absolute;
        bottom: -1.5rem;
        right: 1rem;
    }
    :global(#barChart .label .icon) {
        margin: 0;
        opacity: 1;
        display: inline;
    }
    @media only screen and (min-width: 600px) {
        .count {
            font-size: var(--12px);
            top: -1rem;
        }
        .chart-wrapper {
            width: 60%;
            border-bottom: none;
        }
        .label {
            font-size: var(--36px);
            font-family: var(--serif-display);
            letter-spacing: 0;
        }
        .label.left {
            margin: 0 1rem 0 0;
            position: relative;
            top: 0;
            left: 0;
        }
        .label.right {
            margin: 0 0 0 1rem;
            position: relative;
            top: 0;
            right: 0;
        }
        :global(#barChart .label .icon) {
            display: none;
        }
	}
    @media only screen and (min-width: 800px) {
        .count {
            font-size: var(--14px);
            top: -1.25rem;
        }
	}
    @media only screen and (max-width: 500px) {
        .label.right  {
            top: 0.1rem;
        }
        .label.left  {
            top: 0.1rem;
        }
        .chart-wrapper {
            border-bottom: 0px
        
    }
}
</style>
