<script>
	import { getContext, onMount } from "svelte";
	import { activeSection,activeBar, readingListVisible, xShiftRaunch, xShiftIllo, xShiftRace } from "$stores/misc.js";
	import { fly } from 'svelte/transition';
	import data from "$data/listings_copia2.csv";
    import { groups, ascending } from "d3-array";
	import { select } from "d3-selection";
	import ChapterMarker from "$components/ChapterMarker.svelte";
	import Chapter from "$components/Chapter.svelte";
	import BarChart from "$components/BarChart.svelte";
	import IntroScrolly from "$components/IntroScrolly.svelte";
	import ReadingList from "$components/ReadingList.svelte";
	import Lookback from "$components/Lookback.svelte";
	import Outro from "$components/Outro.svelte";
	import Footer from "$components/Footer.svelte";

	const copy = getContext("copy");
	
	let scrollY = 0;
	let w;
	let h;
	let body;
	let raunchinessData = data.sort((a, b) => ascending(a["year"], b["year"]));
	let yearTotals = groups(data, d => d.year);
	let barData = raunchinessData;
	let barColorHighlight = "#4C7DFE";
	let barColor = "#7da1fa"
	
	onMount(() => {
		body = select("body")
		setScroll($readingListVisible)
		console.log("raunc ", raunchinessData)
	})

	function setScroll(readingListVisible) {
		if (body) {
			if (readingListVisible == true) { body.style("overflow-y", "hidden") } 
			else { body.style("overflow-y", "auto") }
		}
	}

	function swapBarData(activeSection) {
		if (activeSection == "raunchiness") {
			barData = raunchinessData;
			barColor = null;
			barColorHighlight = "#a9a9a9";
		} else if (activeSection == "illustration") {
			barData = illustrationData;
			barColor = "#fde59a";
			barColorHighlight = "#F7C42D";
		} else if (activeSection == "race") {
			barData = raceData;
			barColor = "#7ce7e7";
			barColorHighlight = "#20B6B6";
		}
	}

	function calcMinDim(w, h) {
		if (w !== undefined && h !== undefined) {
			if (Math.min(w,h) > 600) { return Math.min(w, h); } 
			else { return 600 };
		} 
	}
	
	$: activeSection, swapBarData($activeSection)
	$: readingListVisible, setScroll($readingListVisible)
	$: barChartClass = $activeSection !== "raunchiness" ? "hidden" : "";	$: readingListVisible, setScroll($readingListVisible)
	$: bookMin = calcMinDim(w, h);
</script>

<svelte:window bind:innerWidth={w} bind:innerHeight={h} bind:scrollY={scrollY} />
<ChapterMarker />
<IntroScrolly bookMin={bookMin} w={w} h={h} scrollY={scrollY}/>

<div class="sections">
	<Chapter id={"raunchiness"} data={raunchinessData} copyBlock={copy.raunchinessText} copyScroll={copy.raunchinessScroll} scrollY={scrollY} xShiftSection={$xShiftRaunch} />
<!-- {console.log("OLHA AQUI: " , raunchinessData)} -->
</div>
{#if $activeSection == "raunchiness" && $activeSection !== null }
	<section id="barChart" in:fly={{ y: 200, duration: 2000 }} out:fly={{ y: 200, duration: 2000 }} class={barChartClass}>
		<BarChart data={barData} color={barColor} highlightColor={barColorHighlight} pos={"overlay"} yearTotals={yearTotals}/>
		<div class="shield"></div>
	</section>
{/if}

<!-- <Outro /> -->

<Footer />

<style>

  .hidden {
		visibility: hidden !important;
	}
	#barChart {
        position: fixed;
        width: 100%;
        /* height: 10rem; */
        left: 0;
        bottom: 1rem !important;
        display: flex;
        flex-direction: row;
        justify-content: center;
        z-index: 999;
		pointer-events: none;
    }
	.shield {
		position: absolute;
		left: 0;
		bottom: -2rem ;
		background: rgba(255, 255, 255, 0.75);
		display: block;
	}

	@media only screen and (min-width: 600px) {
        #barChart {
			bottom: 0rem;
		}
		.shield {
			display: none;
		}
	}
</style>
