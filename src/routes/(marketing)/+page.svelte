<script>

    import Contact from "$lib/componets/Contact.svelte";
    import FlickerBlocks from "$lib/componets/greebles/Flicker-Blocks.svelte";
    import GridModule from "$lib/componets/GridModule.svelte";
    import Icon from "$lib/componets/icons/Logo.svelte";
    import Image from "$lib/componets/Image.svelte";
    import ProjectList from "$lib/componets/Project-List.svelte";
    import Resources from "$lib/componets/Resources.svelte";
    import Terminal from "$lib/componets/Terminal.svelte";

</script>

<div id="grid">

    <div class="grid-area" id="title">
        <GridModule moduleId="title">
            <div id="title-container">
                <div class="icon-container">
                    <Icon height="2.5rem" color="light"/>
                </div>
                <h2 id="title-text">Cameron Sims <span class='job-title'>[ IT Solutions Architect ]</span></h2>
            </div>
        </GridModule>
    </div>

    <div class="grid-area" id="terminal">
        <GridModule gridHeader="Terminal" moduleId="terminal">
            <Terminal/>
        </GridModule>
    </div>

    <div class="grid-area" id='projects'>
        <GridModule gridHeader="Projects" moduleId="projects">
            <ProjectList/>
        </GridModule>
    </div>
    
    <div class="grid-area" id="resources">
        <GridModule gridHeader="Resources" moduleId="resources">
            <Resources/>
        </GridModule>
    </div>
    
    <div class="grid-area" id="social">
        <div class="button-group">
            <a 
                href="https://www.linkedin.com/in/cameron-sims-0262734b/" 
                class="button-link" 
                target="_blank" 
                rel="noreferrer">
                LinkedIn
            </a>
            <a 
                href="https://github.com/GeorgiaGrace" 
                class="button-link" 
                target="_blank" 
                rel="noreferrer">
                Github
            </a>
        </div>
    </div>
    
    <div class="grid-area" id="greeble-1">
        <FlickerBlocks/>
    </div>

    <div class="grid-area" id='image'>
        <GridModule moduleId="image">
            <Image/>
        </GridModule>
    </div>

    <div class="grid-area" id='contact'>
        <Contact/>
    </div>

</div>

<style>

    #grid {
        display: grid;
        grid-template-columns: auto 20rem;
        grid-template-rows: min-content min-content 1fr 20rem 20rem;
        grid-template-areas: 
            "title social" 
            "terminal greeble-1"
            "terminal resources"
            "projects image"
            "projects contact";
        height: 100vh;
        gap: 1rem;
        padding: 1rem;
        overflow: hidden;
    }

    .grid-area {
        overflow: hidden;
    }

    #title {
        grid-area: title;
        overflow: hidden;
    }
    
    #title-container {
        display: flex;
        gap: 0rem;
        align-items: center;
    }

    #title-text {
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .job-title {
        color: var(--color-mid);
        font-size: 1rem;
    }

    .icon-container {
        display: flex;
        align-items: center;
        padding: .5rem;
        border-radius: 10rem;
    }

    #terminal {
        grid-area: terminal;
        overflow: hidden;
    }

    #projects {
        grid-area: projects;
        overflow: hidden;
    }

    #social {
        grid-area: social;
    }

    .button-group {
        width: 100%;
        height: 100%;
        display: flex;
        gap: 1rem;
    }

    .button-group a {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #resources {
        grid-area: resources;
    }

    #greeble-1 {
        grid-area: greeble-1;
    }

    #image {
        grid-area: image;
    }

    #contact {
        grid-area: contact;
    }

    @media (min-width: 1800px) {
        #grid {
            grid-template-columns: 1fr 1fr 20rem;
            grid-template-areas: 
            "title title social" 
            "terminal projects greeble-1"
            "terminal projects resources"
            "terminal projects image"
            "terminal projects contact";
        }
    }

    @media (max-width: 700px) {
        #grid {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            height: unset;
        }

        .button-group {
            flex-direction: column;
        }

        #projects {
            display: none;
        }

        #resources {
        }

        #greeble-1 {
            display: none;
        }

        #image {
            display: none;
        }

        #terminal {
            height: 500px;
        }
    }

</style>