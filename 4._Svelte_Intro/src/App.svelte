<script>
	//export let name; --> Original template

	import Helloworld from "./components/1.introduction/Helloworld.svelte"
	import DynamicAtt from "./components/1.Introduction/DynamicAtt.svelte";
	import Styling from "./components/1.Introduction/Styling.svelte";
	import NestedComp from "./components/1.Introduction/NestedComp.svelte";
	import HtmlTags from "./components/1.Introduction/HtmlTags.svelte";
	import Assignments from "./components/2.Reactivity/Assignments.svelte";
	import Declarations from "./components/2.Reactivity/Declarations.svelte";
	import Statements from "./components/2.Reactivity/Statements.svelte";
</script>

<main>
	<Helloworld/>
	<DynamicAtt/>
	<Styling/>
	<NestedComp/>
	<HtmlTags/>
	<Assignments/>
	<Declarations/>
	<Statements/>
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>