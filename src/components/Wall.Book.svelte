<script>
    import { stepData } from "$stores/misc.js";
    import AddButton from "$components/AddButton.svelte";

    export let book;
    export let index;
    export let imgsLoaded;
    export let bookAddable = true;

    let w;
    let h; 

    function checkData(data, id) {
        if (data[1] !== undefined) { return data[1].highlightBooks.includes(id); }
    }

</script>

<svelte:window bind:innerHeight={h} bind:innerWidth={w} />

{#if index == 0}
    <div class={checkData($stepData, book.id) ? "book active" : "book"}
        id="book_{book.id}"
        >   
        <!-- style="height: {Math.floor(wallH/bookRows)}px; width: {Math.floor(wallH/bookRows*0.66)}px" -->
        <div class='img-wrapper' >
            <div class="overlay"></div>
            {#if imgsLoaded && book.id != "20241" && book.id != "194721"}
                <img src="https://raw.githubusercontent.com/prefeitura-rio/G20Dataviz/master/static/assets/images/covers2/{book.id}.jpg" alt="{book.title}" />
            {/if}
        </div>
        <!-- <div class="marker">{book.year}</div> -->
        {#if bookAddable == true && book.id != "20241" && book.id != "194721"}
            <AddButton text={book.credits}/>
        {/if}
       
    </div>

{/if}

<style>

    
 
    .book {
        margin: 0;
        display: flex;
        align-items: end;
        -webkit-justify-content: center;
        align-items: flex-end;
        -webkit-align-items: flex-end;
        position: relative;
        pointer-events: none;
        justify-content: center;
    }
    .img-wrapper {
        background-size: cover;
        width:30rem !important;
        /* background-repeat: no-repeat; */
        /* box-shadow: -3px 3px 2px -2px  rgba(0, 0, 0, 0.125), inset -1px 1px 2px rgba(255, 255, 255, 0.5); */
        /* transform: translate(0,0,0) perspective(8rem) rotateX(2deg); */
        /* transform-style: preserve-3d; */
    }
    /* :global(.img-wrapper img) {
        object-fit: cover;
        width: 100%;
        height: 100%;
    } */
   
    /* .img-wrapper .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        background-image: linear-gradient(to right, 
            rgba(60, 13, 20, 0.25) 1px, 
            rgba(255, 255, 255, 0.5) 3px, 
            rgba(255, 255, 255, 0.25) 7px, 
            rgba(255, 255, 255, 0.25) 10px, 
            transparent 12px,
            transparent 16px, 
            rgba(255, 255, 255, 0.25) 17px,
            transparent 22px)
    } */
    .book.active .img-wrapper {
        outline: 3px solid var(--romance-bg-blue);
        box-shadow: 0 0 8px 5px var(--romance-bg-blue);
    } 
   :global(.book.active .img-wrapper) {
        outline: 3px solid var(--romance-yellow);
        box-shadow: 0 0 30px 5px var(--romance-yellow);
    }
    :global(#illustration .book.active .img-wrapper) {
        outline: 5px solid var(--romance-yellow);
        box-shadow: 0 0 30px 12px var(--romance-yellow);
    }
    :global(#race .book.active .img-wrapper) {
        outline: 3px solid var(--romance-yellow);
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.25);
    } 
    .book .marker {
        position: absolute;
        padding: 0.25rem 0.5rem;
        text-align: center;
        width: 3.5rem;
        left: 50%;
        bottom: -2.5rem;
        font-family: var(--sans-display);
        font-size: var(--14px);
        z-index: 1;
        /* transform: translate(-50%, 0); */
    }
    :global(#lookback .book .marker) {
        background: var(--romance-pink-light);
    }
    :global(#raunchiness .book .marker) {
        background: var(--romance-blue-light);
    }
    :global(#illustration .book .marker) {
        background: var(--romance-yellow-light);
    }
    :global(#race .book .marker) {
        background: var(--romance-teal-light);
    }

    @media only screen and (min-width: 600px) {
        :global(#raunchiness .book.active .img-wrapper, #illustration .book.active .img-wrapper, #race .book.active .img-wrapper)  {
            transform: scale(1.25);
        }
	}
    @media only screen and (max-width: 480px){
        .img-wrapper {
        background-size: cover;
        width:23rem !important;
        }
    }
</style>