<script>
	import { services } from './services';
	import Icon from '@iconify/svelte';
</script>

<section class="bg-slate-500">
	<h1 class="text-center font-orbitron uppercase text-5xl p-6 mb-4">serviços</h1>
	<div class="flex flex-col lg:flex-row lg:flex-wrap justify-center justify-items-stretch">
		{#each services as { nome, des, icon }}
			<div
				class="rounded-lg overflow-hidden shadow-lg m-4 lg:w-1/4
        hover:scale-105 delay-200 duration-700 dark:shadow-white"
			>
				<img src={icon} alt={nome} />
				<div class="flex flex-row">
					<p>{nome}</p>
				</div>
				<p>
					{des}
				</p>
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
	img {
		margin: 0 auto;
	}
</style>
