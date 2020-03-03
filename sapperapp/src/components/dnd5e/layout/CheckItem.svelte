<script>
export let checked;
export let mod;
export let name;
export let subtext = undefined;
</script>

<style>
    .container {
        display: flex;
        align-items: center;
    }
    .circle {
        border: solid 1px black;
        border-radius: 50%;
        width: 0.5rem;
        height: 0.5rem;
    }
    .filled {
        background-color: black;
    }
    .mod {
        min-width: 2rem;
        border-bottom: solid 1px black;
        margin: 0 0.75rem;
        text-align: center;
    }
    .mod:empty:before {
        content: "\200b";
    }
    .text {}
</style>

<div class="container">
    <div class="circle" class:filled={checked}></div>
    <span class="mod">{#if mod}{mod}{/if}</span>
    <span class="text">{name}{#if subtext}&nbsp;({subtext}){/if}</span>
</div>