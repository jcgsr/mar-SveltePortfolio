<script>
	import { projects } from './projects';
</script>

<section class="bg-gray-700 mt-1">
	<h1 class="text-center text-white font-orbitron uppercase text-5xl p-6 mb-4">projetos</h1>
	<div class="flex flex-col lg:flex-row lg:flex-wrap justify-center justify-items-stretch">
		{#each projects as { nome, img, tec1, tec2, tec3, tec4, end }}
			<div
				class="rounded-lg overflow-hidden shadow-md shadow-white m-4 lg:w-1/4
        hover:scale-105 delay-200 duration-700 dark:shadow-white bg-gradient-to-r from-gray-400 to-gray-900 hover:from-gray-900 hover:to-gray-400 hover:delay-200"
			>
				<img src={img} alt={nome} />
				<div class="flex flex-row">
					<a class="font-orbitron ml-4 text-white" href={end} target="_blank"> {nome}</a>
				</div>

				<div class="flex flex-row justify-around text-xs">
					<span>{tec1}</span> <span>{tec2}</span>
					<span>{tec3}</span> <span>{tec4}</span>
				</div>
			</div>
		{/each}
	</div>
</section>

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
