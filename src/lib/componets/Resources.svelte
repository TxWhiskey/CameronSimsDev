<script lang='ts'>
    import { resources } from "$lib/data/resources/resources";
</script>

<ul>
    {#each resources as resource}
        <li>
            <a href="{resource.link}" target="_blank" rel="noreferrer">
                {resource.title}
                <p>{resource.type}</p>
            </a>
        </li>
    {/each}
</ul>

<style>

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }

    li {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    a {
        text-decoration: none;
        padding: .5rem;
        color: var(--color-vlight);
        background-color: var(--color-dark);
    }

    a:hover {
        background-color: var(--color-mid);
        color: var(--color-vdark)
    }

    p {
        color: var(--color-mid);
        font-size: 1rem;
    }

    a:hover p {
        color: var(--color-vdark)
    }

</style>