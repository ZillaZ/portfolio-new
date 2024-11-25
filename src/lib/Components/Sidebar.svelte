<script>
  import Profile from "./Profile.svelte";
  import Sections from "./Sections.svelte";
  import Socials from "./Socials.svelte";

</script>
<div class="sidebar">
    <div class="component-wrapper">
        <Socials/>
    </div>
    <div class="component-wrapper">
        <Profile size={20}/>
    </div>
    <div class="component-wrapper">
        <Sections/>
    </div>
</div>

<style>
    @media screen and (min-width: 600px) {
        .component-wrapper {
            width: 100%;
            display: flex;
            justify-content: center;
        }
    
        .sidebar {
            width: 35%;
            height: 100%;
            background-color: #000000a0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    
        .sidebar > * {
            margin-bottom: 5%;
        }
	}
    @media screen and (max-width: 600px) {
		.component-wrapper {
            width: 100%;
            display: flex;
            justify-content: center;
        }
    
        .sidebar {
            width: 100%;
            height: 10%;
            background-color: #000000a0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    
        .sidebar > * {
            margin-bottom: 5%;
        }
	}
</style>