<script>
    import content from "$data/content.csv"
    // Keep only content that has category "photo-essay"
    const photoEssay = content.filter(item => item.category === "photo essay")
  </script>
<section class="relative bg-[color:#e3d5ca] w-full">
    <div class="relative w-full  py-10 mx-auto sm:py-12 md:py-16 md:px-16  max-w-9xl">
        <h2 class="font-cormorant  font-bold  leading-10 tracking-tight text-left text-[color:var(--color-text)] md:text-left sm:leading-none text-6xl md:text-6xl px-8 lg:text-[6rem]">Photo Essays</h2>
        <div class=" grid h-full grid-cols-1 px-8 lg:grid-cols-12 gap-10 pb-10 mt-8 ">
        {#each photoEssay as item, i}
                <div class="relative   flex flex-col items-start justify-end h-full  overflow-hidden  group md:col-span-6 xl:col-span-4">
                <a href="/photo-essay/{item.slug}" class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-[420px] hover:scale-110" style="background-image:url('/images/{item.image}'); filter:sepia(0.5);">
</a>
                <div class="relative z-20 w-full h-[180px] py-8 text-[color:var(--color-text)] bg-[color:#d6c2b3] border-t-0 border-yellow-200 px-7">
                    <a href="/photo-essay/{item.slug}" class="inline-block text-xs font-semibold absolute top-0 -mt-3.5 px-4 py-2 uppercase bg-[color:#B99379] text-white">{item.author}</a>
                    <h2 class="text-3xl group-hover:underline font-bold"><a href="/photo-essay/{item.slug}">{item.title}</a></h2>
                </div>
            </div>
         {/each}
        </div>
    </div>
</section>
