<script lang='ts'>
  import FlickerBlock from "./Flicker-Block.svelte";


    export let blocks: number = 6
    export let blockHeight: number = 2.5
    export let gap: number = 1
    export let flexDirection: "row" | "column" = "row"


</script>

<div 
    class="container"
    style="
        flex-direction: {flexDirection}; 
        gap: {gap}rem;
    "
>
    { #each Array(blocks) as _, i }
    <FlickerBlock blockHeight={blockHeight}/>
    { /each }
</div>

<style>

    .container {
        display: flex;
    }

</style>