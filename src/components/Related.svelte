<script>
    import content from "$data/content.csv";
    export let related;
    export let number = 3;
    export let current;
    import { base, assets } from '$app/paths';

    // Choose three items where category == related and slug != current
    let relatedItems = [];
    for (let i = 0; i < content.length; i++) {
        if (content[i].category == related && content[i].slug != current) {
            relatedItems.push(content[i]);
        }
    }
    // only 2 items randomly from relatedItems
   const shuffled = relatedItems.sort(() => 0.5 - Math.random());
   let items = shuffled.slice(0, number);

    

</script>
<section class="mx-auto px-8 max-w-5xl py-8">
    <h4 class="font-dm font-bold pb-4 text-4xl border-b border-[color:var(--color-text)] my-8 ">Read More</h4>
    
    <section class="flex lg:flex-row flex-col justify-start gap-8 items-start lg:items-center">
        {#each items as item}
                <a href="{base}/{related}/{item.slug}"  rel="external">
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