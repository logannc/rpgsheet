<script>
import CheckItem from '../layout/CheckItem.svelte';
export let name;
export let mod;
export let checked;
</script>

<CheckItem {name} {mod} {checked} />