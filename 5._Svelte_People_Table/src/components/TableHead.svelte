
<script>
    export let headers;
</script>
    <tr>
        {#each headers as head}
        <th>{head}</th>
        {/each}
    </tr>

<style>
     th {
		border : 1px solid black
	}
</style>