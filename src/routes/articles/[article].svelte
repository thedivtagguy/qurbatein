<script context="module">
  export const prerender = true;
  import "/src/styles/tailwind.css";
  import content from "$data/content.csv";
  const stories = content;
  export async function load({ page }) {
    try {
      const post = await import(`../../data/posts/${page.params.article}.json`);
      // Filter stories by slug
      const story = stories.filter((story) => story.slug === page.params.article)[0];
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
  import Bio from "$components/Blocks/Bio.svelte";
  import Related from "$components/Related.svelte";
  export let post;
</script>

{#if post.title != "404"}
  <main>
    <section class="mx-auto container max-w-sm md:w-4/5 pt-12 pb-6">
      <div class="top mx-auto">
        <img src="/assets/header.png" class="mx-auto pb-6" width="250" alt={post.title} />
        <h1
          class="font-dm  text-5xl text-center italic leading-royal font-extrabold text-[color:var(--color-text)]"
        >
          {post.title}
        </h1>
        <hr class="border-b-[1px] my-6 border-[color:var(--color-text)] w-[50px] mx-auto" />
        <h2 class="pb-6 font-libre tracking-wide text-center text-xl">{post.author}</h2>
      </div>
    </section>

    <section class="mx-auto px-6 lg:w-2/3">
      {#each post.blocks as block}
        {#if block.Type == "text"}
          <BodyText text={block.Text} />
        {/if}

        {#if block.Type == "ArticleImage"}
          <ArticleImage src={block.Link} caption={block.caption} />
        {/if}

        {#if block.Type == "pullquote"}
          <Pullquote text={block.Text} />
        {/if}

        {#if block.Type == "Bio"}
          <Bio text={block.Text} name={post.author} image={block.photo} />
        {/if}
      {/each}

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

      <Related number="2" related="articles" current={post.slug} />
    </section>
  </main>
{:else}
  <main>
    <section class="mx-auto container w-4/5 pt-24 pb-6">Page not found</section>
  </main>
{/if}
