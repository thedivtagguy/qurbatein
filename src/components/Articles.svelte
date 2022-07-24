<script>
    import content from "$data/content.csv"
    // Keep only content that has category "article"
    const article = content.filter(item => item.category === "articles")
  </script>
  
  <section class="lg:grid lg:min-h-[50vh] py-12 lg:pt-28 lg:px-12 lg:grid-cols-8 gap-8 justify-end items-start">
      <div class="col-span-3  px-6 h-full">
          <h2 class="font-cormorant  font-bold  leading-10 tracking-tight text-left text-[color:var(--color-text)] md:text-left sm:leading-none text-6xl md:text-6xl lg:text-[6rem]">Articles</h2>
      </div>
      <div class=" col-span-5 flex items-center ">
          <div class="flex-1 max-w-4xl mx-auto p-8">
            <ul class="grid grid-cols-6 gap-8">
                {#each article as item, i}

                <li class="col-span-6 border-t-[3px] lg:my-4 border-black">
                    <a href="/articles/{item.slug}" class="block hover:text-[color:var(--color-text)]">

                    <div class="flex py-4 justify-start gap-6">
                        <div class="flex-0">
                            <span class="text-xl"><span class="font-bold">[</span>{i + 1}<span class="font-bold"> ]</span>
                        </div>
                        <div class="flex-1">
                                <h3 class="lg:text-2xl text-xl font-mono hover:underline hover:cursor-pointer ">{item.title}</h3>
                        </div>
                        <div>
                            <span class="text-sm font-mono">{item.author}</span>
                        </div>
                    </div>
                    </a>
                </li>
                {/each}
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
  