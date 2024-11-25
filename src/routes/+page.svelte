<script lang="ts">
  import About from "$lib/Components/About.svelte";
  import Experience from "$lib/Components/Experience.svelte";
  import Projects from "$lib/Components/Projects.svelte";
  import Sidebar from "$lib/Components/Sidebar.svelte";
  import { active_section as active_section_store, Section } from "$lib/stores";
  let active_section: Section = $state(Section.About);
  active_section_store.subscribe((e) => {
    active_section = e;
  });
</script>

<div class="content-wrapper">
  <Sidebar />
  <div class="right-tab">
    {#if active_section == Section.About}
      <About />
    {/if}
    {#if active_section == Section.Projects}
      <Projects />
    {/if}
    {#if active_section == Section.Experience}
      <Experience />
    {/if}
  </div>
</div>

<style>
  .content-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
  }

  .right-tab {
    width: 65%;
    height: 100%;
  }
</style>
