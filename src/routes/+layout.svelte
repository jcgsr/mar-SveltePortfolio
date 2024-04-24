<script>
	import '../app.css';
	import Header from '../components/header.svelte';
	import { fade } from 'svelte/transition';
	export let data;
	$: pathname = data.pathname;
</script>

<div class="app">
	<Header />

	{#key pathname}
		<main in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
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
		color: gray;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
