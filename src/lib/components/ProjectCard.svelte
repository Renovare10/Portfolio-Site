<script lang="ts">
	let {
		title,
		subtitle,
		href = '#',
		tech = []
	}: {
		title: string;
		subtitle?: string;
		href?: string;
		tech?: string[];
	} = $props();
</script>

<a
	href={href}
	target="_blank"
	class="group block h-full bg-[#252526] border border-[#3c3c3c] rounded-2xl p-6 transition-all duration-200 hover:border-[#007acc] hover:-translate-y-1 hover:shadow-xl"
>
	<div class="flex h-full flex-col">
		<!-- Header -->
		<div>
			<h3 class="text-2xl font-semibold text-white group-hover:text-[#007acc] transition-colors">
				{title}
			</h3>
			{#if subtitle}
				<p class="mt-3 text-[#d4d4d4] text-[15px] leading-relaxed">
					{subtitle}
				</p>
			{/if}
		</div>

		<!-- Tech Stack -->
		{#if tech.length > 0}
			<div class="mt-auto pt-6 flex flex-wrap gap-2">
				{#each tech as item}
					<span
						class="inline-flex items-center rounded-full bg-[#3c3c3c] px-3 py-1 text-xs font-medium text-[#d4d4d4] transition-colors group-hover:bg-[#007acc]/20 group-hover:text-white"
					>
						{item}
					</span>
				{/each}
			</div>
		{/if}
	</div>
</a>