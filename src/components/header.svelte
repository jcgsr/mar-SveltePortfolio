<script>
	import Icon from '@iconify/svelte';
	import Logo from '../lib/img/logo.png';
	let showMenu = false;
	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<div>
	<div>
		<nav
			class="lg:flex bg-transparent px-4 lg:px-10 py-4 mx-auto md:justify-between md:items-center shadow-md shadow-gray-800 dark:shadow-gray-100"
		>
			<div class="flex items-center align-middle justify-between">
				<a href="/">
					<img src={Logo} alt="logo de Jovane" class="h-6 md:h-8" />
				</a>
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div on:click={toggleNavbar} class="flex lg:hidden" on:keypress={toggleNavbar}>
					<button class="text-white focus:outline-none mr-4">
						{#if showMenu}
							<Icon icon="mdi:close" style="color: #64748b" width="40" />
						{:else}
							<Icon icon="mdi:hamburger-menu" style="color: #64748b" width="40" />
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
					on:click={toggleNavbar}
					class="text-gray-500 font-bold dark:text-gray-50 hover:bg-gray-500 hover:text-gray-50 text-xl transition transform duration-500 ease-in-out p-2 group-hover:mr-8 rounded"
					href="/projetos">projetos</a
				>
				<a
					on:click={toggleNavbar}
					class="text-gray-500 font-bold dark:text-gray-50 hover:bg-gray-500 hover:text-gray-50 text-xl transition transform duration-500 ease-in-out p-2 group-hover:mr-8 rounded"
					href="/#contatos">contatos</a
				>
				<a
					on:click={toggleNavbar}
					class="text-gray-500 font-bold dark:text-gray-50 hover:bg-gray-500 hover:text-gray-50 text-xl transition transform duration-500 ease-in-out p-2 group-hover:mr-8 rounded"
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
