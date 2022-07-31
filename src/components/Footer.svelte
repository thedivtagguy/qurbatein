<script>
  import storiesData from "$data/stories.csv";
  import wordmark from "$svg/wordmark.svg";

  export let keywords;
  export let current;
  let stories = [];
  let d = new Date(); 
  let currentYear = d.getFullYear(); 
  export const prerender = true;

  const links = [
    { name: "contact", url: "mailto:csgs@ashoka.ac.in" },
    { name: "twitter", url: "https://twitter.com/csgs_ashoka/" },
    { name: "facebook", url: "https://facebook.com/csgsashoka"},
    { name: "instagram", url: "https://instagram.com/csgs_ashoka/" }
 
  ];

</script>

<footer class="max-w-5xl mx-auto py-4">
<section class="about py-4">
  <div class="w-[200px] mx-auto pb-4">
    <a href="https://csgs.ac.in"><img preload src="/assets/full_logo.png" alt="CSGS Logo"/></a>
  </div>

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
  <p class="text-center mx-auto text-sm py-2 mt-2 font-mono font-semibold  text-black  whitespace-pre-wrap">
    &copy; Copyright {currentYear} <br>Centre for Gender and Sexuality Studies, Ashoka University </p>
    <p class="text-center font-light mx-auto text-[0.6rem]  font-mono font-semibold  text-black  whitespace-pre-wrap">
     Background photographs by <a class="underline hover:cursor-pointer hover:text-purple-700" href="https://instagram.com/tamedwildflower" rel="external">Srija U</a>
      </p>
</section>


</footer>
