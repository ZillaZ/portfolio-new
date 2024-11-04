<script lang="ts">
    import Button from "$lib/Button.svelte";
</script>
<nav>
    <p>Lucas Henrique</p>
    <div class="buttons-div">
        <Button id={0} width={100} text="Presentation"/>
        <Button id={1} width={100} text="Projects"/>
        <Button id={2} width={100} text="Experience"/>
    </div>
</nav>
<style>
    nav {
        display: flex;
        align-items: center;
        height: 8vh;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        background-color: #eeeeeeff;
    }
    p {
        margin-left: 5vw;
        width: 50%;
    }
    .buttons-div {
        display: flex;
        width: 50vw;
        height: 100%;
    }
</style>