<script>
	import { projects } from './projects';
	import Icon from '@iconify/svelte';
</script>

<section class="bg-slate-500">
	<h1>projects</h1>
	<div class="flex flex-col lg:flex-row lg:flex-wrap justify-center justify-items-stretch">
		{#each projects as { nome, img, tec1, tec2, tec3, tec4, end }}
			<div
				class="rounded-lg overflow-hidden shadow-lg m-4 lg:w-1/4
   hover:scale-105 delay-200 duration-700 dark:shadow-white"
			>
				<img src={img} alt={nome} />
				<div class="flex flex-row">
					<span>{nome}</span><span>
						<a href={end}>
							<Icon
								icon="f7:arrow-turn-up-right"
								inline={true}
								style="font-size: 20px; font-weight: bold;"
							/></a
						><span> </span></span
					>
				</div>
				<span>{tec1}</span> <span>{tec2}</span>
				<span>{tec3}</span> <span>{tec4}</span>
				<p></p>
			</div>
		{/each}
	</div>
</section>

<style>
	span {
		margin: 0.3rem;
		text-align: left;
	}
</style>
