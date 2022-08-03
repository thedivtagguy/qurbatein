<script context="module">
export const prerender = true;
	import "/src/styles/tailwind.css";
	import content from "$data/content.csv";
      const stories = content;
	export async function load({ page }) {
		try {
			const post = await import(`../../data/posts/${page.params.poem}.json`);
			// Filter stories by slug
			const story = stories.filter(story => story.slug === page.params.poem)[0];
			// Combine data
			const data = { ...post, ...story };
			return {
				// Data passed into svelte component
				props: {
					post: data
				}
			};
		} catch (e) {
			return {
				props: {
					post: {
						title: "404",
						content: "Page not found"
					}
				}
			};
		}
	}
</script>
<script>
    import BodyText from "$components/Blocks/BodyText.svelte";
    import Bio from "$components/Blocks/Bio.svelte";
    import convertToSlug from "$utils/slugify";
    // Combine story and post into one object called post
    export let post;
 // Add new key called slug convertToSlug(poem.title)


</script>


{#if post.title != "404"}

<!-- Section 1 -->
<section class="lg;w-4/5 mx-auto px-4 lg:py-2">
    {#if post.multiplePoems == "true"}
    
    <!-- Section 1 -->
    <section class="lg:py-8 py-8 leading-7 text-gray-900 sm:py-12">
        <div class="max-w-6xl px-4 mx-auto border-solid lg:px-12">
            <div class="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
                <div class="box-border flex-1 text-center border-solid sm:text-left">
                    <h2 class="m-0 text-3xl font-semibold leading-tight tracking-tight text-left text-black border-0 font-sans border-gray-200 sm:text-4xl">
                    A Collection by <span class="font-cormorant italic">{post.author}</span>
                    </h2>
                   <div class="flex py-2 gap-1 lg:gap-6">
                    {#each post.poems as poem}
                    <p class="text-black lg:text-base text-sm lg:text- font-semibold ">{poem.title}</p> {#if poem != post.poems[post.poems.length - 1] }<span class="text-gray-600">/</span> {/if}
                    {/each}
                    </div>
                </div>
            </div>
        </div>
    </section>

    {#each post.poems as poem, i}
    <div id={convertToSlug(poem.title)} class="mx-auto w-full {i == post.poems.length - 1 ? '' :  'border-b-2'} py-8">
        <div class="flex px-4 flex-col lg:flex-row">
            <div class="relative w-full bg-cover lg:w-6/12 xl:w-7/12 ">
                <div class="relative flex flex-col items-start justify-start w-full h-full px-2 lg:px-16">
                    <section class="mx-auto container  pb-6">
                        <div class="top mx-auto">
                            <img class="lg:py-4 w-1/2 lg:mx-auto" src="/assets/poetry.png" alt={poem.title} />
                            <h1 class="font-dm italic  {poem.title.length > 15 ? 'lg:large-text text-5xl' : 'small-text'} pb-8 capitalize font-extrabold lg:w-2/3 text-left  xl:text-center mx-auto lg:text-center py-4 text-[color:var(--color-text)]">{poem.title}</h1>
                            <img src="/assets/bottom.png" class="w-1/3 lg:mx-auto" alt={poem.title} />
                        </div>
                        <div class="bottom">
                            <!-- <img class="w-full opacity-30" src="/assets/topper.png" alt={post.title} /> -->
                        </div>
                        </section>
                </div>
            </div>


            <div class="w-full lg:w-6/12 xl:w-5/12">
               

                {#each poem.blocks as block}
                    {#if block.Type === 'text'}
                        <BodyText text ={block.Text}/>
                    {/if}

                 
                    {/each}
            
            
            </div>

        
        </div>
        {#each poem.blocks as block}
        {#if block.Type == "Bio"}
        <Bio text={block.Text} name={post.author} image={block.photo}/>
    {/if}
    {/each}
    </div>
    {/each}
    {:else}

    
    <div class="mx-auto py-12 lg:py-20 w-full">
        <div class="flex flex-col  lg:flex-row">
            <div class="relative w-full bg-cover lg:w-6/12 xl:w-7/12 ">
                <div class="relative flex flex-col items-start justify-start w-full h-full">
                    <section class="mx-auto container  pb-6">
                        <div class="top mx-auto">
                            <img class="py-4 w-1/2 mx-auto" src="/assets/poetry.png" alt={post.title} />
                            <h1 class="font-dm italic  {post.title.length > 15 ? 'large-text' : 'small-text'} font-extrabold text-center  text-[color:var(--color-text)]">{post.title}</h1>
                            <h2 class="lg:py-6  py-2 font-libre tracking-wide text-center text-xl">{post.author}</h2>
                            <img src="/assets/bottom.png" class="w-1/3 mx-auto" alt={post.title} />
                        </div>
                        <div class="bottom">
                            <!-- <img class="w-full opacity-30" src="/assets/topper.png" alt={post.title} /> -->
                        </div>
                        </section>
                </div>
            </div>
            <div class="w-full px-6 lg:w-6/12 xl:w-5/12">
                {#each post.blocks as block}
                    {#if block.Type === 'text'}
                        <BodyText text ={block.Text}/>
                    {/if}

                    {/each}
            </div>
          
        </div>
        {#each post.blocks as block}
        {#if block.Type == "Bio"}
        <Bio text={block.Text} name={post.author} image={block.photo}/>
    {/if}
    {/each}
    </div>
    {/if}
</section>

{:else}
<main>
<section class="mx-auto container w-4/5 pt-24 pb-6">
    Page not found
</section>
</main>
{/if}

<style>
    :global(.large-text) {
        @apply text-7xl leading-[3.5rem];
    }

    :global(.small-text) {
        @apply text-7xl;
    }
    

</style>