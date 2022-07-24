<script>
    export let text;
     
    if (!text) {
        throw new Error(
            '"text" prop must be defined as a string'
        );
    }
</script>
<section class="pullquote border-t-2 border-gray-200 my-8 py-6 border-b-2">
   <p class="text-5xl italic font-cormorant font-bold text-left ">
        {text}
   </p>
</section>