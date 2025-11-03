<!-- src/lib/components/TimelineStory.svelte -->
<script lang="ts">
	export let year: string;
	export let title: string;
	export let content: string;
	export let isBranch: boolean = false;
</script>

<div class="flex items-center min-h-[5rem]">
	<div class:w-full={isBranch}>
		<h3 class="font-medium text-[var(--color-gold)] mb-2 {isBranch ? 'text-lg' : 'text-xl'}">
			{year} — {title}
		</h3>
		<p class="text-[var(--color-fg)]/90 leading-relaxed {isBranch ? 'text-sm' : ''}">
			{content}
		</p>
	</div>
</div>