<script>
    import content from "$data/content.csv"
    // Keep only content that has category "photo-essay"
    const photoEssay = content.filter(item => item.category === "photo essay")
    
  </script>
 
  
<!-- Section 1 -->
<section class="relative bg-[color:#e3d5ca] w-full">
    <div class="relative w-full   py-10 mx-auto sm:py-12 md:py-16 md:px-16  max-w-9xl">

        <h2 class="font-cormorant  font-bold  leading-10 tracking-tight text-left text-[color:var(--color-text)] md:text-left sm:leading-none text-6xl md:text-6xl px-8 lg:text-[6rem]">Photo Essays</h2>
        <div class="flex grid h-full grid-cols-1 px-8 lg:grid-cols-12 gap-10 pb-10 mt-8 ">
        {#each photoEssay as item, i}
                <div class="relative shadow-xl  flex flex-col items-start justify-end h-full  overflow-hidden  group md:col-span-6 xl:col-span-4">
                <a href="/photo-essay/{item.slug}" class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-[420px] hover:scale-110" style="background-image:url('/images/call-1.jpg'); filter:sepia(0.5);">
                </a>
                <div class="relative z-20 w-full h-[180px] py-8 text-[color:var(--color-text)] bg-[color:#d6c2b3] border-t-0 border-yellow-200 px-7">
                    <a href="/photo-essay/{item.slug}" class="inline-block text-xs font-semibold absolute top-0 -mt-3.5 px-4 py-2 uppercase bg-[color:#B99379] text-white">{item.author}</a>
                    <h2 class="text-3xl font-bold"><a href="/photo-essay/{item.slug}">{item.title}</a></h2>

                </div>
            </div>
         {/each}

            

        </div>
    </div>
</section>

  
  <style>

  #photo-essay {
    position: relative;
	width: 1000px;
	height: 800px;
	color: #333;
	text-align: center;
	padding-top: 20%;
	font-size: 20px;
  }

  #photo-essay::before {
    content: " ";
	position: absolute;
	left: 20%;
	top: 0;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	background-image: url("/assets/photoessay.jpg");
	background-size: contain;
	background-repeat: no-repeat;
    filter: grayscale(0.9)  sepia(0.9) contrast(1.2) brightness(0.8);
	z-index: 0;
  }

  #textbox {   
    filter: none;
    margin-top: -100px;
  }

  .image1{
        filter: grayscale(0.9)  sepia(0.9) contrast(1.2) brightness(0.8);

    background-image: url("/assets/image1.jpg") , linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
    background-blend-mode: overlay;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
  }

  .image2{
        filter: grayscale(0.9)  sepia(0.9) contrast(1.2) brightness(0.8);

    background-image: url("/assets/image2.jpg") , linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
    background-blend-mode: overlay;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: -500px ;
  }

    .image3{
            filter: grayscale(0.9)  sepia(0.9) contrast(1.2) brightness(0.8);

        background-image: url("/assets/image3.jpg") , linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
        background-blend-mode: overlay;
        background-size: cover;
        background-repeat: no-repeat;
        background-position-x: center;
    }

  </style>
  
