<script>
  import SkillCard from "./SkillCard.svelte";
</script>

<div class="wrapper">
  <h2>Process automation intern</h2>
  <h5>Link Tecnologia Social</h5>
  <div class="skills-div">
    <SkillCard skill="JavaScript" color="black" bg_color="orange" />
    <SkillCard skill="Programming" color="black" bg_color="red" />
    <SkillCard skill="Communication" color="black" bg_color="blue" />
    <SkillCard skill="Cloud Computing" color="black" bg_color="gray" />
  </div>
  <p>
    During my collaboration with the institution's digital transformation team,
    I played a crucial role in optimizing processes and implementing automated
    solutions. My primary responsibility was to develop automations capable of:
  </p>
  <ul>
    <li>
      Sending automated emails, increasing communication efficiency with
      stakeholders.
    </li>
    <li>
      Updating and maintaining the database, ensuring the accuracy and
      availability of essential information for daily operations.
    </li>
    <li>
      Verifying registration information through the use of external APIs,
      ensuring the integrity and validity of information provided by users.
    </li>
    <li>
      Administering users by creating and managing Google Workspace accounts,
      facilitating internal collaboration and productivity.
    </li>
  </ul>
</div>

<style>
  .wrapper {
    margin: 0 auto;
    width: 70%;
    height: 100%;
    color: white;
    border-style: solid;
    border-color: white;
    border-width: 0 0 1px;
    overflow-y: scroll;
  }
  .skills-div {
    display: flex;
    height: 5%;
    width: 100%;
  }
</style>
