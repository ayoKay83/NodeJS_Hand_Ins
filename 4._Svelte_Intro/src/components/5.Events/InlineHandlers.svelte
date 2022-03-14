<!-- Same as DomEvents but with the event handler 
declaired inside the div tag -> inline handler  -->
<script>
	let mouse = { x: 0, y: 0 };

</script>

<div on:mousemove="{e => mouse = {x : e.clientX, y: e.clientY}}">
	The mouse position is {mouse.x} x {mouse.y}
</div>

<style>
	div { width: 100%; height: 100%; }
</style>