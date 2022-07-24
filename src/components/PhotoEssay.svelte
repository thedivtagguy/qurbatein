<script>
    import content from "$data/content.csv"
    // Keep only content that has category "photo-essay"
    const photoEssay = content.filter(item => item.category === "photo essay")
    
  </script>
  
  <section class="grid bg-[color:#e3d5ca] lg:min-h-[50vh] grid-cols-1 py-20 px-6 lg:px-24 lg:grid-cols-8 gap-8 justify-between items-start">
      <div class="col-span-4  h-full">
        <div class=" col-span-5 flex lg:flex-row flex-col items-center ">
              <ul class="grid grid-cols-6 gap-6 w-4/5">
                <li class="lg:col-span-6 col-span-3 border-r-2 lg:p-4 hover-content border-black">
                    <blockquote class="flex image1   h-[180px] overlay items-center justify-between w-full col-span-1 p-4">
                        <div class="flex  flex-col pr-10">
                            <a href="/photo-essay/{photoEssay[0].slug}">
                                <div class="relative pl-12">
                                    <h3 class="mt-2 text-sm font-cormorant  font-bold italic text-white sm:text-base lg:text-4xl">{photoEssay[0].title}</h3>
                                </div>
                                <h3 class="pl-12 mt-3 text-sm font-medium leading-5 text-white truncate sm:text-base ">
                                    {photoEssay[0].author}
                                </h3>
                                <p class="mt-1 text-sm leading-5 text-white truncate"></p>
                            </a>
                        </div>
                    </blockquote>
                 </li>
                 <li class="lg:col-span-6 col-span-3 border-l-2 p-4 hover-content border-black">
                    <blockquote class="flex image2   h-[180px] overlay items-center justify-between w-full col-span-1 p-4">
                        <div class="flex  flex-col pr-10">
                            <div class="relative pl-12">
                                <h3 class="mt-2 text-sm font-cormorant  font-bold italic text-white sm:text-base lg:text-4xl">{photoEssay[1].title}</h3>
                            </div>
    
                            <h3 class="pl-12 mt-3 text-sm font-medium leading-5 text-white truncate sm:text-base ">
                                {photoEssay[1].author}
                            </h3>
                            <p class="mt-1 text-sm leading-5 text-white truncate"></p>
                        </div>
                    </blockquote>
                 </li>
                 <li class="lg:col-span-6 col-span-3 border-r-2   p-4 hover-content border-black">
                    <blockquote class="flex image3   h-[180px] overlay items-center justify-between w-full col-span-1 p-4">
                        <div class="flex  flex-col pr-10">
                            <a href="/photo-essay/{photoEssay[2].slug}">
                            <div class="relative pl-12">
                                <h3 class="mt-2 text-sm font-cormorant  font-bold italic text-white sm:text-base lg:text-4xl">{photoEssay[2].title}</h3>
                            </div>
    
                            <h3 class="pl-12 mt-3 text-sm font-medium leading-5 text-white truncate sm:text-base ">
                                {photoEssay[2].author}
                            </h3>
                            <p class="mt-1 text-sm leading-5 text-white truncate"></p>
                            </a>
                        </div>
                    </blockquote>
                 </li>
              </ul>
          </div>
      </div>
      <div class="col-span-4 flex items-end justify-end ">
          <div id='photo-essay' class="flex-1 max-h-[700px] max-w-4xl mx-auto p-8">
            <div class="grid justify-center items-center grid-cols-2">
                <div class="h-[300px]"></div>
                <div class="h-[300px] p-8">
                    <!-- <img src="/assets/photoInset.jpg" width="500" alt="Inset"> -->
                </div>
                <div id="textbox" class="h-[380px] border-t-2 z-10 border-black border-r-2 p-12 flex justify-end items-center bg-[color:#e3d5ca]">
                    <h2 class="text-xl font-cormorant  font-black italic leading-10 tracking-tight text-left text-[color:var(--color-text)] md:text-right sm:leading-none md:text-6xl lg:text-[10rem]">Photo<br>Essays</h2>

                </div>
                <div class="h-[350px]"></div>
            </div>
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
  
