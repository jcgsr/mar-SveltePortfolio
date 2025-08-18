<script>
	import Particles, { particlesInit } from '@tsparticles/svelte';
	import { loadSlim } from '@tsparticles/slim';
	import hero from '../lib/img/Programming-amico.svg';
	let particlesConfig = {
		particles: {
			color: {
				value: '#fff'
			},
			links: {
				enable: true,
				color: '#fff'
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

	// motion one

	import { animate, stagger, inView } from 'motion';
	inView('div', ({ target }) => {
		animate(
			target.querySelectorAll('h3'),
			{
				y: ['-50px', '0'],
				opacity: ['0', '1']
			},
			{ delay: stagger(0.5), duration: 1.2, easing: [0.17, 0.55, 0.55, 1] }
		),
			animate(
				target.querySelectorAll('h1'),
				{
					y: ['50px', '0'],
					opacity: ['0', '1'],
					color: ['#6b7280']
				},
				{ delay: stagger(0.3), duration: 1.2, easing: [0.17, 0.55, 0.55, 1] }
			);
	});
</script>

<section
	class="flex flex-col-reverse align-middle text-center justify-center md:flex-row mt-1
  "
>
	<div class="bg-black md:w-2/6">
		<Particles id="tsparticles" style="" options={particlesConfig} />
	</div>
	<div class="bg-black text-white md:w-3/6">
		<h3 class="text-6xl md:text-8xl font-jura text-gray-600">eu sou</h3>
		<h1 class="text-6xl md:text-8xl font-orbitron">Jovane</h1>
		<div class="container sm:w-3/5 lg:w-3/4">
			<h3
				class="text-5xl text-gray-400 md:text-4xl lg:text-5xl font-kolnia mt-3 m-auto pb-2 typed-out"
			>
				programador web
			</h3>
		</div>
		<h3 class="text-5xl md:text-4xl text-gray-300 lg:text-5xl font-dancing mt-3 fade-in">
			tradutor
		</h3>
	</div>
	<div class="bg-black md:w-2/6">
		<img class="my-6 transparent rounded-lg" src={hero} alt="programador" /><a
			class="text-xs text-gray-300 ml-2"
			href="https://storyset.com/web">Web illustrations by Storyset</a
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
