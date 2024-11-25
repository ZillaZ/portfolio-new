<script lang="ts">
  import { onMount } from "svelte";
  import Github from "./Svg/Github.svelte";
  import Linkedin from "./Svg/Linkedin.svelte";
  import XElement from "./Svg/XElement.svelte";
  
  let anchor: HTMLAnchorElement;
  onMount(() => {
    anchor = document.createElement("a") as HTMLAnchorElement;
    anchor.target = "_blank";
  });
  2
  function redirect(link: string) {
    if (!anchor) return;
    anchor.href = link;
    anchor.click()
  }
</script>

<div class="socials">
  <button onclick={() => redirect("https://x.com/zxllvz")}
    ><XElement width={50} height={50} fill="white" /></button
  >
  <button onclick={() => redirect("https://www.linkedin.com/in/lucas-hsm/")}><Linkedin width={50} height={50} fill="white" /></button>
  <button onclick={() => redirect("https://github.com/ZillaZ")}><Github width={50} height={50} fill="white" /></button>
</div>

<style>
  .socials {
    height: 10vh;
    width: 30vw;
    background-color: transparent;
    display: flex;
  }

  button {
    width: 33.3333%;
    height: 100%;
    background-color: transparent;
    color: white;
    margin-right: 1%;
    border-style: none;
  }
</style>
