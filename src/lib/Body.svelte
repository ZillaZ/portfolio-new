<script lang="ts">
    import ShortPresentation from "./ShortPresentation.svelte";
    import Info from "./Info.svelte";
    import Projects from "./Projects.svelte";
    import Experience from "./Experience.svelte";
    import { selected } from "$lib";
    let selected_id = $state(0)
    selected.subscribe(e => selected_id = e)
</script>
<div class="wrapper">
    <div class="short">
        <ShortPresentation/>
    </div>
    <div class="content-wrapper">
        {#if selected_id == 0}
            <Info/>
        {/if}
        {#if selected_id == 1}
            <Projects/>
        {/if}
        {#if selected_id == 2}
            <Experience/>
        {/if}
    </div>
</div>
<style>
    .wrapper {
        height: 82.5vh;
        width: 100%;
        margin: 2.5vh auto;
        display: flex;
        flex-direction: row;
        border-width: 1px;
        border-radius: 5px;
        border-style: solid;
        background-color: #eeeeeeaa;
        overflow: hidden;
    }
    .short {
        width: 30%;
    }
    .content-wrapper {
        background-color: #101010aa;
        width: 70%;
    }
</style>