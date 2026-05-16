<!-- src/lib/components/Hero.svelte -->
<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleScrollClick() {
		dispatch('scroll');
	}
</script>

<style>
	@keyframes sine-wave {
		0%, 100% { transform: translateY(0); }
		50%      { transform: translateY(-6px); }
	}
	.sine-bounce {
		animation: sine-wave 1.4s ease-in-out infinite;
	}
</style>

<div class="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[var(--color-bg)] to-[var(--color-bg)]">
	<!-- Background gradient accent -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div class="absolute top-0 left-0 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl"></div>
		<div class="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl"></div>
	</div>

	<!-- Content -->
	<div class="relative z-10 text-center px-6 max-w-2xl">
		<h1 class="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
			Chad Murchison
		</h1>
		<p class="text-xl md:text-2xl text-white/60 font-light">
			Projects, games, and experiments
		</p>
	</div>

	<!-- Down Arrow -->
	<button
		on:click={handleScrollClick}
		class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 sine-bounce hover:animate-none transition-all"
		aria-label="Scroll down"
	>
		<svg class="w-8 h-8 text-white/60 hover:text-white/80 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
		</svg>
	</button>
</div>