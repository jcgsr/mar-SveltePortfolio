<script>
	import Icon from '@iconify/svelte';
	let y;
</script>

<svelte:window bind:scrollY={y} />
<section id="contatos" class="bg-gray-100 text-gray-500">
	<h1 class="text-center text-5xl p-6 mb-4 font-kolnia uppercase">contatos</h1>
	<div
		class="flex flex-col text-center justify-center m-auto
    md:flex-row md:justify-around"
	>
		<a
			href="https://wa.me/5579988284730?text=Gostaria%de%saber%o%valor%..."
			class="aos-hidden-left"
			class:aos-show={y >= 100}
			target="_blank"
		>
			<Icon icon="mdi:whatsapp" />
		</a>
		<a
			href="https://github.com/jcgsr"
			target="_blank"
			class="aos-hidden-bottom"
			class:aos-show={y >= 150}
		>
			<Icon icon="mdi:github" />
		</a>

		<a
			href="mailto:cabralguerra@gmail.com"
			target="_blank"
			class="aos-hidden-bottom"
			class:aos-show={y >= 150}
		>
			<Icon icon="mdi:email" />
		</a>

		<a
			href="https://www.facebook.com/cabral8guerra"
			target="_blank"
			class="aos-hidden-bottom"
			class:aos-show={y >= 150}
		>
			<Icon icon="mdi:facebook" />
		</a>
		<a
			href="https://www.instagram.com/cabralguerra/"
			target="_blank"
			class="aos-hidden-right"
			class:aos-show={y >= 100}
		>
			<Icon icon="mdi:instagram" />
		</a>
	</div>
</section>

<style>
	a {
		font-size: 6rem;
		margin: 2rem auto;
		transition: ease-in-out 0.8s;
	}
	a:hover {
		color: #313030;
		transition: ease-in-out 0.6s;
	}
	@media only screen and (max-width: 820px) {
		a {
			font-size: 4rem;
		}
	}
	.aos-hidden-left {
		opacity: 0;
		filter: blur(3px);
		transform: translateX(-100%);
		transition: all 1.3s;
	}
	.aos-hidden-right {
		opacity: 0;
		filter: blur(3px);
		transform: translateX(100%);
		transition: all 1.3s;
	}
	.aos-hidden-bottom {
		opacity: 0;
		filter: blur(3px);
		transform: translateY(100%);
		transition: all 1.3s;
	}

	.aos-show {
		opacity: 1;
		filter: blur(0);
		transform: translateX(0);
	}
</style>
