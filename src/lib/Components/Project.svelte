<script>
  let props = $props();
  let header = props.header;
  let body = props.body;
</script>

<div class="content-wrapper">
  <p class="header">{header}</p>
  {#each body as line}
    {@html line}
  {/each}
</div>

<style>
  @media screen and (min-width: 600px) {
    .content-wrapper {
      color: white;
      width: 80%;
      background-color: #000000ca;
      padding: 5%;
      margin-top: 5%;
      border-radius: 25px;
    }
  }
  @media screen and (max-width: 600px) {
    .content-wrapper {
      color: white;
      width: 80%;
      background-image: linear-gradient(to bottom, #000000a0, #000000a0,#000000a0, #00005faa);
      padding: 5%;
      margin-top: 5%;
      border-radius: 25px;
    }
  }

  .header {
    font-size: x-large;
    text-align: center;
  }
</style>
