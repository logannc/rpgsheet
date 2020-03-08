<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		/* TODO: lets make it wider, we're running out of room already. */
		max-width: 56rem;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
		height: 100%;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>