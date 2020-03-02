<script>
export let name;
export let subtext = undefined;
export let checked;
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
    .filled {
        background-color: black;
    }
    .text {
        flex: 1 0;
    }
</style>

<div class="container">
    <div class="box" class:filled={checked}></div>
    <div class="text">{name}{#if subtext}({subtext}){/if}</div>
</div>