<script>
    import SkillCard from "./SkillCard.svelte";
</script>
<div class="wrapper">
    <div class="project">
        <h2>Apollo</h2>
        <div class="skills-div">
            <SkillCard skill="Compilers" bg_color="gray" color="white"/>
            <SkillCard skill="Rust" bg_color="brown" color="white" />
        </div>
        <p>A compiled programming language that aims to be performant, memory safe (kindaof) and modern.</p>
        <p>Features variables, structs, mathematical operations, functions, references, traits, iterators and it's able to link dinamically or statically to any compiled library.</p>
        <p>[TODO] Check <a href="a">this Raylib program</a> developed with Apollo</p>
    </div>
    <div class="project">
        <h2>Screenlight</h2>
        <div class="skills-div">
            <SkillCard skill="Linux" bg_color="white" color="black"/>
            <SkillCard skill="Rust" bg_color="brown" color="white"/>
            <SkillCard skill="Input Devices" bg_color="green" color="white"/>
        </div>
        <p>A program that makes controlling screen brightness on Linux devices easy.</p>
        <p>A GUI is in development</p>
    </div>
    <div class="project">
        <h2>Keyboard to Joystick</h2>
        <div class="skills-div">
            <SkillCard skill="Linux" bg_color="white" color="black"/>
            <SkillCard skill="Rust" bg_color="brown" color="white" />
            <SkillCard skill="Input Devices" bg_color="green" color="white"/>
        </div>
        <p>Capable of transforming keyboard inputs on joystick inputs through the use of UInput linux library.</p>
        <p>The main purpose for the development of this tool was to emulate joystick movement using a mouse.</p>
        <p>Still lacks a GUI.</p>
    </div>
</div>
<style>
    .project {
        width: 100%;;
        border-style: solid;
        border-color: white;
        border-width: 0 0 1px;
    }
    .wrapper {
        margin: 0 auto;
        width: 70%;
        height: 100%;
        color: white;
        overflow-y: scroll;
    }
    .skills-div {
        display: flex;
        height: 3vh;
    }
</style>