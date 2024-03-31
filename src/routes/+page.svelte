<script>
	import { particlesInit } from '@tsparticles/svelte';
	import { onMount } from 'svelte';
	import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

	let ParticlesComponent;

	onMount(async () => {
		const module = await import('@tsparticles/svelte');

		ParticlesComponent = module.default;
	});

	let particlesConfig = {
		particles: {
			color: {
				value: '#000'
			},
			links: {
				enable: true,
				color: '#000'
			},
			move: {
				enable: true
			},
			number: {
				value: 30
			}
		}
	};

	void particlesInit(async (engine) => {
		await loadSlim(engine);
	});
</script>

<div>
	<svelte:component
		this={ParticlesComponent}
		id="tsparticles"
		class="put your classes here"
		style=""
		options={particlesConfig}
	/>
	<h2 class="text-center">portfolio</h2>
</div>
<div class="mt-5 bg-gray-300 p-40">
	<h2>jobs</h2>
</div>
