<script lang="ts">
    import SkillCard from "./SkillCard.svelte";
    let div : HTMLDivElement | undefined = $state()
    const scroll = (mul: number) => {
        if (div == undefined) {
            console.log("Div is undefined")
            return
        }
        let width = div.getBoundingClientRect().width * mul * 0.85
        console.log("scrolling by " + width)
        div.scrollBy({
            left: width, 
            behavior: "smooth"
        })
    }
</script>
<div bind:this={div} class="wrapper">
    <div class="project">
        <h1>Apollo</h1>
        <div class="skills-div">
            <SkillCard skill="Compilers" bg_color="gray" color="white"/>
            <SkillCard skill="Rust" bg_color="brown" color="white" />
        </div>
        <div class="text-div">
            <p>A compiled programming language that aims to be performant, memory safe (kindaof) and modern.</p>
            <p>Features variables, structs, mathematical operations, functions, references, traits, iterators and it's able to link dinamically or statically to any compiled library.</p>
            <p>[TODO] Check <a href="a">this Raylib program</a> developed with Apollo</p>
        </div>
        <div>
            <button onclick={() => scroll(-1)}>Previous</button>
            <button onclick={() => scroll(1)}>Next</button>
        </div>
    </div>
    <div class="project">
        <h2>Screenlight</h2>
        <div class="skills-div">
            <SkillCard skill="Linux" bg_color="white" color="black"/>
            <SkillCard skill="Rust" bg_color="brown" color="white"/>
            <SkillCard skill="Input Devices" bg_color="green" color="white"/>
        </div>
        <div class="text-div">
            <p>A program that makes controlling screen brightness on Linux devices easy.</p>
            <p>A GUI is in development</p>
        </div>
        <div>
            <button onclick={() => scroll(-1)}>Previous</button>
            <button onclick={() => scroll(1)}>Next</button>
        </div>
    </div>
    <div class="project">
        <h2>Keyboard to Joystick</h2>
        <div class="skills-div">
            <SkillCard skill="Linux" bg_color="white" color="black"/>
            <SkillCard skill="Rust" bg_color="brown" color="white" />
            <SkillCard skill="Input Devices" bg_color="green" color="white"/>
        </div>
        <div class="text-div">
            <p>Capable of transforming keyboard inputs on joystick inputs through the use of UInput linux library.</p>
            <p>The main purpose for the development of this tool was to emulate joystick movement using a mouse.</p>
            <p>Still lacks a GUI.</p>
        </div>
        <div>
            <button onclick={() => scroll(-1)}>Previous</button>
            <button onclick={() => scroll(1)}>Next</button>
        </div>
    </div>
</div>
<style>
    .project {
        padding: 0 5%;
        min-width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-style: solid;
        border-color: black;
        border-width: 1px;
    }
    .wrapper {
        margin: 0 auto;
        width: 100%;
        height: 100%;
        color: white;
        overflow: hidden;
        display: flex;
        flex: 1;
    }
    .skills-div {
        display: flex;
        height: 5%;
    }
    .text-div {
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    button {
        min-width: 10%;
    }
</style>