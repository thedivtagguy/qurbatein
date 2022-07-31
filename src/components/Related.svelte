<script>
    import content from "$data/content.csv";
    export let related;
    export let number = 3;
    export let current;

    // Choose 3 items from content where category is equal to related
    let relatedItems = content.filter(item => item.category === related);
    // Remove current item from related items
    relatedItems.filter(item => item.slug !== current);
    // Shuffle items
    // Get first 3 items
    const relatedItems3 = relatedItems.slice(0, number);

</script>
<section class="mx-auto px-8 max-w-5xl py-8">
    <h4 class="font-dm font-bold pb-4 text-4xl border-b border-[color:var(--color-text)] my-8 ">Read More</h4>
    
    <section class="flex lg:flex-row flex-col justify-start gap-8 items-start lg:items-center">
        {#each relatedItems3 as item}
                <a href="/{related}/{item.slug}"  rel="external">
                    <div class="lg:p-6 p-4 border-2 hover:cursor-pointer border-[color:var(--color-text)]">
                        <div class="top mx-auto">
                            <h1 class="font-poppins text-xl  lg:text-3xl italic font-bold text-left py-2 lg:py-6 text-[color:var(--color-text)]">{item.title}</h1>
                            <h2 class="lg:pb-6 font-libre tracking-wide text-left text-sm lg:text-md">{item.author}</h2>
                        </div>
                    </div>
                </a>
        {/each}
    </section>
</section>