<script>
import { base, assets } from '$app/paths';
</script>
<main class="flex lg:flex-row flex-col  bg-[color:#F5EBE0]  justify-between items-center    w-full mx-auto text-gray-600 body-font">

<!-- Section 1 -->
<section class="py-20 max-w-7xl lg:px-12 ">
  <div class="px-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h2 class="text-3xl font-cormorant font-bold tracking-tight text-gray-900 sm:text-4xl md:text-7xl xl:text-7xl">
         Issue 1: Sex and the City
      </h2>
      <p class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        This issue aims to ask questions related to cities and sexualities, focusing on the complex intersections of geography and desire. Who inhabits the city? Whom does the city desire? What are normative geographies and how do they affect sex and sexuality? Why is the city deemed a space of sexual liberation? Whose stories make up the sexual and urban landscapes of cities?      </p>
     
  </div>
</section>

  <section class="bg-[color:#F5EBE0] h-1/2  py-4  w-full mx-auto text-gray-600 body-font ">
    <div class="justify-items-center lg:w-4/5 items-center px-5 py-24 mx-auto flex">
      <div class="flex justify-items-center items-center  md:-m-2 -m-1">
        <div class="flex justify-around -mt-[160px]  items-center flex-wrap ">
          <div class="md:p-2 p-1 w-1/2">
            <img alt="gallery" class="w-full object-cover h-full object-center block" src="{assets}/images/gallery-1.jpg">
          </div>
          <div class="md:p-2 p-1 w-2/5">
            <img alt="gallery" class="w-full object-cover h-full object-center block" src="{assets}/images/gallery-2.jpg">
          </div>
          <div class="md:p-2 p-1 w-full">
            <img alt="gallery" class="w-full h-full object-cover object-center block" src="{assets}/images/gallery-3.jpg">
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  img {
    filter: grayscale(0.3)  sepia(0.5) contrast(1.2) brightness(0.8);
  }
</style>