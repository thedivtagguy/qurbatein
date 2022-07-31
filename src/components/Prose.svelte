<script>
  import content from "$data/content.csv";
  // Keep only content that has category "Poetry"
  const prose = content.filter((item) => item.category === "prose");
  import star from "$svg/star.svg";
</script>

<!-- Section 1 -->
<section id="prose" class="flex items-center max-w-9xl md:px-0  md:mx-auto   justify-center   ">
  <div class="md:py-12">
    <div
      class="container py-12  border-[color:var(--color-background)] flex flex-col items-center mx-auto lg:items-center"
    >
      <h2
        class="relative flex items-center py-4 w-full max-w-3xl text-[6rem] lg:text-[6rem] font-cormorant  text-[color:var(--color-background)] font-bold justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-[color:var(--color-background)] lg:inline-block"
          viewBox="0 0 975.036 975.036"
        >
          <path
            d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
          />
        </svg>
        Prose
      </h2>

      <div
        class="items-center py-4 md:py-12 text-[color:var(--color-text)] px-12 gap-6 justify-center h-full w-full flex md:flex-row flex-col"
      >
        {#each prose as item}
          <div
            class="flex flex-col bg-[color:var(--color-background)]   hover:bg-[color:var(--color-text)] border-[0.5px] border-[color:var(--color-background)]   hover:cursor-pointer hover:text-[color:var(--color-background)] items-center justify-between w-full px-0 mx-0   lg:w-1/3  lg:px-8 "
          >
            <a href="/prose/{item.slug}">
              <div
                class="flex flex-col items-center min-h-[170px] gap-2 md:min-h-[300px] py-12 justify-around"
              >
                {#if item.featured == "TRUE"}
                  <div class="flex py-1 justify-center items-center">{@html star}</div>
                {/if}
                <h3 class="font-bold text-center font-dm px-6 text-2xl lg:text-4xl capitalize ">
                  {item.title}
                </h3>
                <h4 class="font-bold text-center font-mono  lg:text-xl text-md capitalize  ">
                  {item.author}
                </h4>
              </div>
            </a>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  #prose {
    background-image: url("/assets/home4.jpg");
    background-size: cover;
    background-position: 0 -190px;
  }
</style>
