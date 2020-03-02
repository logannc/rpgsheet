<script>
// todo: take one object or receive registered kinds
export let weapons = [];
export let armor = [];
export let tools = [];
export let languages = [];
export let games = [];
</script>

<style>
    .container {
        border: solid 1px black;
        border-radius: 25px;
        padding: 5px;
    }
</style>

<div class="container">
    {#if weapons.length}
        <p>
            <span>Weapons:</span>
            {#each weapons as weapon, index}
                <span>{weapon}{#if index !== (weapons.length-1)}, {/if}</span>
            {/each}
        </p>
    {/if}
    {#if armor.length}
        <p>
            <span>Armor:</span>
            {#each armor as a, index}
                <span>{a}{#if index !== (armor.length-1)}, {/if}</span>
            {/each}
        </p>
    {/if}
    {#if tools.length}
        <span>Tools:</span>
        {#each tools as tool, index}
            <span>{tool}{#if index !== (tools.length-1)}, {/if}</span>
        {/each}
    {/if}
    {#if languages.length}
        <span>Languages:</span>
        {#each languages as lang, index}
            <span>{lang}{#if index !== (languages.length-1)}, {/if}</span>
        {/each}
    {/if}
    {#if games.length}
        <span>Games:</span>
        {#each games as game, index}
            <span>{game}{#if index !== (games.length-1)}, {/if}</span>
        {/each}
    {/if}
</div>