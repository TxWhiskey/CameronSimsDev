<script>

  import GridModule from "./GridModule.svelte";
  import SatIcon from "./icons/SatIcon.svelte";
  import SignalLoop from "./icons/Signal-Loop.svelte";
  import WorldMapLoop from "./icons/World-Map-Loop.svelte";

</script>
<GridModule gridHeader="Contact" moduleId="contact">
    <div class="contact-container">
        <p>Email:<br>Me@CameronSims.dev</p>
        <p>Location:<br>Houston, TX</p>
        <div class="sig-bounce">
            <WorldMapLoop size="5rem"/>
            <SignalLoop size="5rem"/>
            <SatIcon size="5rem"/>
        </div>
    </div>
</GridModule>

<style>
    
    .contact-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        position: relative;
        height: 100%;
    }

    .sig-bounce {
        display: flex;
        gap: 1rem;
        width: 100%;
        margin: auto;
    }

    @media (max-width: 700px) {
        .sig-bounce {
            justify-content: center;
            padding: 1rem;
        }
    }

</style>