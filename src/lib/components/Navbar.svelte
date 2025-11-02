<!-- src/lib/components/Navbar.svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let mobileOpen = false;
	$: if ($page.url.pathname) mobileOpen = false;
</script>

<nav class="fixed inset-x-0 top-0 z-50 border-b border-[#3c3c3c] bg-[var(--color-bg)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-bg)]/80">
	<div class="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
		<!-- Logo -->
		<a href="/" class="flex items-center space-x-2 text-2xl font-semibold text-[var(--color-gold)] transition hover:opacity-80">
			<span>Chad 火</span>
		</a>

		<!-- Desktop Links -->
		<div class="hidden space-x-6 text-sm font-medium md:flex">
			<a
				href="/"
				class="transition hover:text-[var(--color-gold)]"
				class:text-[var(--color-gold)]={$page.url.pathname === '/'}
				class:text-[var(--color-fg)]={$page.url.pathname !== '/'}
			>
				Portfolio
			</a>
			<a
				href="/about"
				class="transition hover:text-[var(--color-gold)]"
				class:text-[var(--color-gold)]={$page.url.pathname === '/about'}
				class:text-[var(--color-fg)]={$page.url.pathname !== '/about'}
			>
				About
			</a>
			<a
				href="/contact"
				class="transition hover:text-[var(--color-gold)]"
				class:text-[var(--color-gold)]={$page.url.pathname === '/contact'}
				class:text-[var(--color-fg)]={$page.url.pathname !== '/contact'}
			>
				Contact
			</a>
		</div>

		<!-- Mobile Menu Button -->
		<button
			class="md:hidden text-[var(--color-fg)] hover:text-[var(--color-gold)] focus:outline-none"
			aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={mobileOpen}
			on:click={() => (mobileOpen = !mobileOpen)}
		>
			<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				{#if mobileOpen}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
						transition:fly={{ y: -10, duration: 200 }}
					/>
				{:else}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
						transition:fly={{ y: 10, duration: 200 }}
					/>
				{/if}
			</svg>
		</button>
	</div>

	<!-- Mobile Dropdown -->
	{#if mobileOpen}
		<div
			transition:fly={{ y: -20, duration: 300, easing: quintOut }}
			class="absolute left-0 right-0 top-full border-b border-[#3c3c3c] bg-[var(--color-bg)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-bg)]/80 md:hidden"
		>
			<div class="flex flex-col space-y-1 px-4 py-3 text-sm font-medium">
				<a
					href="/"
					class="rounded px-3 py-2 text-left transition hover:bg-[var(--color-sidebar)]"
					class:text-[var(--color-gold)]={$page.url.pathname === '/'}
					class:text-[var(--color-fg)]={$page.url.pathname !== '/'}
				>
					Portfolio
				</a>
				<a
					href="/about"
					class="rounded px-3 py-2 text-left transition hover:bg-[var(--color-sidebar)]"
					class:text-[var(--color-gold)]={$page.url.pathname === '/about'}
					class:text-[var(--color-fg)]={$page.url.pathname !== '/about'}
				>
					About
				</a>
				<a
					href="/contact"
					class="rounded px-3 py-2 text-left transition hover:bg-[var(--color-sidebar)]"
					class:text-[var(--color-gold)]={$page.url.pathname === '/contact'}
					class:text-[var(--color-fg)]={$page.url.pathname !== '/contact'}
				>
					Contact
				</a>
			</div>
		</div>
	{/if}
</nav>