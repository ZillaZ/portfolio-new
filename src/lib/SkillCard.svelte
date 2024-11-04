<script>
    let props = $props()
    let style = `
        background-color: ${props.bg_color};
        color: ${props.color};
        border-radius: 20px;
        font-size: smaller;
        min-width: 10%;
        height: 100%;
        padding: 0 1%;
        margin: 0 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    `
</script>
<div style={style}>
    <p>{props.skill}</p>
</div>