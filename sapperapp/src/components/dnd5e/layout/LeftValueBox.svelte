<script>
export let box;
export let text;
</script>

<style>
    .negacontainer {
        margin: 0 -1rem;
    }
    .container {
        display: flex;
        align-items: center;
        /* TODO: add more box types again */
        background-image: url('/images/dnd5e/standard/inspiration_box.svg');
        background-size: 80%;
        background-position: center;
        background-repeat: no-repeat;
        padding: 1.5rem 1rem;
    }
    .box {
        min-width: 30px;
        margin-left: 10%;
        text-align: center;
    }
    .textbox {
        display: flex;
        justify-content: center;
        flex-grow: 1;
    }
    .text {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 0.75rem;
    }
</style>

<div class="negacontainer">
    <div class="container">
        <span class="box">{box}</span>
        <div class="textbox">
            <span class="text">{text}</span>
        </div>
    </div>
</div>