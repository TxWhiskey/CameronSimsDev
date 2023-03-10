<script lang='ts'>

    import * as figlet from 'figlet'
  import { onMount } from 'svelte';
  import Logo from './icons/Logo.svelte';

    let terminalFeed: {text: string, type: "system" | "user" }[] = [
    ]

    onMount( async () => {

        terminalFeed.push({ text: 'Welcome User', type: 'system'})
        terminalFeed = terminalFeed
    })

    let inputText: string = ""

    function handleInput() {
        terminalFeed.push({text: inputText, type: "user"})
        terminalFeed = terminalFeed
        inputText = ''
        setTimeout( () => {
            const outputFeed = document.getElementById('output')
            if ( outputFeed ) {
                outputFeed.scrollTop = outputFeed.scrollHeight
            }
        }, 100)
    }

</script>

<div class="container">
    <ul class="output" id="output">
        {#each terminalFeed as output}
        <li class="output-row">
            <p>
                {#if output.type == 'user'}
                USER:
                {:else}
                SYS.:
                {/if}
            </p>
            <pre>{output.text}</pre>
        </li>
        {/each}
    </ul>
    <div class="input-row">
        <p>(!):</p>
        <form on:submit|preventDefault={handleInput}>
            <input type="text" bind:value={inputText} id='terminal-input'>
        </form>
    </div>
    <div class="logo-container">
        <Logo height="10rem" color="light"/>
        <h5 style="color: var(--color-vlight); font-size: 1.5rem">CAMERON SIMS</h5>
    </div>
</div>

<style>

    .container {
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .logo-container {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        animation: 3s fade-out ;
        opacity: 0%;
        pointer-events: none;
        gap: 1rem;
        font-weight: 800;
    }

    .output {
        display: flex;
        flex-direction: column;
        gap: .25rem;
        padding: .25rem;
        overflow: auto;
    }

    .output-row {
        display: flex;
    }

    .output-row p {
        color: var(--color-mid);
    }

    .input-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: var(--color-dark);
        padding: .5rem;
        margin-top: auto;
    }

    pre {
        letter-spacing: normal;
    }

    form {
        width: 100%;
    }

    input {
        width: 100%;
        background-color: transparent;
        color: var(--color-vlight);
        border: none;
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: .2rem;
    }

    input:focus {
        outline: none;
    }

    @keyframes fade-out {
        0% {
            background-color: var(--color-dark);
            opacity: 100%;
            display: flex;
        }
        75% {
            opacity: 100%;
            background-color: var(--color-dark);
            display: flex;
        }
        100% {
            opacity: 0%;
            background-color: transparent;
        }
    }

</style>