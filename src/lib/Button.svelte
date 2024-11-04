<script lang="ts">
    import { selected } from "$lib";
    let selected_id = $state(0)
    selected.subscribe(e => {
        console.log(e)
        selected_id = e
    })
    let props = $props()
    let bg_color = $derived(selected_id == props.id ? "#101010aa" : "#eeeeeeaa")
    let text_color = $derived(bg_color == "#101010aa" ? "white" : "black")
    let style = $derived(`
        border-width: 0;
        border-radius: 5px;
        border-color: black;
        width: ${props.width}%;
        background-color: ${bg_color};
        color: ${text_color};
    `)
    const update_selected = () => {
        selected.set(props.id)
    }
</script>
<button onclick={update_selected} style={style}>{props.text}</button>