<script lang='ts'>
    import WorldMap from "./World-Map.svelte";
    export let mapStroke: string = "2px"
</script>

<div class="container" >
    <div class="circle">
        <div class="scroll-parent" style="">
            <div class="scroll-element">
                <WorldMap stroke="{mapStroke}"/>
            </div>
            <div class="scroll-element">
                <WorldMap stroke="{mapStroke}"/>
            </div>
        </div>
    </div>
</div>

<style>
    
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        max-height: 100%;
        width: 100%;
        flex: 1;
        position: relative;
        aspect-ratio: 1;
        overflow: hidden;
    }

    .circle {
        height: 100%;
        aspect-ratio: 1;
        position: relative;
    }

    .scroll-parent {
        display: flex;
        align-items: center;
        isolation: isolate;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        border: 3px solid var(--color-vlight);
        border-radius: 100rem;
        overflow: hidden;
        height: 100%;
    }

    .scroll-element {
        height: 100%;
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

    @media (min-width: 500px) {
        .scroll-parent {
            
        }
    }

</style>
