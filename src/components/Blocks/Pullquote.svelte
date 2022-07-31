<script>
    export let text;
    export let attribution = '';
    if (!text) {
        throw new Error(
            '"text" prop must be defined as a string'
        );
    }
</script>
<section class="relative pullquote border-t-2 max-w-xl mx-auto border-gray-200 my-8 py-6 border-b-2">
   <p class="text-3xl italic font-cormorant font-bold text-left ">
        {@html text}
   </p>
</section>
<p class="text-right  text-md lg:w-1/3 font-cormorant font-bold  ml-auto lg:mr-40 ">
    {attribution}
</p>