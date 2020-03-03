<script>
import AttributeContainer from '../layout/AttributeContainer.svelte';
export let name;
export let value;
let mod = Math.floor((value - 10)/2);
</script>

<AttributeContainer {name} {value} {mod}/>