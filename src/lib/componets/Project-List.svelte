<script lang='ts'>

    import { projects } from "$lib/data/project/projects";
    import Project from "./Project.svelte";

    let currentProjectIndex = 0
    let currentProject = projects[currentProjectIndex]

    function incrementProject() {
        if ( currentProjectIndex + 1 < projects.length ) {
            currentProjectIndex += 1
            currentProject = projects[currentProjectIndex]
        } else {
            currentProjectIndex = 0
        }
    }

    let timer: NodeJS.Timer
    
    resetTimer()

    function resetTimer() {
        clearInterval(timer)
        timer = setInterval( incrementProject, 15000)
    }

    function handleNext() {
        incrementProject()
        resetTimer()
    }
    
    function handleBack() {
        if ( currentProjectIndex > 0 ) {
            currentProjectIndex -= 1
            currentProject = projects[currentProjectIndex]
        } else {
            currentProjectIndex = ( projects.length - 1 )
            currentProject = projects[currentProjectIndex]
        }
        resetTimer()
    }

</script>

{#key currentProject}
    <Project 
        project={currentProject} 
        on:next={handleNext}
        on:back={handleBack}
    />
{/key}