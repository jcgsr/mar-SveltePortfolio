<script>
	import Hero from '../components/hero.svelte';
	import Projects from '../components/projects/projects.svelte';
	import Contacts from '../components/contatos/contacts.svelte';
</script>

<div>
	<main class="w-full">
		<div class=" bg-slate-400">
			<Hero />
		</div>
		<div id="projetos" class=" bg-slate-600">
			<Projects />
			<Contacts />
		</div>
	</main>
</div>
