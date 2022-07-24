<script context="module">
export const prerender = true;
	import "/src/styles/tailwind.css";
	import content from "$data/content.csv";
      const stories = content;
	export async function load({ page }) {
		try {
			const post = await import(`../../data/posts/${page.params.prose}.json`);
			// Filter stories by slug
			const story = stories.filter(story => story.slug === page.params.prose)[0];
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
    import ArticleImage from "$components/Blocks/ArticleImage.svelte";
    import Pullquote from "$components/Blocks/Pullquote.svelte";
    export let post;
    console.log(post);
    let titleClass;
	// Calculate title length
    const titleLength = post.title.length;
    // If title length is greater than 15, set titleClass to "text-gray-900"
    if (titleLength > 15) {
        titleClass = "large-text";
    } else {
        titleClass = "small-text";
    }
</script>
{#if post.title != "404"}
<main>
<section class="mx-auto container w-4/5 pt-12 pb-6">
<div class="top mx-auto">
    <img src="/assets/header.png" class="mx-auto pb-6" width="250" alt={post.title} />
    <h1 class="font-dm  {titleClass} text-center italic leading-royal font-extrabold text-[color:var(--color-text)]">{post.title}</h1>
    <hr class="border-b-[1px] my-6 border-[color:var(--color-text)] w-[50px] mx-auto" />
    <h2 class="pb-6 font-libre tracking-wide text-center text-xl">{post.author}</h2>
    <!-- <hr class="border-b-[1px]  border-[color:var(--color-accent)] w-full" /> -->
</div>
<div class="bottom">
    <!-- <img class="w-full opacity-30" src="/assets/topper.png" alt={post.title} /> -->
</div>
</section>

<section class="mx-auto px-6 lg:w-2/3">
    <!-- {#if post.quote}
    <blockquote class="text-center bg-[color:var(--color-primary)] text-white p-8 my-8">
        <p class="text-left italic text-xl ">{post.quote.text}</p>
        {#if post.quote.attribution}
        <p class="text-right text-xl ">{post.quote.attribution}</p>
        {/if}
    </blockquote>
    {/if} -->

   {#each post.blocks as block}
   {#if block.Type == "text"}
         <BodyText text={block.Text}/>
    {/if}

    {#if block.Type == "ArticleImage"}
        <ArticleImage src={block.Link} caption={block.caption}/>
    {/if}

    {#if block.Type == "pullquote"}
       <Pullquote text={block.Text}/>
    {/if}
    {/each}

    <!-- {#if post.bio}
    <div class="text-xl mt-8 bg-[color:var(--color-secondary)] text-white p-8">
        <h4 class="font-bold text-2xl pb-4">About the Author</h4>
        <p>{@html marked.parse(post.bio)}</p>
    </div>
    {/if} -->

    {#if post.footnotes}
    <div class="py-8">
        <hr class="border-b-[1px] my-4 border-[color:var(--color-accent)] w-full" />
        <h2 class="text-sm font-bold">References</h2>
        {#each post.footnotes as footnote}
        <div class="py-2">
            <p class="text-sm">
                {footnote.value}
            </p>
        </div>
        {/each}
    </div>
    {/if}


</main>
{:else}
<main>
<section class="mx-auto container w-4/5 pt-24 pb-6">
    Page not found
</section>
</main>
{/if}

<style>
    :global(.large-text) {
        @apply text-5xl;
    }

    :global(.small-text) {
        @apply text-9xl;
    }

</style>