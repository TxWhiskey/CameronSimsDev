<script>

    import SatIcon from "../icons/SatIcon.svelte";
    import SignalLoop from "../icons/Signal-Loop.svelte";
    import WorldMapLoop from "../icons/World-Map-Loop.svelte";

</script>

<div class="container">
    <div class="sig-bounce">
        <WorldMapLoop/>
        <SignalLoop/>
        <SatIcon/>
    </div>
</div>

<style>

    .container {
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .sig-bounce {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        max-width: 100%;
        height: 100%;
    }

    @media (min-width: 500px) {
        .sig-bounce {
            max-width: 30rem;
        }
    }

</style>