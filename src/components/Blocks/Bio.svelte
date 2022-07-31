<script>
    import { marked } from "marked";
    export let text = '';
    export let name = [];
    export let links = [];
    export let image = [];
    console.log(image);
</script>
<section class="bio mx-auto max-w-2xl">
    <div class="text-xl flex justify-center items-center flex-col mt-8 bg-[color:var(--color-secondary)] text-white p-8">
       {#if image != '' && typeof image == "string" }
        <img class="mb-3 w-24 h-24 rounded-full object-cover shadow-lg" src="/assets/authors/{image}" alt="Author {name}"/>
        {:else if typeof image != 'string'}
        <div class="inline">
            {#each image as n, i}        
            <img class="mb-3 w-24 h-24 mx-2 inline rounded-full object-cover shadow-lg" src="/assets/authors/{n}" alt="Author {n}"/>
            {/each}
            </div>
        {:else}
        <div></div>
        {/if}
        {#if typeof name == 'string'}
        <h4 class="font-bold text-2xl ">{name}</h4>
        {:else}
        <div class="inline">
        {#each name as n, i}        
            <h4 class="font-bold text-2xl inline">{n}{i == name.length - 1 ? '': ', '}</h4>
        {/each}
        </div>
        {/if}
        <hr class="border-b-[1px] my-4 border-white w-full" />
        <p class="font-light">{@html marked.parse(text)}</p>
    </div>
</section>