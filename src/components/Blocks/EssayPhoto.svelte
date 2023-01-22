<script>
    export let src;
    export let caption;
    import { base, assets } from '$app/paths';

</script>
<section class="essay-photo py-8 max-w-4xl mx-auto">
    <img src="{assets}/images/{src}" alt={caption} />
    <p class="caption text-base py-2 italic">{caption}</p>
</section>

<style>
    img {
        width: 896px;
        height: auto;
    }
</style>