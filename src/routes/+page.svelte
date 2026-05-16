<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<div class="relative min-h-screen bg-[#1e1e1e] px-4 py-16 text-[#d4d4d4]">
	<div class="mx-auto max-w-6xl">
		<!-- Header -->
		<div class="mb-12 text-center">
			<h1 class="text-5xl font-bold tracking-tight text-white">Projects</h1>
			<p class="mx-auto mt-4 max-w-xl text-lg text-[#d4d4d4]">
				Experiments, tools, and side projects I've built.
			</p>
		</div>

		<!-- Projects Grid -->
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			<!-- Pretend Casino -->
			<ProjectCard
				title="Pretend Casino"
				subtitle="A collection of interactive casino games built with Next.js"
				href="/projects/pretend-casino"
			/>
		</div>
	</div>
</div>