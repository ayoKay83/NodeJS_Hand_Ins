<script>
    //export let personData;
    export let personData;
</script>
{#each personData as data}
    <tr>
        <td>{data.firstName}</td>
        <td>{data.lastName}</td>  
    </tr>
    {/each}
<style>
     tr {
		border : 1px solid black
	}
</style>