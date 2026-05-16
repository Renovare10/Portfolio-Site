<!-- src/lib/components/ProjectCard.svelte -->
<script lang="ts">
  export let title: string;
  export let subtitle: string;
  export let image: string | null = null;
  export let href: string | null = null;
  export let tech: string[] = [];
</script>

<div class="group rounded-lg bg-[var(--color-sidebar)] overflow-hidden shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
  <!-- Image Container -->
  <div class="relative w-full h-48 bg-gradient-to-br from-[var(--color-editor)] to-[var(--color-bg)] overflow-hidden">
    {#if image}
      <img
        src={image}
        alt={title}
        class="w-full h-full object-cover transition-transform group-hover:scale-105"
      />
    {:else}
      <div class="w-full h-full flex items-center justify-center">
        <div class="text-center">
          <svg class="w-16 h-16 text-[var(--color-fg)]/20 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p class="text-sm text-[var(--color-fg)]/40">Add image</p>
        </div>
      </div>
    {/if}
  </div>

  <!-- Content -->
  <div class="p-6">
    <h3 class="text-xl font-semibold text-[var(--color-fg)] mb-2">{title}</h3>
    <p class="text-sm text-[var(--color-fg)]/70 mb-4">{subtitle}</p>

    {#if tech && tech.length > 0}
      <div class="flex flex-wrap gap-2">
        {#each tech as tag}
          <span class="rounded text-xs bg-[var(--color-editor)] px-2 py-1 text-[var(--color-fg)]/70">{tag}</span>
        {/each}
      </div>
    {/if}
  </div>
</div>