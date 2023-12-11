<script lang="ts">

    import GridModule from "$lib/componets/GridModule.svelte";
    import Icon from "$lib/componets/icons/Logo.svelte";
    import { type Project, projects } from '$lib/data/project/projects';

    let selectedProject: Project | null = null;

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
                href="https://github.com/TxWhiskey" 
                class="button-link" 
                target="_blank" 
                rel="noreferrer">
                Home
            </a>
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

    <div class="grid-area" id="project-selector">
        <GridModule moduleId="project-selector">
            <ul id="project-selector-container">

                {#each projects as project}
                    <li 
                        class="project-selector-item"
                        on:click={() => selectedProject = project}
                        >
                        {project.title}
                    </li>
                {/each}

            </ul>
        </GridModule>
    </div>

</div>

<style>

    #grid {
        display: flex;
        flex-direction: column;
        gap: .5rem;
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

    #grid {
            display: grid;
            grid-template-columns: auto;
            grid-template-rows: 
                auto
                auto
            ;
            grid-template-areas: 
                "title"
                "social"
            ;
        }

</style>