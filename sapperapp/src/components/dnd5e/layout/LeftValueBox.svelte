<script>
export let box;
export let text;
export let container = 'inspiration_box';
let container_image = '/images/dnd5e/standard/' + container + '.svg';
let tweaked_left_pad = {
    proficiency_bonus_box : "13%",
    inspiration_box : "10%",
}
// TODO: switch to css variables
// https://css-tricks.com/what-i-like-about-writing-styles-with-svelte/
let left_pad = tweaked_left_pad[container] || "10%";
</script>

<style>
    .spacer {
        margin: 0.25rem -1rem;
    }
    .container {
        display: flex;
        align-items: center;
        background-size: 80%;
        background-position: center;
        background-repeat: no-repeat;
        padding: 1.75rem 1rem;
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

<div class="spacer">
    <div class="container" style="background-image: url('{container_image}');">
        <span class="box" style="margin-left: {left_pad}">{box}</span>
        <div class="textbox">
            <span class="text">{text}</span>
        </div>
    </div>
</div>