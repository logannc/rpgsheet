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
    .items {
        padding: 1rem;
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
        <div class="items">
            <slot></slot>
        </div>
        <span class="text">Saving Throws</span>
        <div class="flip box"></div>
    </div>
</div>