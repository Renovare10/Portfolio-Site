<!-- src/routes/contact/+page.svelte -->
<script lang="ts">
	/* ---- 1. Import the fade transition ---- */
	import { fade } from 'svelte/transition';

	/* ---- 2. Obfuscated contact info (client-side only) ---- */
	const email = ['chadm', '.', 'realty', '@', 'gmail', '.', 'com'].join('');
	const phone = ['706', '-', '844', '-', '5393'].join('');

	/* ---- 3. UI state ---- */
	let showEmail = false;
	let showPhone = false;

	/* ---- 4. Friendly response-time copy ---- */
	const responseCopy = "Drop me an email or call, and I typically respond within 24-48 hours!";
</script>

<div class="relative min-h-screen bg-[var(--color-bg)] p-4 text-[var(--color-fg)]">
	<div class="w-full max-w-3xl mx-auto text-center">
		<h1 class="relative -top-8 mb-8 text-4xl font-medium text-[var(--color-gold)] md:text-5xl md:-top-0">
			Contact
		</h1>

		<div class="space-y-8 text-left max-w-md mx-auto">
			<!-- Email -->
			<div class="rounded-lg bg-[var(--color-sidebar)] p-6 shadow-lg">
				<p class="text-sm text-[var(--color-fg)]/70 mb-2">Email</p>

				{#if showEmail}
					<a
						href="mailto:{email}"
						class="text-lg font-medium text-[var(--color-gold)] hover:underline break-all"
						transition:fade={{ duration: 200 }}
					>
						{email}
					</a>
				{:else}
					<button
						on:click={() => (showEmail = true)}
						class="text-lg font-medium text-[var(--color-fg)] hover:text-[var(--color-gold)] transition"
					>
						Click to reveal email
					</button>
				{/if}
			</div>

			<!-- Phone -->
			<div class="rounded-lg bg-[var(--color-sidebar)] p-6 shadow-lg">
				<p class="text-sm text-[var(--color-fg)]/70 mb-2">Phone</p>

				{#if showPhone}
					<a
						href="tel:{phone}"
						class="text-lg font-medium text-[var(--color-gold)] hover:underline"
						transition:fade={{ duration: 200 }}
					>
						{phone}
					</a>
				{:else}
					<button
						on:click={() => (showPhone = true)}
						class="text-lg font-medium text-[var(--color-fg)] hover:text-[var(--color-gold)] transition"
					>
						Click to reveal phone
					</button>
				{/if}
			</div>
		</div>

		<!-- Friendly response note -->
		<p class="mt-12 text-sm text-[var(--color-fg)]/60">
			{responseCopy}
		</p>
	</div>
</div>