<script lang="ts">

    import { onMount } from "svelte";

    export let blockHeight: number = 2;

    let isActive: boolean = false

    function activeItem() {
        
        isActive = !isActive

    }

    onMount( () => {

        if ( mtRand(0, 100) < 50 ) {
            activeItem()
        }

        setInterval( function() {

            activeItem()
    
        }, mtRand( 5000, 10000 ));

    })

    function mtRand(min: number, max: number) {

        const mathRandom = Math.random()

        const value = mathRandom * (max - min) + min

        const valueFloor =  Math.floor(value);

        return valueFloor

    }

</script>

<div
    id="block"
    style="
        height: {blockHeight}rem;
    "
    class:active={isActive}
/>

<style>

  #block {
    border: 2px solid var(--color-vlight);
    flex: 1;
  }

  .active {
    background-color: var(--color-vlight);
    box-shadow: inset 0 0 5px black;
  }

</style>
