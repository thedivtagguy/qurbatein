<script>
    import { marked } from "marked";
    export let text = '';
    export let name = '';
    export let links = [];
    export let image = null;; 
</script>
<section class="bio">
    <div class="text-xl mt-8 bg-[color:var(--color-secondary)] text-white p-8">
        <h4 class="font-bold text-2xl ">About the Author</h4>
        <hr class="border-b-[1px] my-4 border-white w-full" />
        <p class="font-light">{@html marked.parse(text)}</p>
    </div>
</section>