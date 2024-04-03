<script>
	import Header from '../components/header.svelte';
	import Hero from '../components/hero.svelte';
	import Projects from '../components/projects/projects.svelte';
</script>

<div>
	<Header />
	<main class="w-full">
		<div class=" bg-slate-400">
			<Hero />
		</div>
		<div id="projetos" class=" bg-slate-600">
			<Projects />
		</div>
	</main>
</div>
