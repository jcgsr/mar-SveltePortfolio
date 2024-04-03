<script>
	import Particles, { particlesInit } from '@tsparticles/svelte';
	import { loadSlim } from '@tsparticles/slim';
	import hero from '../lib/img/3426526.jpg';
	// <a href=""></a>
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
				value: 20
			}
		},
		interactivity: {
			events: {
				onHover: {
					enable: true,
					mode: 'repulse'
				}
			}
		},
		fullScreen: {
			enable: false
		}
	};

	void particlesInit(async (engine) => {
		await loadSlim(engine);
	});
</script>

<section
	class="bg-red-300 flex flex-col-reverse align-middle text-center justify-center md:flex-row
  "
>
	<div class="bg-slate-700 md:w-2/6">
		<Particles id="tsparticles" style="" options={particlesConfig} />
	</div>
	<div class="bg-slate-600 md:w-3/6">
		<h2 class="text-8xl">eu sou jovane</h2>
		<h3 class="text-3xl mt-3">programador web</h3>
		<h3 class="text-3xl mt-3">tradutor</h3>
	</div>
	<div class="bg-slate-300 md:w-2/6 mx-2">
		<img class="my-6 rounded-lg" src={hero} alt="programador" /><a
			class="text-xs ml-2"
			href="https://www.freepik.com/free-vector/programming-concept-illustration_7118756.htm#fromView=search&page=1&position=34&uuid=1afe25d6-b397-480d-8bef-cc411cfc373f"
			>Image by storyset on Freepik</a
		>
	</div>
</section>
