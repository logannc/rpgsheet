<script>
import CheckItem from '../layout/CheckItem.svelte';
export let name;
export let subtext = undefined;
export let checked;
</script>

<CheckItem {name} {subtext} {checked} />