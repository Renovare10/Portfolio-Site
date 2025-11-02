<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Chad Murchison | Portfolio</title>
	<style>
		/* Ensure full dark background */
		html, body, #svelte {
			background-color: #1e1e1e !important;
			color: #d4d4d4;
		}
	</style>
</svelte:head>

<Navbar />

<!-- Add top padding to account for fixed navbar -->
<main class="pt-16">
	{@render children()}
</main>