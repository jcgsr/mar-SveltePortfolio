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
	<div class="bg-slate-600 text-white md:w-3/6">
		<h3 class="text-6xl md:text-8xl font-jura">eu sou</h3>
		<h2 class="text-6xl md:text-8xl font-orbitron">Jovane</h2>
		<div class="container sm:w-3/5 lg:w-3/4">
			<h3 class="text-5xl md:text-4xl lg:text-5xl font-kolnia mt-3 m-auto pb-2 typed-out">
				programador web
			</h3>
		</div>
		<h3 class="text-5xl md:text-4xl lg:text-5xl font-dancing mt-3 fade-in">tradutor</h3>
	</div>
	<div class="bg-slate-300 md:w-2/6">
		<img class="my-6 rounded-lg" src={hero} alt="programador" /><a
			class="text-xs ml-2"
			href="https://www.freepik.com/free-vector/programming-concept-illustration_7118756.htm#fromView=search&page=1&position=34&uuid=1afe25d6-b397-480d-8bef-cc411cfc373f"
			>Image by storyset on Freepik</a
		>
	</div>
</section>

<style>
	.container {
		display: inline-block;
	}
	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}
	@keyframes blink {
		from {
			border-color: transparent;
		}
		to {
			border-color: gray;
		}
	}
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	.typed-out {
		overflow: hidden;
		border-right: 0.15em solid white;
		white-space: nowrap;
		width: 0;
		animation:
			typing 3s steps(20, end) forwards infinite,
			blink 0.8s infinite;
	}
	.fade-in {
		animation: fadeIn 5s infinite;
	}
</style>
