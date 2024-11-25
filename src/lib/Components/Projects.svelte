<script>
  import Project from "./Project.svelte";
  let ai_assistant_lines = [
    "<p>AI Assistant site, similar to ChatGPT.",
    "<p>Consumes the FireworksAI API to generate chat completions, and the Google Text-to-Speech API for generation of natural-sounding voices.",
    "<p>Built with fully synchronous Rust.",
  ];
  let apollo_lines = [
    "<p>A compiled programming language.",
    "<p>Makes use of the GCC compiler to generate bytecode, which causes Apollo programs to be quite performant.",
    "<p>Language parsing is handled by the Rust parser Pest.",
  ];
</script>

<div class="content-wrapper">
  <Project header="AI Assistant" body={ai_assistant_lines} />
  <Project header="The Apollo Programming Language" body={apollo_lines} />
</div>

<style>
  .content-wrapper {
    height: 100%;
    width: 100%;
    background-color: #000000a0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    justify-content: center;
  }
</style>
