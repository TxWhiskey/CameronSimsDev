<script lang='ts'>

    import { createEventDispatcher } from 'svelte';

    import type { Project } from "$lib/data/project/projects";

    export let project: Project

    const dispatch = createEventDispatcher();

    function fowardEvent( eventType: string ) {
        dispatch( eventType )
    }

</script>

<div class="container">
    <div class="vert-bar">
        <div class="vert-bar-fill"></div>
    </div>
    <div class="container-content">
        <div class="project-details">
            <div class="container-part">
                <h5>Title</h5>
                <p class='content'>{project.title}</p>
            </div>
            <div class="container-part">
                <h5>Description</h5>
                <p class='content'>{project.description}</p>
            </div>
            <div class="container-part" id='role'>
                <h5>Role</h5>
                <p class='content'>{project.role}</p>
            </div>
            <div class="container-part" id='tags'>
                <h5>Tags</h5>
                <ul class="list">
                    {#each project.tags as tag}
                    <li class='content list-item'>{tag}</li>
                    {/each}
                </ul>
            </div>
            <div class="container-part" id='tech'>
                <h5>Tech</h5>
                <ul class="list">
                    {#each project.techStack as tech}
                    <li class='content list-item'>{tech}</li>
                    {/each}
                </ul>
            </div>
        </div>
        <div class="button-group">
            <!-- <a href="" class='button-link'>More Detail</a>
            <a href="" class='button-link'>View All</a> -->
            <button on:click|preventDefault={()=>{fowardEvent('back')}}>Back</button>
            <button on:click|preventDefault={()=>{fowardEvent('next')}}>Next</button>
        </div>
    </div>
</div>

<style>

    .container {
        padding: 1rem;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        height: 100%;
        overflow: hidden;
    }

    .vert-bar {
        display: none;
        border: 2px solid var(--color-vlight);
        min-width: 1rem;
        height: 100%;
    }

    .vert-bar-fill {
        background-color: var(--color-vlight);
        animation: progress 10s linear;
    }

    .container-content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        overflow: auto;
        height: 100%;
    }

    .project-details {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 500px;
        overflow: auto;
    }

    .container-part {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    .button-group {
        margin-top: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }

    button {
        flex: 1;
    }

    h5 {
        background-color: var(--color-dark);
        color: var(--color-vlight);
        font-weight: 800;
        padding: .5rem;
    }

    .list {
        display: flex;
        flex-flow: row wrap;
        gap: .5rem;
    }

    .list-item {
        padding: .5rem;
        border: 2px solid var(--color-dark);
    }

    @keyframes progress {
        0% {
            height: 0;
        }
        100% {
            height: 100%;
        }
    }

    @media (max-width: 700px) {}

</style>