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
                href="https://github.com/TxWhiskey" 
                class="button-link" 
                target="_blank" 
                rel="noreferrer">
                Github
            </a>
        </div>
    </div>

    <div class="grid-area" id='contact'>
        <Contact/>
    </div>
    
    <div class="grid-area" id='image'>
        <GridModule moduleId="image">
            <Image/>
        </GridModule>
    </div>

    <div class="grid-area" id='projects'>
        <GridModule gridHeader="Projects" moduleId="projects">
            <ProjectList/>
        </GridModule>
    </div>
    
    <div class="grid-area" id="terminal">
        <GridModule gridHeader="Terminal" moduleId="terminal">
            <Terminal/>
        </GridModule>
    </div>

    <div class="grid-area" id="greeble-1">
        <FlickerBlocks/>
    </div>

    <div class="grid-area" id="resources">
        <GridModule gridHeader="Resources" moduleId="resources">
            <Resources/>
        </GridModule>
    </div>
    
</div>

<style>

    #grid {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: .5rem;
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
        justify-content: center;
        flex: 1;
        gap: 1rem;
    }

    .job-title {
        color: var(--color-mid);
        font-size: 1rem;
        display: none;
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
        display: none;
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
        padding: .5rem;
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

    @media (min-width: 500px) {

        #grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 
                auto
                auto
                1fr
                auto
                auto
                auto
            ;
            grid-template-areas: 
                "title           title"
                "greeble-1       image"
                "social          image"
                "contact         contact"
                "projects        projects"
                "resources       resources"
            ;
        }

        .button-group {
            flex-direction: column;
        }

    }

    @media (min-width: 750px) {

        #grid {
            grid-template-rows: 
                auto
                auto
                auto
                400px
                auto
                auto
            ;
            grid-template-areas: 
                "title title"
                "social image"
                "contact image"
                "resources terminal"
                "greeble-1 terminal"
                "projects projects"
            ;
        }

        #terminal {
            display: block;
        }

    }

    @media (min-width: 1000px) {

        #grid {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 
                auto
                auto
                auto
                1fr
                40rem
            ;
            grid-template-areas: 
                "title title social"
                "projects projects image"
                "projects projects greeble-1"
                "projects projects contact"
                "terminal terminal resources"
            ;
            min-height: 100vh;
        }

        #terminal {
            display: block;
        }

        #social {
            flex-direction: row;
        }

        #title-text, .job-title {
            display: block;
        }

        #title-container {
            height: 100%;
            justify-content: center;
            padding: 1rem;
        }

}

@media (min-width: 1300px) {
    
    #grid {
        grid-template-columns: 1fr 1fr 20rem;
        grid-template-rows: 
            auto
            auto
            auto
            minmax(15rem, auto)
            auto
        ;
        grid-template-areas: 
            "title      title       social"
            "projects   terminal    image"
            "projects   terminal   greeble-1"
            "projects   terminal   contact"
            "projects   terminal    resources"
        ;
        height: 100vh;
    }

    /* #projects, #resources {
        max-height: 45rem;
    } */

}

</style>