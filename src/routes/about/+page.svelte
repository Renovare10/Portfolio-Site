<!-- src/routes/about/+page.svelte -->
<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Bio from '$lib/components/Bio.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import Credentials from '$lib/components/Credentials.svelte';
	import CTA from '$lib/components/CTA.svelte';

	function scrollToBio() {
		const bio = document.getElementById('bio-section');
		if (bio) {
			const navbarHeight = 80;
			const offset = bio.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
			window.scrollTo({ top: offset, behavior: 'smooth' });
		}
	}
</script>

<div class="bg-[var(--color-bg)] text-[var(--color-fg)]">
	<Hero on:scroll={scrollToBio} />
	<Bio />
	<Timeline />
	<Credentials />
	<CTA />
</div>