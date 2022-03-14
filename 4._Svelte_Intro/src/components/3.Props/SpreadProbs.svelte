<!-- using Spread Operator to extract object properties-->
<script>
    import SuperCat from "./SuperCat.svelte";

    const superCat = {
        name: "Leo",
        superpower: "invisible",
        speed: "turbo"
    };
</script>

<SuperCat {...superCat}/>