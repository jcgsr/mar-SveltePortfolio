<script>
	import Hero from '../components/hero.svelte';
	import Services from '../components/services/services.svelte';
	import Contacts from '../components/contatos/contacts.svelte';

	// metatags
	import Seo from '../lib/seo.svelte';
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
<Seo
	title="Home"
	description="Página inicial de Jovane"
	type="website"
	image="https://jovane.netlify.app/_app/immutable/assets/Programming-amico.BInWx-FY.svg"
	<meta
	name="Home"
	content="Portfólio de web designer de Jovane"
/>
<meta
	name="keywords"
	content="Aracaju, Desenvolvedor Web, Progamador, JavaScript, Site, Svelte, Jovane"
/>
/>
