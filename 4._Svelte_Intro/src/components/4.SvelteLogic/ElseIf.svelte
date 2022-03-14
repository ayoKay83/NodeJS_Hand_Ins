<script>
   export let accountBalance = 100;
</script>

{#if accountBalance > 100}
<p>Hurra, You are rich. Your account balance is: {accountBalance}</p>
{:else if accountBalance === 100}
<p>Woops, 1 too many Lattes. Your account is: {accountBalance}</p>
{:else}
<p>ALERT! You are having financial problems. Your account is: {accountBalance}</p>
{/if}
