<script context="module">
export const prerender = true;
	import "/src/styles/tailwind.css";
	import content from "$data/content.csv";
    import { marked } from 'marked';
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





<!-- Section 1 -->
<section class="w-full py-24">

    <div class="mx-auto max-w-7xl">
        <div class="flex flex-col lg:flex-row">
            <div class="relative w-full bg-cover lg:w-6/12 xl:w-7/12 ">
                <div class="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                    <section class="mx-auto container pt-24 pb-6">
                        <div class="top mx-auto">
                            <h1 class="font-poppins  {titleClass} font-extrabold text-[color:var(--color-text)]">{post.title}</h1>
                            <h2 class="py-6 font-dm italic font-bold text-3xl">{post.author}</h2>
                            <hr class="border-b-[1px] my-4 border-[color:var(--color-accent)] w-full" />
                        </div>
                        <div class="bottom">
                            <!-- <img class="w-full opacity-30" src="/assets/topper.png" alt={post.title} /> -->
                        </div>
                        </section>
                </div>
            </div>

            <div class="w-full lg:w-6/12 xl:w-5/12">
                {#each post.text as paragraph}
                <div class="text-xl">
            {@html marked.parse(paragraph.stanza)}
                </div>
                {/each}
            
                {#if post.bio}
                <div class="text-xl mt-8 bg-[color:var(--color-secondary)] text-white p-8">
                    <h4 class="font-bold text-2xl pb-4">About the Author</h4>
                    <p>{@html marked.parse(post.bio)}</p>
                </div>
                {/if}
            
            </div>
        </div>
    </div>
</section>



<style>
    :global(.large-text) {
        @apply text-8xl;
    }

    :global(.small-text) {
        @apply text-9xl;
    }

</style>