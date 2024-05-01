<script>
	import { services } from './services';
	import { animate, stagger, inView } from 'motion';

	inView('div', ({ target }) => {
		animate(
			target.querySelectorAll('.spanM'),
			{
				y: ['-50px', '0'],
				opacity: ['0', '1']
			},
			{ delay: stagger(0.3), duration: 0.8, easing: [0.17, 0.55, 0.55, 1] }
		),
			animate(
				target.querySelectorAll('.imgM'),
				{
					y: ['50px', '0'],
					opacity: ['0', '1']
				},
				{ delay: stagger(0.3), duration: 0.8, easing: [0.17, 0.55, 0.55, 1] }
			);
	});
</script>

<section class="bg-gray-700 text-white">
	<h2 class="text-center font-orbitron uppercase text-5xl p-6 mb-4">serviços</h2>
	<div
		class="flex flex-col lg:flex-row lg:flex-wrap justify-center text-white justify-items-stretch"
	>
		{#each services as { nome, des, icon, tec1, tec2, tec3 }}
			<div
				class="rounded-lg font-jura overflow-hidden shadow-white shadow-md m-4 lg:w-1/4
        hover:scale-105 delay-200 duration-700 dark:shadow-white"
			>
				<img class="text-white imgM" src={icon} alt={nome} />
				<div class="flex flex-row font-jura font-bold">
					<p id="shadow">{nome}</p>
				</div>
				<p>
					{des}
				</p>
				<div class="flex flex-row justify-evenly text-xs">
					<span class="spanM">{tec1}</span>
					<span class="spanM">{tec2}</span>
					<span class="spanM">{tec3}</span>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	p {
		margin: 0 auto;
		padding: 1rem;
		text-align: center;
	}
	#shadow {
		text-shadow: 1px 1px #aaa;
	}
	img {
		margin: 0 auto;
		color: white;
	}
	span {
		text-align: center;
		background-color: gray;
		padding: 0.5rem;
		margin: 0.5rem;
		border-radius: 5px;
	}
</style>
