<script lang="ts">
  import type { Section } from "$lib/stores";
  import { active_section } from "$lib/stores";

  function set_section(section: Section) {
    active_section.set(section);
  }
</script>

<div class="sections">
  <button onclick={() => set_section(0)}>About Me</button>
  <button onclick={() => set_section(1)}>Projects</button>
  <button onclick={() => set_section(2)}>Experience</button>
</div>

<style>
  @keyframes example {
    0% {
      background-color: #000000aa;
    }
    100% {
      background-color: #232323a0;
    }
  }
  .sections {
    height: 30vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  button {
    height: 33%;
    background-color: #000000aa;
    color: white;
    border-radius: 25px;
    margin-bottom: 1%;
  }

  button:hover {
    animation-name: example;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
</style>
