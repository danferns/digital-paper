<script lang="ts">
	import { onMount } from 'svelte';
	import Paper from '../components/Paper.svelte';
	import Button from '../components/Button.svelte';
	import {
		createFreshPaper,
		getPaperByTimeString,
		listStoredPapers
	} from '../typescript/PaperStore';
	import { get, type Writable } from 'svelte/store';
	import type { PaperType } from '../typescript/Paper';

	let paperStore: Writable<PaperType>;
	let text: string = '';

	$: {
		paperStore?.update((paper) => {
			paper.text = text;
			return paper;
		});
	}

	onMount(() => {
		const existingPapers = listStoredPapers();
		if (existingPapers.length === 0) {
			paperStore = createFreshPaper();
		} else {
			paperStore = getPaperByTimeString(existingPapers[existingPapers.length - 1]);
			text = $paperStore.text;
		}
	});
</script>

<svelte:head>
	<title>paper</title>
</svelte:head>

<div class="container">
	{#key paperStore}
		<Paper hint="a fresh page..." bind:text />
	{/key}
</div>

<div class="tools">
	<Button
		on:click={() => {
			const freshPaperStore = createFreshPaper();
			text = get(freshPaperStore).text;
			paperStore = freshPaperStore;
		}}>+</Button
	>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

	:global(html, body) {
		height: 100%;
		width: 100%;
		margin: 0px;
		padding: 0px;
	}

	.container {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		background-color: hsl(0, 0%, 97%);
	}

	.tools {
		position: absolute;
		bottom: 10px;
		right: 10px;
	}
</style>
