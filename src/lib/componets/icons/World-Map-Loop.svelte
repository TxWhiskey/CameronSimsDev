<script lang='ts'>
    import WorldMap from "./World-Map.svelte";
    export let size: string = "100%"
    export let mapStroke: string = "2px"
</script>

<div class="container" style="height:{size}; width:{size};">
    <div class="scroll-parent" style="border: {mapStroke} solid var(--color-vlight);">
        <div class="scroll-element">
            <WorldMap stroke="{mapStroke}"/>
        </div>
        <div class="scroll-element">
            <WorldMap stroke="{mapStroke}"/>
        </div>
    </div>
</div>

<style>
    
    .container {
        display: flex;
        align-items: center;
    }

    .scroll-parent {
        overflow: hidden;
        border-radius: 100rem;
        display: flex;
        align-items: center;
        aspect-ratio: 1;
        width: 100%;
    }

    .scroll-element {
        min-height: 100%;
        min-width: 150%;
        display: flex;
        align-items: center;
        animation: slide 80s linear infinite;
    }

    @keyframes slide {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(-100%, 0);
        }
    }

</style>
