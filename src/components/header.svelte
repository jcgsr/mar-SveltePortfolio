<script>
	import Icon from '@iconify/svelte';
	let showMenu = false;
	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<div>
	<div>
		<nav
			class="lg:flex bg-transparent px-4 lg:px-10 py-4 mx-auto md:justify-between md:items-center shadow-md shadow-gray-800"
		>
			<div class="flex items-center align-middle justify-between">
				<a href="/">
					<span class="text-gray-500">jovane</span>
				</a>
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div on:click={toggleNavbar} class="flex lg:hidden" on:keypress={toggleNavbar}>
					<button class="text-white focus:outline-none">
						{#if showMenu}
							<Icon icon="mdi:close" style="color: gray" />
						{:else}
							<Icon icon="mdi:hamburger-menu" style="color: gray" />
						{/if}
					</button>
				</div>
			</div>
			<div
				class="flex-col mt-8 space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-10 lg:mt-0 {showMenu
					? 'flex '
					: 'hidden'}"
			>
				<a
					class="text-gray-500 hover:bg-gray-500 hover:text-gray-50 transition transform duration-500 ease-in-out p-2 group-hover:mr-8"
					href="/projetos">projetos</a
				>
				<a
					class="text-gray-500 hover:bg-gray-500 hover:text-gray-50 transition transform duration-500 ease-in-out p-2 group-hover:mr-8"
					href="/#contatos">contatos</a
				>
				<a
					class="text-gray-500 hover:bg-gray-500 hover:text-gray-50 transition transform duration-500 ease-in-out p-2 group-hover:mr-8"
					href="/sobre">sobre</a
				>
			</div>
		</nav>
	</div>
</div>

<style>
	a {
		margin-left: 1rem;
	}
</style>
