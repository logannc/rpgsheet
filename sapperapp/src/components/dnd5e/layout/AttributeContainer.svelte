<script>
export let name;
export let value;
export let mod;
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        /* TODO: Each attribute on the standard sheet has a different container. */
        background-image: url('/images/dnd5e/standard/attribute_container.svg');
        background-size: 100%;
        background-repeat: no-repeat;
        padding: 1rem;
        align-items: center;
        height: 0;
        padding-bottom: 110%;
        /* max-width: 6.8rem; */
    }
    .name {
        font-weight: 600;
        font-size: 0.5rem;
        text-transform: uppercase;
    }
    .value {
        font-size: 2rem;
    }
    .mod {
        padding-top: 1rem;
    }
</style>

<div class="container">
    <span class="name">{name}</span>
    <span class="value">{value}</span>
    <span class="mod">{mod}</span>
</div>