<script>

  import SignalBounce from "./greebles/Signal-Bounce.svelte";
import GridModule from "./GridModule.svelte";

</script>
<GridModule gridHeader="Contact" moduleId="contact">
    <div class="contact-container">
        <p>Email:<br>Me@CameronSims.dev</p>
        <p>Location:<br>Houston, TX</p>
        <SignalBounce/>
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

</style>