<script>
import { onMount } from 'svelte';
let itemsdiv;

let side_height = "0%";
// TODO: need to also adjust width when resizing
onMount(() => {
    // this magic number is a rough estimation of pixels taken up by the top and bottom svg
    // for more robustness, it should be calculated dynamically like https://stackoverflow.com/a/11511828
    let top_bottom_estimate = 175;
    let needed_height = 100*(itemsdiv.clientHeight - top_bottom_estimate)/itemsdiv.clientHeight;
    side_height = needed_height + "%";
});
</script>

<style>
    .spacer {
        padding: 1rem;
        flex-grow: 0;
    }
    .container {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .itemspacer {
        padding: 1rem;
    }
    .items {
        position: relative;
    }
    .sidescontainer {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .sides {
        position: relative;
        left: -4.75%;
        top: 6.6rem;
        width: 109.55%;
        border-left: solid 0.2rem #231f20;
        border-right: solid 0.2rem #231f20;
    }
    .text {
        margin-bottom: 5%;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 0.75rem;
    }
    .flip {
        transform: rotate(180deg);
    }
    .box {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url('/images/dnd5e/standard/vertical_list_box_half.svg');
        background-size: 100%;
        background-position-x: center;
        background-position-y: 0;
        background-repeat: no-repeat;
    }
</style>

<div class="spacer">
    <div class="container">
        <div class="box"></div>
        <div class="itemspacer">
            <div class="items" bind:this={itemsdiv}>
                <div class="sidescontainer">
                    <div class="sides" style="height: {side_height}"></div>
                </div>
                <slot></slot>
            </div>
        </div>
        <span class="text">Skills</span>
        <div class="flip box"></div>
    </div>
</div>