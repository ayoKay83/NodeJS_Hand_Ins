<!-- create user and login button displaying "Log in" if loged out 
and "Log out" if logged in -->
<script>
    let user = {
        loggedIn: false }

    function toggleLoginStatus () {
        user.loggedIn = !user.loggedIn;
    }    
</script>
<!-- # indicates a block opening and / is closening-->
{#if user.loggedIn}
	<button on:click={toggleLoginStatus}>
		Log out
	</button>
{/if}

{#if !user.loggedIn}
	<button on:click={toggleLoginStatus}>
		Log in
	</button>
{/if}