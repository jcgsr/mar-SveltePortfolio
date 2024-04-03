<script>
	import { projects } from './projects';
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
				<h4>{nome}</h4>
				<span>{tec1}</span> <span>{tec2}</span>
				<span>{tec3}</span> <span>{tec4}</span>
				<p>
					<a href={end}>visite</a>
				</p>
			</div>
		{/each}
	</div>
</section>
