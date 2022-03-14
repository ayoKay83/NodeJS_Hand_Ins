<script>
    import { createEventDispatcher } from "svelte";

    const dispatcher = createEventDispatcher();

    function saySomething() {
        dispatcher(
            "message", {
              "text" : "Something"  
            } 
        );
    }
</script>

<button on:click={saySomething}>
	Click to say something
</button>