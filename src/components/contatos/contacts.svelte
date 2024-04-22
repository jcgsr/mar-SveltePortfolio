<script>
	import Icon from '@iconify/svelte';
</script>

<section id="contatos" class="bg-slate-100">
	<h1 class="text-center text-5xl p-6 mb-4 font-kolnia uppercase">contatos</h1>
	<div
		class="flex flex-col text-center justify-center m-auto
    md:flex-row md:justify-around"
	>
		<a href="https://wa.me/5579988284730?text=Gostaria%de%saber%o%valor%..." target="_blank">
			<Icon icon="mdi:whatsapp" />
		</a>
		<a href="https://www.facebook.com/cabral8guerra" target="_blank">
			<Icon icon="mdi:facebook" />
		</a>
		<a href="https://www.instagram.com/cabralguerra/" target="_blank">
			<Icon icon="mdi:instagram" />
		</a>
		<a href="mailto:cabralguerra@gmail.com" target="_blank">
			<Icon icon="mdi:email" />
		</a>
	</div>
</section>

<style>
	a {
		font-size: 6rem;
		margin: 2rem auto;
		transition: color ease-in-out 0.6s;
		transition: transform ease-in-out 0.8s;
	}
	a:hover {
		color: red;
		transform: scale(1.1);
	}
	@media only screen and (max-width: 820px) {
		a {
			font-size: 4rem;
		}
	}
</style>
