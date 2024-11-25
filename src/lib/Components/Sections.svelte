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
  
  @media screen and (min-width: 600px) {
    button {
      height: 33%;
      background-color: #000000aa;
      color: white;
      margin-bottom: 1%;
      border-width: 1px 0;
      border-color: #dddddd90;
    }
    .sections {
      height: 30vh;
      width: 30vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    button:hover {
      animation-name: example;
      animation-duration: 1s;
      animation-fill-mode: forwards;
    }
  }
  @media screen and (max-width: 600px) {
    .sections {
      height: 10vh;
      width: 70vw;
      display: flex;
      justify-content: center;
    }

    button {
      height: 100%;
      min-width: 33%;
      background-color: #000000aa;
      color: white;
      margin-bottom: 1%;
      border-width: 1px;
      border-color: #dddddd90;
    }
  }
</style>
