<script>
    import content from "$data/content.csv";
    export let related;
    export let number = 3;

    // Choose 3 items from content where category is equal to related
    const relatedItems = content.filter(item => item.category === related);
    // Shuffle items
    // Get first 3 items
    const relatedItems3 = relatedItems.slice(0, number);

</script>
<section class="mx-auto max-w-5xl py-8">
    <h4 class="font-dm font-bold pb-4 text-4xl border-b border-[color:var(--color-text)] my-8 ">Read More</h4>
    
    <section class="flex justify-start gap-8 items-center">
        {#each relatedItems3 as item}
                <a href="/{related}/{item.slug}">
                    <div class="p-6 border-2 hover:cursor-pointer border-[color:var(--color-text)]">
                        <div class="top mx-auto">
                            <h1 class="font-poppins text-3xl italic font-bold text-left py-6 text-[color:var(--color-text)]">{item.title}</h1>
                            <h2 class="pb-6 font-libre tracking-wide text-left text-md">{item.author}</h2>
                        </div>
                    </div>
                </a>
        {/each}
    </section>
</section>