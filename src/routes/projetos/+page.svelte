<script>
	import { projects } from './projects';
	let y;
	// metatags
	import Seo from '../../lib/seo.svelte';

	// motion one

	import { animate, stagger, inView } from 'motion';
	inView('div', ({ target }) => {
		animate(
			target.querySelectorAll('.aM'),
			{
				y: ['-50px', '0'],
				opacity: ['0', '1']
			},
			{ delay: stagger(0.5), duration: 0.4, easing: [0.17, 0.55, 0.55, 1] }
		),
			animate(
				target.querySelectorAll('.spanM'),
				{
					y: ['50px', '0'],
					opacity: ['0', '1']
				},
				{ delay: stagger(0.3), duration: 0.4, easing: [0.17, 0.55, 0.55, 1] }
			);
	});
</script>

<section class="bg-gray-700 mt-1">
	<h2 class="text-center text-white font-orbitron uppercase text-5xl p-6 mb-4">projetos</h2>
	<div class="flex flex-col lg:flex-row lg:flex-wrap justify-center justify-items-stretch divM">
		{#each projects as { nome, img, tec1, tec2, tec3, tec4, end }}
			<div
				class="rounded-lg overflow-hidden shadow-md shadow-white m-4 lg:w-1/4
                hover:scale-105 delay-200 duration-700 dark:shadow-white bg-gradient-to-r from-gray-400 to-gray-900 hover:from-gray-900 hover:to-gray-400 hover:delay-200 aos-hidden-bottom"
				class:aos-show={y >= 120}
			>
				<img src={img} alt={nome} />
				<div class="flex flex-row">
					<a
						class="font-orbitron ml-4 text-white aM"
						href={end}
						title="clique para visitar o projeto"
						target="_blank"
					>
						{nome}</a
					>
				</div>

				<div class="flex flex-row justify-around text-xs">
					<span class="spanM">{tec1}</span> <span class="spanM">{tec2}</span>
					<span class="spanM">{tec3}</span> <span class="spanM">{tec4}</span>
				</div>
			</div>
		{/each}
	</div>
</section>
<Seo title="Projetos" description="Página dos projetos de Jovane" type="website" />

<style>
	span {
		margin: 0.8rem;
		padding: 0.4rem;
		background-color: gray;
		text-align: left;
		font-family: 'Orbitron', sans-serif;
		color: white;
		font-size: smaller;
		border-radius: 5px;
	}
</style>
