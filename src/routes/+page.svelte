<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<div class="relative min-h-screen bg-[var(--color-bg)] px-4 py-16 text-[var(--color-fg)]">
	<div class="w-full max-w-6xl mx-auto">
		<!-- Projects Grid -->
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			<ProjectCard
				title="Coming Soon"
				subtitle="Project one"
			/>

			<ProjectCard
				title="Coming Soon"
				subtitle="Project two"
			/>

			<ProjectCard
				title="Coming Soon"
				subtitle="Project three"
			/>

			<ProjectCard
				title="Coming Soon"
				subtitle="Project four"
			/>
		</div>
	</div>
</div>
