<script>
	import Icon from '@iconify/svelte';
</script>

<section class="bg-slate-500">
	<div>
		<h1 class="text-center text-6xl mb-4">contatos</h1>
		<div
			class="rounded-lg overflow-hidden shadow-lg m-4 lg:w-1/4
      hover:scale-105 delay-200 duration-700 dark:shadow-white"
		>
			<div class="flex flex-row">
				<span>
					<a href="https://wa.me/5579988284730?text=Gostaria%de%saber%o%valor%..." target="_blank">
						<Icon
							icon="logos:whatsapp-monochrome-icon"
							inline={true}
							style="font-size: 20px; font-weight: bold;"
						/>
					</a><span>
						<span>
							<a href="https://www.facebook.com/cabral8guerra" target="_blank">
								<Icon icon="fa6-brands:square-facebook" />
							</a><span>
								<span>
									<a href="https://www.instagram.com/cabralguerra/" target="_blank">
										<Icon icon="simple-icons:instagram" />
									</a><span>
										<span>
											<a href="mailto:cabralguerra@gmail.com" target="_blank">
												<Icon icon="ic:outline-email" />
											</a><span> </span></span
										>
									</span></span
								>
							</span></span
						></span
					></span
				>
			</div>
		</div>
	</div>
</section>

<style>
	span {
		margin: 0.3rem;
		text-align: left;
	}
</style>
