<!-- src/lib/components/TimelineItem.svelte -->
<script lang="ts">
	/** Year (required) */
	export let year: string;
	/** Main title (e.g. school/company) */
	export let title: string;
	/** Optional subtitle (e.g. role) */
	export let role: string = '';
	/** Size variant: 'large' (main path) or 'small' (branch) */
	export let size: 'large' | 'small' = 'large';

	$: circleSize = size === 'large' ? 'w-16 h-16' : 'w-14 h-14';
	$: yearSize = size === 'large' ? 'text-base' : 'text-sm';
	$: titleSize = size === 'large' ? 'text-sm' : 'text-xs';
</script>

<div class="flex flex-col items-center">
	<div class="{circleSize} rounded-full bg-[var(--color-sidebar)] flex items-center justify-center shadow-md border-2 border-[var(--color-gold)]">
		<span class="{yearSize} font-bold text-[var(--color-gold)]">{year}</span>
	</div>
	<div class="mt-1 text-center">
		<p class="{titleSize} font-medium text-[var(--color-gold)]/80 italic" style="line-height: 1.2;">
			{@html title}
		</p>
		{#if role}
			<p class="mt-0.5 text-xs text-[var(--color-gold)]/70">{role}</p>
		{/if}
	</div>
</div>