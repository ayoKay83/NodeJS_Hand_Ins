<script>
    let count = 0;
    let message;

    $: if (count < 9) {
        message = "Work harder! Click that button!";
    } else {
        message = "Good job!"
        count += count;
    }

    function handleClick() {
        count += 1;
    }
</script>

<button on:click={handleClick}>
 Clicked {count} 
</button>

<p>{@html message}</p>