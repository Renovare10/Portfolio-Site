<!-- src/lib/components/ProjectCard.svelte -->
<script lang="ts">
  export let title: string;
  export let description: string;
  export let href: string;
  export let buttonText: string;
  export let tech: string[] = [];
</script>

<div class="rounded-md bg-[var(--color-sidebar)] p-6 text-left shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
  <h3 class="mb-1 text-xl font-medium text-[var(--color-fg)]">{title}</h3>
  <p class="mb-4 text-base text-[var(--color-fg)]/80">{description}</p>
  
  <a
    {href}
    class="inline-block rounded bg-[var(--color-gold)] px-5 py-2.5 font-medium text-[var(--color-bg)] transition hover:bg-[var(--color-gold)]/90"
  >
    {buttonText}
  </a>
  
  <div class="mt-4 flex flex-wrap gap-2">
    {#each tech as tag}
      <span class="rounded bg-[var(--color-editor)] px-2 py-1 text-sm text-[var(--color-fg)]">{tag}</span>
    {/each}
  </div>
</div>