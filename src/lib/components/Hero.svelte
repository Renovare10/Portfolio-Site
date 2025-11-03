<!-- src/lib/components/Hero.svelte -->
<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import background from '$lib/assets/images/me-607-Broad.jpg';

	const dispatch = createEventDispatcher();

	function handleScrollClick() {
		dispatch('scroll'); // Emit event to parent
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

<div class="relative h-screen flex flex-col justify-between items-center overflow-hidden">
	<img
		src={background}
		alt="Chad at 607 Broad"
		class="absolute inset-0 w-full h-full object-cover opacity-20"
	/>

	<!-- Title + Subtitle -->
	<div class="relative z-10 text-center px-6 pt-[15vh]">
		<h1 class="text-5xl md:text-7xl font-bold text-[var(--color-gold)] mb-2">
			Chad Murchison
		</h1>
		<p class="text-lg md:text-xl text-[var(--color-fg)]/90 font-light">
			Explorer • Property Manager • Creator
		</p>
	</div>

	<!-- Down Arrow -->
	<button
		on:click={handleScrollClick}
		class="relative z-20 pb-[calc(5rem+env(safe-area-inset-bottom))] sine-bounce hover:animate-none transition-all"
		aria-label="Scroll down to bio"
	>
		<svg class="w-8 h-8 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
		</svg>
	</button>
</div>