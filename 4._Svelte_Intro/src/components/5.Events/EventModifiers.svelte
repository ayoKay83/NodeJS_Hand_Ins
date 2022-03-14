<script>
    function handleClick(){
        alert('clicked once')
    }
</script>
<!--Event modifier 'once' tells to only run the event once-->
<button on:click|once="{handleClick}">
    Click me
</button>

<!-- Other modifiers include preventDefault and stopPropagation  -->