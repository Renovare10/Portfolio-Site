<!-- src/lib/components/Timeline.svelte -->
<script lang="ts">
	import TimelineItem from './TimelineItem.svelte';
	import TimelineStory from './TimelineStory.svelte';
</script>

<div id="journey-section" class="max-w-6xl mx-auto px-6 py-12">
	<div class="grid md:grid-cols-2 gap-10 md:gap-14">
		<!-- Left: Timeline Tree -->
		<div class="flex flex-col items-center space-y-8 md:sticky md:top-24 md:h-fit">
			<!-- 2018 -->
			<TimelineItem year="2018" title="Homeschool" />

			<div class="w-0.5 h-12 bg-[var(--color-gold)]/30"></div>

			<!-- 2021 -->
			<TimelineItem
				year="2021"
				title="Central New Mexico<br>Community College"
				role="Associates in Computer Programming"
			/>

			<div class="w-0.5 h-12 bg-[var(--color-gold)]/30"></div>

			<!-- 2023 -->
			<TimelineItem year="2023" title="Keller Williams Realty" role="Realtor" />

			<!-- Branching: 2024 & 2025 -->
			<div class="relative w-full flex justify-center">
				<div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-[var(--color-gold)]/30"></div>
				<div class="flex w-full justify-between px-6">
					<div class="flex flex-col items-center">
						<div class="w-0.5 h-8 bg-[var(--color-gold)]/30"></div>
						<TimelineItem year="2024" title="Fire Realty" role="Property Manager" size="small" />
					</div>
					<div class="flex flex-col items-center">
						<div class="w-0.5 h-8 bg-[var(--color-gold)]/30"></div>
						<TimelineItem
							year="2025"
							title="Young Oak Financial Services LLC"
							role="Loan Officer"
							size="small"
						/>
					</div>
				</div>
			</div>
		</div>

		<!-- Right: Stories -->
		<div class="space-y-20">
			<!-- 2018 -->
			<TimelineStory
				year="2018"
				title="Homeschool"
				content="Had the best teacher - My Mom! Learned to love classical music, have fun, and experiment with life. Started to program at age 16, do live streaming, and play plenty of video games."
			/>

			<!-- 2021 -->
			<TimelineStory
				year="2021"
				title="Central New Mexico Community College"
				content="Earned my CompTia Security+ and A+ certs, Interned at Sandia National Labs, and graduated with an Associates in Computer Programming and Computer information Systems with a 3.5 GPA."
			/>

			<!-- 2023 -->
			<TimelineStory
				year="2023"
				title="Keller Williams Realty"
				content="Learned perseverance by hand signing and making 500 postcards, created facebook ads, custom signage with vistaprint, and of course door knocking half of Garden Lakes, Rome. Hah."
			/>

			<!-- 2024 & 2025 (branch) -->
			<div class="flex items-center">
				<div class="grid md:grid-cols-2 gap-8 w-full">
					<TimelineStory
						year="2024"
						title="Fire Realty"
						content="Helped to grow a property management company from 6 units to ~30 units in 2 years, delt with evictions, $1,000 water bills, and the joy finding homes quickly."
						isBranch={true}
					/>
					<TimelineStory
						year="2025"
						title="Young Oak Financial Services LLC"
						content="Secured my Loan Officers license and joined a new mortgage company to do Home Loans, Refi's, Helocs, and more!"
						isBranch={true}
					/>
				</div>
			</div>
		</div>
	</div>
</div>