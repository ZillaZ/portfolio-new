<script>
  import Project from "./Project.svelte";
  
  const link_lines = [
      "<p>During my collaboration with the institution's digital transformation team, I played a critical role in optimizing processes and implementing automated solutions. My primary responsibility was to develop automations capable of:",
    "<li>Automatically sending mass emails to increase communication efficiency with stakeholders;",
    "<li>Updating and maintaining the database, ensuring the accuracy and availability of essential information for daily operations;",
    "<li>Validating census information by leveraging external APIs to guarantee the accuracy and validity of user-provided data;",
    "<li>Managing users, creating and managing Google Workspace accounts, thereby enhancing collaboration and internal productivity.",
  ];
</script>

<div class="content-wrapper">
  <Project
    header="Automation Process Intern | Link Tecnologia Social"
    body={link_lines}
  />
</div>

<style>
  .content-wrapper {
    height: 100%;
    width: 100%;
    background-color: #000000a0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
