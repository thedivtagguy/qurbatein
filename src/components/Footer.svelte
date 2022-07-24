<script>
  import storiesData from "$data/stories.csv";
  import wordmark from "$svg/wordmark.svg";

  export let keywords;
  export let current;
  let stories = [];

  export const prerender = true;

  const links = [
    { name: "contact", url: "https://thedivtagguy.com/contact" },
    { name: "twitter", url: "https://twitter.com/thedivtagguy/" },
  ];

</script>

<footer class="max-w-5xl mx-auto py-4">
<section class="about py-4">
  <div class="w-[200px] mx-auto pb-4">
    <img preload src="/assets/full_logo.png" alt="CSGS Logo"/>
  </div>
  <p class="text-center mx-auto text-xs py-4 font-mono font-semibold  text-black  whitespace-pre-wrap">
    &lt;/&gt; with Svelte, Tailwind, Google Docs & &lt;3 in Bangalore, IN
  </p>
  <div class="flex mx-auto font-sans font-bold gap-6 text-xs justify-center items-center ">
    {#each links as link}
      <div>
        <a
          href={link.url}
          class="hover:underline underline-offset-2  decoration-dashed hover:text-purple-800">
          <span>{link.name.toUpperCase()}</span>
        </a>
      </div>
    {/each}
  </div>
</section>


</footer>
