<script>
	import '../app.css';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
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
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
