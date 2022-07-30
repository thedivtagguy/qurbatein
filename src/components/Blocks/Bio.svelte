<script>
    import { marked } from "marked";
    export let text = '';
    export let name = '';
    export let links = [];
    export let image = '';
</script>
<section class="bio mx-auto max-w-2xl">
    <div class="text-xl flex justify-center items-center flex-col mt-8 bg-[color:var(--color-secondary)] text-white p-8">
       {#if image != ''}
        <img class="mb-3 w-24 h-24 rounded-full  object-fill shadow-lg" src="/assets/authors/{image}" alt="Author {name}"/>
        {/if}
        <h4 class="font-bold text-2xl ">{name}</h4>
        <hr class="border-b-[1px] my-4 border-white w-full" />
        <p class="font-light">{@html marked.parse(text)}</p>
    </div>
</section>