<script>
  import content from "$data/content.csv"
  import star from "$svg/star.svg"
  // Keep only content that has category "Poetry"
  const poetry = content.filter(item => item.category === "poetry")
  
</script>

<section  id="poetry" class="grid min-h-[50vh] py-12 lg:py-28 max-w-9xl mx-auto px-4 lg:grid-cols-8 gap-8 justify-end items-start">
  
    <div class="col-span-3 content  flex justify-center items-center h-full">
        <h2 class="text-7xl font-cormorant  font-bold  leading-10 tracking-tight text-left text-[color:var(--color-background)] px-6 lg:px-0  sm:leading-none md:text-6xl lg:text-[10rem]">Poetry</h2>
    </div>
    <div class=" col-span-5 content flex items-center ">
        <div class="flex-1 max-w-4xl mx-auto p-8">
          <ul class="grid grid-cols-6 gap-8">
            <a class="col-span-6 md:col-span-2 min-h-56 border-2 bg-[color:var(--color-background)] border-black hover-content" href="/poetry/{poetry[0].slug}">
            <li class="min-h-56">
                <div class="h-24 p-8">
                  {#if poetry[0].featured}
                  {@html star}
                  {/if}
                  <h3 class="font-libre italic text-center font-bold text-2xl">{poetry[0].title}</h3>
                  <hr class="divider">
                  <p class="text-center text-xl leading-10 tracking-tight text-[color:var(--color-text)] md:text-center sm:leading-none md:text-6xl lg:text-[1.5rem]">{poetry[0].author}</p>
                </div>
              </li>
            </a>
            <a  class="col-span-6 md:col-span-4 border-2 bg-[color:var(--color-primary)] h-56 hover:border-2 hover-content" href="/poetry/{poetry[2].slug}" >
            <li class="min-h-56">
              <div class="h-24 p-8 text-white">
                <h3 class="font-mono text-center font-semibold text-5xl">{poetry[2].title}</h3>
                <hr class="divider-white ">
                <p class="text-center text-xl leading-10 tracking-tight text-white md:text-center sm:leading-none md:text-6xl lg:text-[1.5rem]">{poetry[2].author}</p>
              </div>
             </li>
            </a>
            <a  class="col-span-6 md:col-span-3 h-56 border-2 border-black bg-[color:var(--color-background)] hover-content" href="/poetry/{poetry[3].slug}" >
            <li class="min-h-56">
              <div class="h-24 p-8">
                <h3 class="font-libre italic  text-center font-semibold text-5xl">{poetry[3].title}</h3>
                <hr class="divider">
                <p class="text-center text-xl leading-10 tracking-tight text-[color:var(--color-text)] md:text-center sm:leading-none md:text-6xl lg:text-[1.5rem]">{poetry[3].author}</p>
              </div>
             </li>
            </a>
            <a   class="col-span-6 md:col-span-3 border-2  bg-[color:var(--color-background)] border-black h-56 hover-content" href="/poetry/{poetry[1].slug}">
            <li class="min-h-56">
              <div class="h-24 p-8">
                <h3 class="font-libre  italic text-center font-semibold text-5xl">{poetry[1].title}</h3>
                <hr class="divider">
                <p class="text-center text-xl leading-10 tracking-tight md:text-center sm:leading-none md:text-6xl lg:text-[1.5rem]">{poetry[1].author}</p>
              </div>
             </li>
            </a>
            </ul>
        </div>
      </div>
</section>

<style>

#poetry {
  height: 100%;
  background-image: url('/assets/home1_34.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter:sepia(0.5) ;
  /* Background position is fixed */
  background-attachment: fixed;
}

.content {
  background-color: transparent!important;
}


</style>
