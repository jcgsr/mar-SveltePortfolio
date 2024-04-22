<script>
	import Hero from '../components/hero.svelte';
	import Services from '../components/services/services.svelte';
	import Contacts from '../components/contatos/contacts.svelte';
</script>

<div>
	<main class="w-full">
		<div class=" bg-slate-400">
			<Hero />
		</div>
		<div id="projetos" class=" bg-slate-600">
			<Services />
			<Contacts />
		</div>
	</main>
</div>
