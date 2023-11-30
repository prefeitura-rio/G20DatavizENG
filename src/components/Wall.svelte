<script>
	import { groups } from "d3-array";
	import { select } from "d3-selection";
	import {
		activeSection,
		maxWidthRaunch,
		maxWidthIllo,
		maxWidthRace,
		sliderVisible,
		sliderStoreRaunch,
		sliderStoreIllo,
		sliderStoreRace,
		xShiftRaunch,
		xShiftIllo,
		xShiftRace
	} from "$stores/misc.js";
	import Book from "$components/Wall.Book.svelte";

	export let data;
	export let value;
	export let section;
	export let copy;
	export let xShiftSection;

	const margins = 32;
	const yearGroups = groups(data, (d) => d.year);

	let bookWidth;
	let bookRows = 4;
	let shelves = [0];
	let h;
	let w;
	let wallH;
	let chunkWidths = [];
	let totalShelfWidth;
	let slideSpeed = 1.5;
	let imgsLoaded = false;

	function calcTotalWidth(chunks) {
		if (chunks.length == 13) {
			totalShelfWidth = chunks.reduce(function (a, b) {
				return { chunkWidth: a.chunkWidth + b.chunkWidth };
			});
		}
	}

	

	let scrollaDe3em3OsAnos = [
		"19081",
		"19221",
		"19281",
		"19421",
		"19471",
		"19501",
		"19551",
		"19671",
		"19921",
		"19991",
		"20071",
		"20121",
		"20131",
		"20141",
		"20161",
		"20191",
		"20231",
		"20241"
	];

const deviceType = () => {
		const ua = navigator.userAgent;
		const isLandscape = window.matchMedia("(orientation: landscape)").matches;

		if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
			return isLandscape ? "tablet-landscape" : "tablet-portrait";
		} else if (
			/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
				ua
			)
		) {
			return isLandscape ? "mobile-landscape" : "mobile-portrait";
		}
		return "desktop";
	};

	function shiftX(value) {
		if (copy[value] !== undefined) {
			if (value == 0) {
				if ($activeSection == "raunchiness") {
					sliderStoreRaunch.set(0);
					xShiftRaunch.set(0);
				}
			} else if (
				copy[value] !== 0 &&
				select(`#${section} #book_${copy[value].scrollToId}`).node() !== null
			) {
				console.log("dispositivo ", deviceType());

				if (deviceType() == "tablet-portrait") {
					const sel = select(`#${section} #book_${copy[value].scrollToId}`)
						.node()
						.getBoundingClientRect().x;
					if ($activeSection == "raunchiness") {
						const padding = 330;
						const val = $xShiftRaunch + sel - margins - padding;
						slideSpeed = Math.max(Math.abs(sel) / 750, 1.5);
						xShiftRaunch.set(val);
					}
				} else if (deviceType() == "tablet-landscape") {
					const sel = select(`#${section} #book_${copy[value].scrollToId}`)
						.node()
						.getBoundingClientRect().x;
					if ($activeSection == "raunchiness") {
						const padding = 330;
						const val = $xShiftRaunch + sel - margins - padding;
						slideSpeed = Math.max(Math.abs(sel) / 750, 1.5);
						xShiftRaunch.set(val);
					}
				} 

				if (deviceType() == "mobile-portrait") {
					const sel = select(`#${section} #book_${copy[value].scrollToId}`)
						.node()
						.getBoundingClientRect().x;
					if ($activeSection == "raunchiness") {
						const padding = 380;
						const val = $xShiftRaunch + sel - margins - padding;
						slideSpeed = Math.max(Math.abs(sel) / 750, 1.5);
						xShiftRaunch.set(val);
					}
				} else if (deviceType() == "mobile-landscape") {
					const sel = select(`#${section} #book_${copy[value].scrollToId}`)
						.node()
						.getBoundingClientRect().x;
					if ($activeSection == "raunchiness") {
						const padding = 550;
						const val = $xShiftRaunch + sel - margins - padding;
						slideSpeed = Math.max(Math.abs(sel) / 750, 1.5);
						xShiftRaunch.set(val);
					}
				}

				if (
					deviceType() == "desktop" &&
					scrollaDe3em3OsAnos.includes(copy[value].scrollToId) && window.matchMedia('(min-width: 1500px)').matches
				) {
					const sel = select(`#${section} #book_${copy[value].scrollToId}`)
						.node()
						.getBoundingClientRect().x;
					if ($activeSection == "raunchiness") {
						const padding = -20;
						const val = $xShiftRaunch + sel - margins - padding;
						slideSpeed = Math.max(Math.abs(sel) / 750, 1.5);
						xShiftRaunch.set(val);
					}
				} 
				
				if (
					deviceType() == "desktop" 
					 && window.matchMedia('(max-width: 1499px)').matches
				) {
					const sel = select(`#${section} #book_${copy[value].scrollToId}`)
						.node()
						.getBoundingClientRect().x;
					if ($activeSection == "raunchiness") {
						const padding = -20;
						const val = $xShiftRaunch + sel - margins - padding;
						slideSpeed = Math.max(Math.abs(sel) / 750, 1.5);
						xShiftRaunch.set(val);
					}
				} 
			
			}
			if (
				value == copy.length - 1 &&
				select(`#${$activeSection} .overflow-wrap`).node() !== null
			) {
				if ($activeSection == "raunchiness") {
					const val = $xShiftRaunch;
					maxWidthRaunch.set(val);
				}
			}
		}
	}

	function getYearLengths(data, bookRows) {
		chunkWidths = [];
		if (wallH !== undefined && bookRows !== undefined) {
			bookWidth = Math.floor((wallH / bookRows) * 0.66);
			data.forEach((d, i) => {
				const year = d[0];
				const chunkLength = d[1].length;
				const remainder = chunkLength % bookRows;
				const bookCols = setBookCols(remainder, chunkLength, bookRows);
				const chunkWidth =
					bookCols == 0 ? bookWidth + 8 : bookCols * bookWidth + 8;
				chunkWidths.push({ year: year, chunkWidth: chunkWidth });
			});
		}

		function setBookCols(remainder, chunkLength, bookRows) {
			if (wallH > 550) {
				const val =
					remainder <= 2 && remainder !== 0
						? Math.round(chunkLength / bookRows) + 1
						: Math.round(chunkLength / bookRows);
				return val;
			} else {
				const val =
					remainder <= 1 && remainder !== 0
						? Math.round(chunkLength / bookRows) + 1
						: Math.round(chunkLength / bookRows);
				return val;
			}
		}
	}

	function shiftSlider() {
		if (
			totalShelfWidth &&
			$maxWidthRaunch !== undefined &&
			$maxWidthIllo !== undefined &&
			$maxWidthRace !== undefined
		) {
			if ($activeSection == "raunchiness") {
				const val = ($sliderStoreRaunch * $maxWidthRaunch) / 100;
				xShiftRaunch.set(val);
			}
		}
	}

	function getBookRows(wallH) {
		// if (wallH !== undefined) {
		//     bookRows = wallH > 550 ? 5 : 4;
		//     shelves = wallH > 550 ? [0, 1, 2, 3, 4] : [0, 1, 2, 3];
		// }
	}

	function loadImgs($activeSection, section) {
		imgsLoaded =
			$activeSection == section || $activeSection == "intro" ? true : false;
	}

	$: value, shiftX(value);
	$: wallH, getBookRows(wallH);
	$: w, getYearLengths(yearGroups, bookRows);
	$: wallH, getYearLengths(yearGroups, bookRows);
	$: chunkWidths, calcTotalWidth(chunkWidths);
	$: $sliderStoreRaunch, shiftSlider();
	$: $sliderStoreIllo, shiftSlider();
	$: $sliderStoreRace, shiftSlider();
	$: $activeSection, loadImgs($activeSection, section);

	const excludedYears = [
		"1929",
		"1930",
		"1931",
		"1932",
		"1933",
		"1934",
		"1935",
		"1936",
		"1937",
		"1938",
		"1939",
		"1940",
		"1929.1",
		"1929.2",
		"1930.1",
		"1930.2",
		"1931.1",
		"1931.2",
		"1932.1",
		"1932.2",
		"1933.1",
		"1933.2",
		"1934.1",
		"1934.2",
		"1935.1",
		"1935.2",
		"1936.1",
		"1936.2",
		"1937.1",
		"1937.2",
		"1938.1",
		"1938.2",
		"1939.1",
		"1939.2",
		"1940.1",
		"1940.2"
	];
