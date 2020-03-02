<script>
export let successes = 0;
export let failures = 0;
let sfill = Array(successes);
let ffill = Array(failures);
let sempty = Array(3-successes);
let fempty = Array(3-failures);
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
    }
    .row {
        display: flex;
    }
    .successes, .failures {
        justify-content: space-between
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
</style>

<div class="container">
    <div class="successes row">
        <span>Successes</span>
        <div class="row">
            {#each sfill as f}
                <div class="box filled"></div>
            {/each}
            {#each sempty as e}
                <div class="box"></div>
            {/each}
        </div>
    </div>
    <div class="failures row">
        <span>Failures</span>
        <div class="row">
            {#each ffill as f}
                <div class="box filled"></div>
            {/each}
            {#each fempty as e}
                <div class="box"></div>
            {/each}
        </div>
    </div>
    <span>Death Saves</span>
</div>