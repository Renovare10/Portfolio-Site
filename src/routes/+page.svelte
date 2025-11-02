<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<div class="relative min-h-screen bg-[#1e1e1e] p-4 text-[#d4d4d4]">
	<div class="w-full max-w-3xl mx-auto text-center">
		<h1 class="relative -top-8 mb-8 text-4xl font-medium text-[#007acc] md:text-5xl md:-top-0">
			Projects
		</h1>

		<div class="grid gap-6">
			<ProjectCard
				title="Kingslayer Holdout"
				description="A strategic survival game where players defend against waves of enemies in a dynamic 2D battlefield."
				href="https://kingslayer-holdout.chadmurchison.com/"
				buttonText="Play Kingslayer Holdout"
				tech={['Vite', 'Phaser 2D', 'JavaScript', 'AWS S3']}
			/>

			<ProjectCard
				title="1010 Glow"
				description="A vibrant puzzle game inspired by 1010!, featuring a responsive 10x10 grid with PWA support."
				href="https://1010-glow.chadmurchison.com/"
				buttonText="Play 1010 Glow"
				tech={['Svelte', 'TypeScript', 'Vite', 'PWA', 'AWS S3']}
			/>

			<ProjectCard
				title="NWGA Eviction Service"
				description="A professional eviction management service for Northwest Georgia landlords and property managers."
				href="https://NWGAEvictionService.chadmurchison.com/"
				buttonText="Visit NWGA Eviction Service"
				tech={['Svelte', 'SvelteKit', 'AWS S3', 'CloudFront']}
			/>
		</div>
	</div>
</div>