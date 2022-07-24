<script>
    export let src;
    export let caption;
</script>
<section class="essay-photo py-8 max-w-4xl mx-auto">
    <img src="/images/{src}" alt={caption} />
    <p class="caption text-base py-2 italic">{caption}</p>
</section>