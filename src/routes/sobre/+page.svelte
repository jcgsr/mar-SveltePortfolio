<script>
	import jd from '../../lib/img/jd.webp';

	// metatags
	import Seo from '../../lib/seo.svelte';

	import { onMount } from 'svelte';
	//motion one
	import { animate } from 'motion';

	onMount(() => {
		animate('#imgM', { x: ['-200px', '0px'], easing: 'ease-in' }, { duration: 3 });
		animate('#textM', { x: ['200px', '0px'], easing: 'ease-in' }, { duration: 3 });
	});
</script>

<section class="w-3/4 m-auto text-gray-500 dark:bg-gray-800 dark:text-gray-100 mt-8 mb-8">
	<h2 class="text-center uppercase text-5xl p-4 mb-4 font-jura">sobre mim</h2>
	<div class="sobre flex flex-col lg:flex-row">
		<img
			class="w-4/4 mb-4 lg:w-2/4 mr-4 rounded-md"
			id="imgM"
			src={jd}
			alt="Foto de Jovane e Diana"
		/>
		<p class="font-jura" id="textM">
			Pernambucano do Recife, alvirrubro, pai (abestalhado) de Diana, Beethoven, Mozart, Brenda,
			Nina e Mia. Vegetariano, defensor dos direitos dos animais, enxadrista, schopenhauriano,
			socrático, guitarrista (admirador da Les Paul), violonista, bebedor de whisky. Atualmente,
			moro em Aracaju, mas doido para voltar para Recife. Usuário Linux desde sempre, usando Fedora
			41. Mestrando (Letras) na UFS. Estudando JavaScript (sempre), React, Svelte, Vue... onde tiver
			JS para poder realizar meu objetivo de me tornar um programador profissional e viver só disso.
		</p>
	</div>
</section>
<Seo
	title="Sobre"
	description="Página sobre Jovane"
	type="website"
	image="https://jovane.netlify.app/_app/immutable/assets/Programming-amico.BInWx-FY.svg"
/>
