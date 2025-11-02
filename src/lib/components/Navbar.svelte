<!-- src/lib/components/Navbar.svelte -->
<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="fixed inset-x-0 top-0 z-50 border-b border-[#3c3c3c] bg-[#1e1e1e]/95 backdrop-blur supports-[backdrop-filter]:bg-[#1e1e1e]/80">
	<div class="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
		<!-- Logo -->
		<a href="/" class="flex items-center space-x-2 text-lg font-semibold text-white transition hover:text-[#007acc]">
			<svg class="h-6 w-6 text-[#007acc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
				      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
			</svg>
			<span>Chad Murchison</span>
		</a>

		<!-- Desktop Links -->
		<div class="hidden space-x-6 text-sm font-medium md:flex">
			<a
				href="/"
				class="transition hover:text-[#007acc]"
				class:text-[#007acc]={$page.url.pathname === '/'}
				class:text-white={$page.url.pathname !== '/'}
			>
				Portfolio
			</a>
			<a
				href="/about"
				class="transition hover:text-[#007acc]"
				class:text-[#007acc]={$page.url.pathname === '/about'}
				class:text-white={$page.url.pathname !== '/about'}
			>
				About
			</a>
			<a
				href="/contact"
				class="transition hover:text-[#007acc]"
				class:text-[#007acc]={$page.url.pathname === '/contact'}
				class:text-white={$page.url.pathname !== '/contact'}
			>
				Contact
			</a>
		</div>

		<!-- Mobile Menu Button -->
		<button
			class="md:hidden text-white hover:text-[#007acc]"
			aria-label="Open navigation menu"
		>
			<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
				      d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	</div>
</nav>