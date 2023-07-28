<script lang="ts">
	export let text = '';
	export let hint = '';

	import { onMount, tick } from 'svelte';

	let paper: HTMLElement;

	let oldText = text;

	onMount(() => {
		paper.focus();
	});
</script>

<textarea
	class="paper"
	placeholder={hint}
	spellcheck={false}
	bind:value={text}
	bind:this={paper}
	on:input={async () => {
		await tick();
		if (!text.startsWith(oldText)) {
			text = oldText;
		} else {
			oldText = text;
		}
	}}
/>

<style>
	textarea {
		border: none;
		overflow: auto;
		outline: none;

		-webkit-box-shadow: none;
		-moz-box-shadow: none;
		box-shadow: none;

		resize: none; /*remove the resize handle on the bottom right*/
	}

	.paper {
		height: calc(100% - 4rem);
		width: min(calc(100% - 4rem), 70ch);
		margin: 0px;
		padding: 2rem;
	}

	.paper {
		font-size: 1.2rem;
		font-family: 'Open Sans', sans-serif;
		box-shadow: 0px 0px 100px -50px rgba(0, 0, 0, 0.1);
	}
</style>
