<script>
	import '../app.css';
	import Header from '../components/header.svelte';
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	export let data;
</script>

<div class="app">
	<Header />

	{#key data.pathname}
		<main
			in:fly={{ easing: cubicOut, y: 10, duration: 300, delay: 400 }}
			out:fly={{ easing: cubicIn, y: -10, duration: 300 }}
		>
			<slot />
		</main>
	{/key}
	<footer>&copy; 2024 - Jovane</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	footer {
		display: flex;
		justify-content: center;
		color: #c5ae4f;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
