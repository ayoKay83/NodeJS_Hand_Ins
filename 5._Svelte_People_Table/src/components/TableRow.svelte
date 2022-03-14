<script>
    //export let personData;
    export let personData;
</script>
    <tr>
        {#each personData as personData}
        <td>{personData.firstName}</td>
        <td>{personData.lastName}</td>
        {/each}
    </tr>

<style>
     tr {
		border : 1px solid black
	}
</style>