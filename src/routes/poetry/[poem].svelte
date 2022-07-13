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


{#if post.title != "404"}


<!-- Section 1 -->
<section class="w-4/5 mx-auto py-16">

    <div class="mx-auto w-full">
        <div class="flex flex-col lg:flex-row">
            <div class="relative w-full bg-cover lg:w-6/12 xl:w-7/12 ">
                <div class="relative flex flex-col items-start justify-start w-full h-full px-10 lg:px-16">
                    <section class="mx-auto container  pb-6">
                        <div class="top mx-auto">
                            <img class="py-4 w-1/2 mx-auto" src="/assets/poetry.png" alt={post.title} />
                            <h1 class="font-poppins  {titleClass} font-extrabold text-center py-6 text-[color:var(--color-text)]">{post.title}</h1>
                            <h2 class="pb-6 font-libre tracking-wide text-center text-xl">{post.author}</h2>
                            <img src="/assets/bottom.png" class="w-1/3 mx-auto" alt={post.title} />
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

{:else}
<main>
<section class="mx-auto container w-4/5 pt-24 pb-6">
    Page not found
</section>
</main>
{/if}

<style>
    :global(.large-text) {
        @apply text-8xl;
    }

    :global(.small-text) {
        @apply text-9xl;
    }

</style>