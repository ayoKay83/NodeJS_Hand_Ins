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
	
	import DeclaringProps from "./components/3.Props/DeclaringProps.svelte";
	import DefaultValues from "./components/3.Props/DefaultValues.svelte";
	import SpreadProbs from "./components/3.Props/SpreadProbs.svelte";

	import If from "./components/4.SvelteLogic/If.svelte";
	import Else from "./components/4.SvelteLogic/Else.svelte";
	import ElseIf from "./components/4.SvelteLogic/ElseIf.svelte";
	import Each from "./components/4.SvelteLogic/Each.svelte";
    import Keyed from "./components/4.SvelteLogic/Keyed.svelte";

	import DomEvents from "./components/5.Events/DomEvents.svelte";
	import InlineHandlers from "./components/5.Events/InlineHandlers.svelte";
	import EventModifiers from "./components/5.Events/EventModifiers.svelte";
	import ComponentEvents from "./components/5.Events/ComponentEvents.svelte";
	import EventForwarding from "./components/5.Events/EventForwarding.svelte";
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
	
	<DeclaringProps destination={"the Galaxy"}/>
	<DefaultValues/>
	<SpreadProbs/>

	<If/>
	<Else/>
	<ElseIf accountBalance={42}/>
	<Each/>
	<Keyed/>

	<!-- <DomEvents/> -->
	<InlineHandlers/>
	<EventModifiers/>
	<ComponentEvents/>
	<EventForwarding/>

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