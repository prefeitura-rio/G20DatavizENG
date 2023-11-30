<script>
	import Scrolly from "$components/helpers/Scrolly.svelte";
    import Wall from "$components/Wall.svelte";
	import { stepData, sliderVisible } from "$stores/misc.js";
	
	export let data;
  export let copy;
	export let section;
	export let xShiftSection;

	let value;

	function setStepData(value) {
        const localStepData = [section, (copy[value])];
		$stepData = localStepData;
		lastStepUnlock(value)
    }

	function lastStepUnlock(value) {
		if (value == copy.length-1) { sliderVisible.set(true) }
		else { sliderVisible.set(false) }
	}

	$: value, setStepData(value);
</script>

<section id="scrolly">
	
	<div class="sticky">
        <Wall data={data} value={value} section={section} copy={copy} xShiftSection={xShiftSection}/>
    </div>
	<Scrolly bind:value>
        {#if copy}
            {#each copy as text, i}
                <div class="step">
									{#if text.text}
									<div class="text_titulo">
										{#if text.titulo}
										<div class="titulo">{text.titulo}</div>
										{/if}
										{text.text}
									</div>
									{/if}
										{#if text.credits}
										<!-- <p class="credits">{@html text.credits}</p> -->
										{/if}
                   
                </div>
            {/each}
        {/if}
	</Scrolly>
	<!-- <div class="spacer" /> -->
</section>

<style>

	.titulo{
		font-weight: bold;
		font-size: 1.2rem;
		padding-bottom: 1.1rem;
	}
	.credits{
		font-size: 11px;
	}
.sticky {
    position: sticky;
    top: 14rem;
    transition: all 1s;
    z-index: 1;
    overflow-x: hidden;
    pointer-events: none;
    max-width: 1600px; /* Set maximum width */
    margin: 0 auto; /* Center align the element */
}

	.step {
		height: 80vh;
		text-align: center;
        z-index: 999;
        max-width: 30rem;
        margin: 0 auto;
		pointer-events: none;
	}
	
	/* .step:last-of-type p::before {
		content: " ";
		position:relative;
		width: 1rem;
		height: 1rem;
		top:0rem;
		left:0;
		margin: 0 0.25rem 0 0;
		background-image: url($svg/pointer.svg);
		background-size: 1rem 1rem;
        background-repeat: no-repeat;
        background-position: center;
	} */
	.step .text_titulo {
		font-family: var(--serif);
		font-weight: 500;
        text-align: left;
        padding: 2rem;
        background: var(--color-white); 
		pointer-events: auto;
	}
	:global(.step .text_titulo .bold-year) {
		font-weight: 600;
		font-family: var(--sans-display);
		letter-spacing: -0.5px;
	}
	:global(.step .text_titulo a) {
		color: var(--color-gray-800);
		background-repeat: no-repeat;
        transition: background-position .08s ease-out;
        background-position: 0 1.125rem;
		border-bottom: none;
		pointer-events: auto;
	}
	:global(#raunchiness .step .text_titulo a) {
		background-image: linear-gradient(180deg,transparent 0,var(--romance-blue-light) 0);
	}
	:global(#illustration .step .text_titulo a) {
		background-image: linear-gradient(180deg,transparent 0,var(--romance-yellow-light) 0);
	}
	:global(#race .step .text_titulo a) {
		background-image: linear-gradient(180deg,transparent 0,var(--romance-teal-light) 0);
	}
	:global(.step .text_titulo a:hover) {
		background-position: 0 0rem;
	}
	@media only screen and (min-width: 600px) {
      
		.step:last-of-type .text_titulo::before {
			top:0.1rem;
		}
	}

	@media only screen and (max-width: 480px){
		.sticky {
    top: 18rem;
    }
	}
	@media only screen and (min-width: 480px) and (max-width: 1500px ){
		.sticky {
    top: 6rem;
    }
	}
	
 </style>
