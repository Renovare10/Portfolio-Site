<script lang="ts">
	// Define props
	export let title: string;
	export let description: string;
	export let href: string;
	export let buttonText: string;
	export let tech: string[] = [];
</script>

<div class="rounded-md bg-[#252526] p-6 text-left shadow-lg">
	<h3 class="mb-1 text-xl font-medium text-[#d4d4d4]">{title}</h3>
	<p class="mb-4 text-base text-[#a0a0a0]">{description}</p>
	<a
		{href}
		class="inline-block rounded bg-[#007acc] px-5 py-2.5 font-medium text-white transition hover:bg-[#005f99]"
	>
		{buttonText}
	</a>
	<div class="mt-4 flex flex-wrap gap-2">
		{#each tech as tag}
			<span class="rounded bg-[#3c3c3c] px-2 py-1 text-sm text-[#d4d4d4]">{tag}</span>
		{/each}
	</div>
</div>