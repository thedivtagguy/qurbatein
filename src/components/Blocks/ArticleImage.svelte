<script>
    export let src;
    export let caption = '';
    import { base, assets } from '$app/paths';


    if (!src) {
        throw new Error(
            '"src" prop must be defined as a string'
        );
    }
</script>
<!--  -->
<section class="article-image py-8">
        <img src="{assets}/images/{src}" alt={caption} />
        <p class="text-left text-sm italic pt-6">{caption}</p>
</section>