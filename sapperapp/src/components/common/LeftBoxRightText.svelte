<script>
export let box;
export let text;
</script>

<style>
    .container {
        display: flex;
        align-items: center;
    }
    .box {
        border: solid 1px black;
        border-radius: 50%;
        width: 15px;
        height: 15px;
    }
    .text {
        flex: 1 0;
    }
</style>

<div class="container">
    <div class="box">{box}</div>
    <div class="text">{text}</div>
</div>