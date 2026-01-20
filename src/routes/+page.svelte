<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<div class="relative min-h-screen bg-[var(--color-bg)] p-4 text-[var(--color-fg)]">
	<div class="w-full max-w-3xl mx-auto text-center">
		<h1 
			class="
				relative -top-8 mb-8 text-4xl font-medium 
				text-[var(--color-gold)] 
				md:text-5xl md:-top-0 
				transition-all duration-300 
			"
>
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
		</div>
	</div>
</div>