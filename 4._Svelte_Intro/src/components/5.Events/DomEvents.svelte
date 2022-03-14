<!-- A component that tracks the mouse move
by listening on an event with on:mousemove -->

<script>
	let mouse = { x: 0, y: 0 };

	function handleMousemove(event) {
		mouse.x = event.clientX;
		mouse.y = event.clientY;
	}
</script>

<div on:mousemove={handleMousemove}>
	The mouse position is {mouse.x} x {mouse.y}
</div>

<style>
	div { width: 100%; height: 100%; }
</style>