<script>
	import Thing from './Thing.svelte';

	let things = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' },
	];

	function handleClick() {
		things = things.slice(1);
	}
</script>

<button on:click={handleClick}>
	Remove first thing
</button>

<!-- We can pass thing.id as a key that tells Svelte 
whicg DOM note to change when updating-->
{#each things as thing(thing.id)}
	<Thing name={thing.name}/>
{/each}
