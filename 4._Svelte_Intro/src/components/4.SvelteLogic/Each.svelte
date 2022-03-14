<script>

	let users = [
		{ id: "j_hfuks", name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];
</script>

<h1>Favorite Users of the month</h1>

<!--Destructuring id and name props-->
<ul>
	{#each users as { id, name }, i}
		<li>
			<a target="_blank" href="https://www.youtube.com/watch?v={id}">
				{i + 1}: {name}
			</a>
		</li>
	{/each}
</ul>