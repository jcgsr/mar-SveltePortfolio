<script>
	import { page } from '$app/stores';

	export let title;
	export let description;
	export let type;
	export let image;
	export let squareImage;
	export let article = false;
	$: url = $page.url.href;
</script>

<svelte:head>
	<title>{title} | Jovane</title>
	<meta name="description" content={description} />

	<!-- open graph -->
	<meta property="og:site_name" content={title} />

	<meta property="og:url" content={url} />

	<meta property="og:type" content={article ? 'article' : 'website'} />

	<meta property="og:title" content={title} />

	<meta property="og:description" content={description} />

	{#if image}
		<meta property="og:image" content={image.url} />

		<meta property="og:image:width" content="1200" />

		<meta property="og:image:height" content="627" />

		<meta property="og:image:alt" content={image.alt} />
	{/if}

	{#if squareImage}
		<meta property="og:image" content={squareImage.url} />

		<meta property="og:image:width" content="400" />

		<meta property="og:image:height" content="400" />

		<meta property="og:image:alt" content={image.alt} />
	{/if}

	<!-- {#if article} -->
	<!---->
	<!--   <meta property="article:publisher" content={facebookPage} /> -->
	<!---->
	<!--   <meta property="article:author" content={facebookAuthorPage} /> -->
	<!---->
	<!--   <meta property="article:published_time" content={datePublished} /> -->
	<!---->
	<!--   <meta property="article:modified_time" content={lastUpdated} /> -->
	<!---->
	<!-- {/if} -->
	{@html `<script type="application/ld+json">
{
"@context": "http://schema.org",
"@type": "${type}",
  "name": "${title}",
  "url": "${url}",
  "img": "${image}"
}
	</script> `}
</svelte:head>
