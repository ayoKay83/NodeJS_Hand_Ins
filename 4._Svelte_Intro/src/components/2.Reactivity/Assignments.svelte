<!-- A button with a click counter-->
<script>
    let count = 0;

    function clickCounter () {
        count += 1;
    }
</script>

<button on:click={clickCounter}>
    Clicked {count} {count ===1 ? 'time' : 'times'}
</button>