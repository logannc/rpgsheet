<script>
export let box;
export let text;
</script>

<style>
    .container {
        display: flex;
        align-items: center;
        padding: 1rem;
    }
    .box {
        border: solid 1px black;
        border-radius: 0.5rem;
        width: 30px;
        height: 30px;
    }
    .text {
        margin-left: 1rem;
    }
</style>

<div class="container">
    <div class="box">{box}</div>
    <span class="text">{text}</span>
</div>