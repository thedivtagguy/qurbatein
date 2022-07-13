<script context="module">
export const prerender = true;
	import "/src/styles/tailwind.css";
	import content from "$data/content.csv";

    const stories = content;
    console.log(stories);
	export async function load({ page }) {
		try {
            console.log(page);
			const post = await import(`../../data/posts/${page.params.article}.json`);
			// Filter stories by slug
			const story = stories.filter(story => story.slug === page.params.article)[0];
            console.log(story);
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
console.log(post);
	
</script>

<main>
{post.category}
</main>