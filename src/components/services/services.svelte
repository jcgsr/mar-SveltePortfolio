<script>
	import { services } from './services';
</script>

<section class="bg-gray-700 text-white">
	<h1 class="text-center font-orbitron uppercase text-5xl p-6 mb-4">serviços</h1>
	<div
		class="flex flex-col lg:flex-row lg:flex-wrap justify-center text-white justify-items-stretch"
	>
		{#each services as { nome, des, icon, tec1, tec2, tec3 }}
			<div
				class="rounded-lg font-jura overflow-hidden shadow-white shadow-md m-4 lg:w-1/4
        hover:scale-105 delay-200 duration-700 dark:shadow-white"
			>
				<img class="text-white" src={icon} alt={nome} />
				<div class="flex flex-row font-jura font-bold">
					<p id="shadow">{nome}</p>
				</div>
				<p>
					{des}
				</p>
				<div class="flex flex-row justify-evenly text-xs">
					<span>{tec1}</span>
					<span>{tec2}</span>
					<span>{tec3}</span>
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