</script>

<svelte:window bind:innerHeight={h} bind:innerWidth={w} />

<section id="wall-{section}" class="wall">
	<div
		class="overflow-wrap"
		style="transform:translate3d(-{xShiftSection}px,0,0); transition: {slideSpeed}s ease-in-out;"
	>
		{#each yearGroups as year, i}
			{#if !excludedYears.includes(year[0])}
				<div class="year-wrapper" bind:clientHeight={wallH}>
					{#if wallH !== undefined}
						<div class="yearChunk" id="chunk-{year[0]}">
							<div class="books">
								{#each year[1] as book, i}
									<Book {book} index={i} {wallH} {bookRows} {imgsLoaded} />
								{/each}
							</div>
						</div>
					{/if}
				</div>
			{/if}
		{/each}
	</div>
</section>

<style>
	.overflow-wrap {
		display: flex;
		flex-direction: row;
		/* padding: 0 5rem; */
		transition: 1.5s ease-in-out;
	}

	.wall {
		margin: 0;
		padding: 0;
		/* display: flex; */
		flex-direction: row;
		height: 100vh;
		z-index: 1;
		position: relative;
		transition: 1s ease-in-out;
		overflow-x: hidden;
		width: 100%;
	}

	.yearChunk {
		width: 29rem;
	}

	.year-wrapper {
		padding-right: 2rem;
		/* padding-left: 5rem; */
		pointer-events: none;
	}

	.books {
		height: auto;
		position: relative;
		z-index: 999;

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		transform: translate3d(0, 0, 0);
		-webkit-transform: translate3d(0, 0, 0);
	}
	@media only screen and (max-width: 480px) {
		.yearChunk {
			width: 23rem !important;
		}
	}
</style>
