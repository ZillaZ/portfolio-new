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
  .content-wrapper {
    color: white;
    width: 80%;
    background-color: #000000ca;
    padding: 5%;
    margin-top: 5%;
    border-radius: 25px;
  }

  .header {
    font-size: x-large;
    text-align: center;
  }
</style>
