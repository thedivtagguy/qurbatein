<nav class="relative bg-[color:#eae9e3]  mx-auto   z-50   select-none" x-data="false">
    <div class="container relative flex flex-wrap items-center justify-center  overflow-hidden font-medium  border-[color:var(--color-text)] md:overflow-visible lg:justify-center sm:px-4 md:px-2 lg:px-0">
        <div class="flex items-center p-4 justify-start w-1/4 h-full pr-4">
            <a href="/" class="inline-block ">
               <img src="/assets/csgs-logo.png" class="p-2" width="80" alt="Main Logo">
            </a>
        </div>
        <div class="top-0 left-0 items-start  h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 lg:text-base md:bg-transparent md:p-0 flex" >
            <div class="flex-col  h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
                <div class="flex flex-col items-start justify-center  space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                    <a href="/" class="inline-block  py-2 mx-0 ml-6 font-medium font-poppins text-left  md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">Home</a>
                    <a href="#_" class="inline-block  py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">About</a>
                   
                </div>
               
            </div>
        </div>
        <div  class="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100">
            <svg class="w-6 h-6 text-gray-700" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" x-cloak=""><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
            <svg class="w-6 h-6 text-gray-700" x-show="showMenu" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" x-cloak=""><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </div>
    </div>
</nav>