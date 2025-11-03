<!-- src/routes/about/+page.svelte -->
<script lang="ts">
	import background from '$lib/assets/images/me-607-Broad.jpg';

	// Smooth scroll to bio (accounting for navbar)
	function scrollToContent() {
		const bio = document.getElementById('bio-section');
		if (bio) {
			const navbarHeight = 80; // adjust if your navbar is different
			const offset = bio.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
			window.scrollTo({ top: offset, behavior: 'smooth' });
		}
	}
</script>

<style>
	@keyframes sine-wave {
		0%, 100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-6px);
		}
	}

	.sine-bounce {
		animation: sine-wave 1.4s ease-in-out infinite;
	}
</style>

<div class="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)]">
	<!-- Hero – FULL SCREEN, arrow always visible -->
	<div class="relative h-screen flex flex-col justify-between items-center overflow-hidden">
		<img 
			src={background} 
			alt="Chad at 607 Broad" 
			class="absolute inset-0 w-full h-full object-cover opacity-20"
		/>
		
		<!-- Title + Subtitle (centered vertically, clear of navbar) -->
		<div class="relative z-10 text-center px-6 pt-[15vh]">
			<h1 class="text-5xl md:text-7xl font-bold text-[var(--color-gold)] mb-2">
				Chad Murchison
			</h1>
			<p class="text-lg md:text-xl text-[var(--color-fg)]/90 font-light">
				Explorer • Property Manager • Creator
			</p>
		</div>

		<!-- Down Arrow – subtle sine-wave float -->
		<button
			on:click={scrollToContent}
			class="relative z-20 pb-[calc(5rem+env(safe-area-inset-bottom))] sine-bounce hover:animate-none transition-all"
			aria-label="Scroll down to bio"
		>
			<svg class="w-8 h-8 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
			</svg>
		</button>
	</div>

	<!-- Bio Section – extra top padding for navbar -->
	<div id="bio-section" class="pt-24 mt-12 max-w-3xl mx-auto px-6 text-center md:text-left">
		<div class="space-y-6 text-lg leading-relaxed">
			<p>
				I'm a subtle explorer, wandering through tech jungles, real estate train wrecks and lawsuits, and a curiosity that never quits. A trek to include door knocking 500 homes, cold calling, navigating fine print, and helping to setup a property management company.
			</p>
			<p>
				Camping out to enjoy breaks learning about livestreaming, setting up websites with Terraform, AWS, and laying down the DevOps pipelines, or simply messing around in Godot.
			</p>
			<p>
				Curiosity guides my attention, directing me from rentals, to coding, to perfecting homemade pizza dough. Life can be an experiment. Let's connect if you want to do something.
			</p>
		</div>
	</div>

	<!-- Two-Column Journey – COMPRESSED & LARGER TEXT -->
	<div id="journey-section" class="max-w-6xl mx-auto px-6 py-12">
		<div class="grid md:grid-cols-2 gap-10 md:gap-14">
			<!-- Left: Timeline Tree (compressed + larger text) -->
			<div class="flex flex-col items-center space-y-8 md:sticky md:top-24 md:h-fit">
				<!-- 2018 -->
				<div class="flex flex-col items-center">
					<div class="w-16 h-16 rounded-full bg-[var(--color-sidebar)] flex items-center justify-center shadow-md border-2 border-[var(--color-gold)]">
						<span class="text-base font-bold text-[var(--color-gold)]">2018</span>
					</div>
					<div class="mt-1 text-center">
						<p class="text-sm font-medium text-[var(--color-gold)]/80 italic">Homeschool</p>
					</div>
				</div>
				<div class="w-0.5 h-12 bg-[var(--color-gold)]/30"></div>

				<!-- 2021 -->
				<div class="flex flex-col items-center">
					<div class="w-16 h-16 rounded-full bg-[var(--color-sidebar)] flex items-center justify-center shadow-md border-2 border-[var(--color-gold)]">
						<span class="text-base font-bold text-[var(--color-gold)]">2021</span>
					</div>
					<div class="mt-1 text-center">
						<p class="text-sm font-medium text-[var(--color-gold)]/80 italic">Central New Mexico<br>Community College</p>
						<p class="mt-0.5 text-xs text-[var(--color-gold)]/70">Associates in Computer Programming</p>
					</div>
				</div>
				<div class="w-0.5 h-12 bg-[var(--color-gold)]/30"></div>

				<!-- 2023 -->
				<div class="flex flex-col items-center">
					<div class="w-16 h-16 rounded-full bg-[var(--color-sidebar)] flex items-center justify-center shadow-md border-2 border-[var(--color-gold)]">
						<span class="text-base font-bold text-[var(--color-gold)]">2023</span>
					</div>
					<div class="mt-1 text-center">
						<p class="text-sm font-medium text-[var(--color-gold)]/80 italic">Keller Williams Realty</p>
						<p class="mt-0.5 text-xs text-[var(--color-gold)]/70">Realtor</p>
					</div>
				</div>

				<!-- Branching (compressed) -->
				<div class="relative w-full flex justify-center">
					<div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-[var(--color-gold)]/30"></div>
					<div class="flex w-full justify-between px-6">
						<div class="flex flex-col items-center">
							<div class="w-0.5 h-8 bg-[var(--color-gold)]/30"></div>
							<div class="w-14 h-14 rounded-full bg-[var(--color-sidebar)] flex items-center justify-center shadow-md border-2 border-[var(--color-gold)]">
								<span class="text-sm font-bold text-[var(--color-gold)]">2024</span>
							</div>
							<div class="mt-1 text-center">
								<p class="text-xs font-medium text-[var(--color-gold)]/80 italic">Fire Realty</p>
								<p class="mt-0.5 text-xs text-[var(--color-gold)]/70">Property Manager</p>
							</div>
						</div>
						<div class="flex flex-col items-center">
							<div class="w-0.5 h-8 bg-[var(--color-gold)]/30"></div>
							<div class="w-14 h-14 rounded-full bg-[var(--color-sidebar)] flex items-center justify-center shadow-md border-2 border-[var(--color-gold)]">
								<span class="text-sm font-bold text-[var(--color-gold)]">2025</span>
							</div>
							<div class="mt-1 text-center">
								<p class="text-xs font-medium text-[var(--color-gold)]/80 italic">Young Oak Financial Services LLC</p>
								<p class="mt-0.5 text-xs text-[var(--color-gold)]/70">Loan Officer</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Right: Stories (unchanged) -->
			<div class="space-y-20">
				<!-- 2018 -->
				<div class="flex items-center min-h-[5rem]">
					<div>
						<h3 class="text-xl font-medium text-[var(--color-gold)] mb-2">2018 — Homeschool</h3>
						<p class="text-[var(--color-fg)]/90 leading-relaxed">
							Had the best teacher - My Mom! Learned to love classical music, have fun, and experiment with life. Started to program at age 16, do live streaming, and play plenty of video games.
						</p>
					</div>
				</div>

				<!-- 2021 -->
				<div class="flex items-center min-h-[5rem]">
					<div>
						<h3 class="text-xl font-medium text-[var(--color-gold)] mb-2">2021 — Central New Mexico Community College</h3>
						<p class="text-[var(--color-fg)]/90 leading-relaxed">
							Earned my CompTia Security+ and A+ CERTS and graduated with an Associates in Computer Programming and Computer information Systems with a 3.5 GPA.
						</p>
					</div>
				</div>

				<!-- 2023 -->
				<div class="flex items-center min-h-[5rem]">
					<div>
						<h3 class="text-xl font-medium text-[var(--color-gold)] mb-2">2023 — Keller Williams Realty</h3>
						<p class="text-[var(--color-fg)]/90 leading-relaxed">
							Learned perseverance by hand signing and making 500 postcards, created facebook ads, created custom signage with vistaprint, and of course door knocking half of Garden Lakes, Rome. Hah.
						</p>
					</div>
				</div>

				<!-- 2024 & 2025 -->
				<div class="flex items-center">
					<div class="grid md:grid-cols-2 gap-8 w-full">
						<div>
							<h3 class="text-lg font-medium text-[var(--color-gold)] mb-2">2024 — Fire Realty</h3>
							<p class="text-sm text-[var(--color-fg)]/90">
								Helped to grow a property management company from 6 units to ~30 units in 2 years, delt with evictions, $1,000 water bills, and the joy finding homes quickly.
							</p>
						</div>
						<div>
							<h3 class="text-lg font-medium text-[var(--color-gold)] mb-2">2025 — Young Oak Financial Services LLC</h3>
							<p class="text-sm text-[var(--color-fg)]/90">
								Secured my Loan Officers license and joined a new mortgage company to do Home Loans, Refi's, Helocs, and more!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Licenses -->
		<div class="mt-16 max-w-2xl mx-auto">
			<h2 class="text-2xl font-medium text-[var(--color-gold)] text-center mb-8">Credentials</h2>
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
				<div class="bg-[var(--color-sidebar)] p-4 rounded-lg text-center shadow-sm">
					<p class="text-xs text-[var(--color-fg)]/70">NMLS</p>
					<p class="text-base font-medium text-[var(--color-gold)]">#2726710</p>
				</div>
				<div class="bg-[var(--color-sidebar)] p-4 rounded-lg text-center shadow-sm">
					<p class="text-xs text-[var(--color-fg)]/70">Realtor GA License</p>
					<p class="text-base font-medium text-[var(--color-gold)]">#430170</p>
				</div>
				<div class="bg-[var(--color-sidebar)] p-4 rounded-lg text-center shadow-sm">
					<p class="text-xs text-[var(--color-fg)]/70">Realtor AL License</p>
					<p class="text-base font-medium text-[var(--color-gold)]">#000165103</p>
				</div>
			</div>
		</div>

		<!-- CTA -->
		<div class="mt-20 text-center pb-16">
			<p class="text-xl text-[var(--color-gold)] font-medium">
				Let’s build something together.
			</p>
			<p class="mt-4 text-sm text-[var(--color-fg)]/70">
				<a href="/contact" class="text-[var(--color-gold)] hover:underline">Contact me</a> or keep exploring.
			</p>
		</div>
	</div>
</div>