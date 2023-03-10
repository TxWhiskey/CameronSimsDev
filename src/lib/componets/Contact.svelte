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
            <SignalLoop />
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
        align-items: center;
        justify-content: space-between;
        margin: auto;
        gap: 1rem;
        width: 100%;
    }

</style>