<script>
	import Icon from '@iconify/svelte';
	let showMenu = false;
	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<nav class="flex text-gray-700 justify-around p-3 font-jura bg-transparent">
	<a href="/">
		<span>jovane</span>
	</a>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click={toggleNavbar} class="flex lg:hidden" on:keypress={toggleNavbar}>
		<button class="mobile-dropdown-toggle" aria-hidden="true">
			{#if showMenu}
				<Icon icon="mdi:close" style="color: black" />
			{:else}
				<Icon icon="mdi:hamburger-menu" style="color: black" />
			{/if}
		</button>
	</div>
	<div
		class="flex-col mt-8 space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-10 lg:mt-0 {showMenu
			? 'flex'
			: 'hidden'}"
	>
		<a href="/projetos">projetos</a>
		<a href="/#contatos">contatos</a>
		<a href="/sobre">sobre</a>
	</div>
</nav>

<style>
	a {
		margin-left: 1rem;
	}
</style>
