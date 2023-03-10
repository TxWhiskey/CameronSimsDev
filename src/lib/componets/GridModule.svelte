<script lang='ts'>

    export let moduleId: string
    export let gridHeader: string | undefined = undefined

</script>

<div class="grid-module" id={moduleId}>

    {#if gridHeader}
        <h6 class="grid-header">{gridHeader}</h6>
    {/if}

    <div
        class="grid-content"
        class:border-top={!gridHeader}
    >
        <slot/>
    </div>

</div>

<style>

    .grid-module {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden
    }

    .grid-header {
        background-color: var(--color-vlight);
        padding: .5rem;
        color: var(--color-vdark);
        font-weight: 800;
        font-size: 1.25rem;
    }

    .grid-content {
        border: 2px solid var(--color-vlight);
        border-top: none;
        flex: 1;
        overflow: auto;
    }

    .border-top {
        border-top: 2px solid var(--color-vlight);
    }

</style>