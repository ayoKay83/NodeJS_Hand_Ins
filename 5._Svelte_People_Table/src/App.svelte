<script>
	
	import PeopleTable from "./components/PeopleTable.svelte";
	import TableHead from "./components/TableHead.svelte";
	import TableRow from "./components/TableRow.svelte";

	
	
</script>

<main>
	
	<PeopleTable/>
	
</main>
	

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>