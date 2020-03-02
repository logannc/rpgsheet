<script>
export let name;
export let value;
let mod = Math.floor((value - 10)/2);
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        border: solid 1px black;
        border-radius: 20px;
        align-items: center;
    }
    .value {
        font-weight: 400;
        font-size: 1.5rem;
    }
    .name {
        font-size: 0.5rem;
        padding: 0.5rem;
    }
</style>

<div class="container">
    <span class="value">{value}</span>
    <span class="name">{name}</span>
</div>