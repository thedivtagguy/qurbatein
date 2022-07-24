<script>
  import content from "$data/content.csv"
  // Keep only content that has category "Poetry"
  const poetry = content.filter(item => item.category === "poetry")
  
</script>

<section class="grid min-h-[50vh] py-12 lg:py-28 lg:px-24 px-4 lg:grid-cols-8 gap-8 justify-end items-start">
    <div class="col-span-3  h-full">
        <h2 class="text-7xl font-cormorant  font-bold  leading-10 tracking-tight text-left text-[color:var(--color-text)]  sm:leading-none md:text-6xl lg:text-[6rem]">Poetry</h2>
    </div>
    <div class=" col-span-5 flex items-center ">
        <div class="flex-1 max-w-4xl mx-auto p-8">
          <ul class="grid grid-cols-6 gap-8">
              <li class="col-span-6 md:col-span-2 h-56 border-r-2 border-b-2 border-black hover-content">
                <a href="/poetry/{poetry[0].slug}">
                <div class="h-24 p-8">
                  <h3 class="font-libre italic text-center font-bold text-2xl">{poetry[0].title}</h3>
                  <hr class="divider">
                  <p class="text-center text-xl leading-10 tracking-tight text-[color:var(--color-text)] md:text-center sm:leading-none md:text-6xl lg:text-[1.5rem]">{poetry[0].author}</p>
                </div>
                </a>
              </li>
            <li class="col-span-6 md:col-span-4 bg-[color:var(--color-primary)] h-56 hover:border-2 hover-content">
              <a href="/poetry/{poetry[2].slug}" >
              <div class="h-24 p-8 text-white">
                <h3 class="font-mono text-center font-semibold text-5xl">{poetry[2].title}</h3>
                <hr class="divider-white ">
                <p class="text-center text-xl leading-10 tracking-tight text-white md:text-center sm:leading-none md:text-6xl lg:text-[1.5rem]">{poetry[2].author}</p>
              </div>
              </a>
             </li>
            <li class="col-span-6 md:col-span-3 h-56 hover-content">
              <a href="/poetry/{poetry[3].slug}" >
              <div class="h-24 p-8">
                <h3 class="font-libre italic  text-center font-semibold text-5xl">{poetry[3].title}</h3>
                <hr class="divider">
                <p class="text-center text-xl leading-10 tracking-tight text-[color:var(--color-text)] md:text-center sm:leading-none md:text-6xl lg:text-[1.5rem]">{poetry[3].author}</p>
              </div>
              </a>
             </li>
             <li class="col-span-6 md:col-span-3 border-2 border-black h-56 hover-content">
              <a href="/poetry/{poetry[1].slug}">
              <div class="h-24 p-8">
                <h3 class="font-libre  italic text-center font-semibold text-5xl">{poetry[1].title}</h3>
                <hr class="divider">
                <p class="text-center text-xl leading-10 tracking-tight md:text-center sm:leading-none md:text-6xl lg:text-[1.5rem]">{poetry[1].author}</p>
              </div>
              </a>
             </li>
          </ul>
        </div>
      </div>
</section>

<style>
.vl {
  border-left: 6px solid green;
  height: 500px;
}
.author::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='100' cy='10' r='8' stroke='black' stroke-width='2' fill='red'/%3E%3Cpolyline points='20,20 40,25 60,40 80,120 120,140 200,180' style='fill:none;stroke:black;stroke-width:3'/%3E%3C/svg%3E ");
  width: 20px;
  height: 20px;
}

</style>
