<script>
export let box;
export let text;
export let container = 'inspiration_box';
let container_image = '/images/dnd5e/standard/' + container + '.svg';
let tweaked_left_pad = {
    proficiency_bonus_box : "12%",
    inspiration_box : "10%",
}
let left_pad = tweaked_left_pad[container] || "10%";
</script>

<style>
    .negacontainer {
        margin: 0 -1rem;
    }
    .container {
        display: flex;
        align-items: center;
        /* TODO: add more box types again */
        background-size: 80%;
        background-position: center;
        background-repeat: no-repeat;
        padding: 1.5rem 1rem;
    }
    .box {
        min-width: 30px;
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
    <div class="container" style="background-image: url('{container_image}');">
        <span class="box" style="margin-left: {left_pad}">{box}</span>
        <div class="textbox">
            <span class="text">{text}</span>
        </div>
    </div>
</div>