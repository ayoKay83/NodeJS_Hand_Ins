<script>
    let user = {
        loggedIn: false }

    function toggleLoginStatus () {
        user.loggedIn = !user.loggedIn;
    }    
</script>

{#if user.loggedIn}
	<button on:click={toggleLoginStatus}>
		Log out
	</button>
    <!-- : indicates a block continuing-->
{:else}
	<button on:click={toggleLoginStatus}>
		Log in
	</button>
{/if}