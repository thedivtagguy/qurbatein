<script context="module">
    import "../styles/tailwind.css";
    export const prerender = true;
    export const router = true;
  </script>
  
<script>
  import BodyText from "$components/Blocks/BodyText.svelte";
  import ArticleImage from "$components/Blocks/ArticleImage.svelte";
  import Footer from "$components/Footer.svelte";
  import Menu from "$components/Menu.svelte";
  import post from "$data/submissions.json"
  import Meta from "$components/Meta.svelte";
</script>
<Meta  />
<Menu />
<main class="max-w-6xl mx-auto" >
    <section class="mx-auto container max-w-xl pt-12 pb-6">
      <div class="top mx-auto">
        <img src="/assets/header.png" class="mx-auto pb-6" width="250" alt={post.title} />
        <h1
          class="font-dm px-4 text-5xl text-center italic leading-royal font-extrabold text-[color:var(--color-text)]"
        >
          {@html post.title}
        </h1>
        <hr class="border-b-[1px] my-6 md:my-12 border-[color:var(--color-text)] w-[50px] mx-auto" />      
      </div>
    </section>

    <section class="mx-auto px-6  lg:w-2/3">
      {#each post.blocks as block}
        {#if block.Type == "text"}
          <BodyText text={block.Text} />
        {/if}

        {#if block.Type == "ArticleImage"}
          <ArticleImage src={block.Link} caption={block.caption} />
        {/if}

      

        {#if block.Type == "h2"}
        <section class="py-8 mx-auto">
    
         <h2> {block.Text}</h2>
        </section>
        {/if}
    
      {/each}


    </section>
    <Footer />
  </main>