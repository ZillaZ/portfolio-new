<script>
  import { onMount } from "svelte";

  let props = $props();
  let size = props.size;
  const decimal = size / 100;
  let final_size = $state(0);
  onMount(() => {
    const window_width = window.innerWidth;
    final_size = window_width * decimal;
  });
</script>

<div style="width: {final_size}px; height: {final_size}px" class="profile">
  <img alt="profile-pic" src="/9s.jpg" />
</div>

<style>
  @media screen and (max-width: 600px) {
    .profile {
      display: none;
    }
  }

  .profile {
    height: 20vh;
    width: 30vw;
    background-color: transparent;
    border-radius: 50%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
  }
</style>
