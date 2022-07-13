<script context="module">
export const prerender = true;
	import "/src/styles/tailwind.css";
	import content from "$data/content.csv";
    import { marked } from 'marked';
      const stories = content;
	export async function load({ page }) {
		try {
			const post = await import(`../../data/posts/${page.params.article}.json`);
			// Filter stories by slug
			const story = stories.filter(story => story.slug === page.params.article)[0];
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
    // Combine story and post into one object called post
    export let post;
    let titleClass;
console.log(post);
	// Calculate title length
    const titleLength = post.title.length;
    // If title length is greater than 15, set titleClass to "text-gray-900"
    if (titleLength > 15) {
        titleClass = "large-text";
    } else {
        titleClass = "small-text";
    }
</script>

<main>
<section class="mx-auto w-2/3 pt-24 pb-6">
<h1 class="font-poppins  {titleClass} font-extrabold text-[color:var(--color-text)]">{post.title}</h1>
<h2 class="py-6 font-dm italic font-bold text-3xl">{post.author}</h2>
<hr class="border-b-[1px] my-4 border-[color:var(--color-accent)] w-full" />
</section>

<section class="mx-auto w-2/3">
    {#if post.quote}
    <blockquote class="text-center bg-[color:var(--color-primary)] text-white p-8 my-8">
        <p class="text-left italic text-xl ">{post.quote.text}</p>
        {#if post.quote.attribution}
        <p class="text-right text-xl ">{post.quote.attribution}</p>
        {/if}
    </blockquote>
    {/if}

    {#each post.text as paragraph}
    <div class="text-xl py-2">
        <p>{@html marked.parse(paragraph.value)}</p>
    </div>
    {/each}

    {#if post.bio}
    <div class="text-xl mt-8 bg-[color:var(--color-secondary)] text-white p-8">
        <h4 class="font-bold text-2xl pb-4">About the Author</h4>
        <p>{@html marked.parse(post.bio)}</p>
    </div>
    {/if}

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

<style global>
    .large-text {
        @apply text-8xl;
    }

    .small-text {
        @apply text-9xl;
    }

</style>