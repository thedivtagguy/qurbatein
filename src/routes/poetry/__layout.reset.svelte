<script>
    import "$styles/app.css";
    import Menu from "$components/Menu.svelte";
    import Meta from "$components/Meta.svelte";
    import Footer from "$components/Footer.svelte";
    import Related from "$components/Related.svelte";
    import { page } from "$app/stores";
    import "/src/styles/tailwind.css";
    export const router = true;
    import { base, assets } from '$app/paths';
  </script>
  
  <main class="bg-[color:var(--color-background)] w-full" id="content">
    <Meta/>
   <div><Menu/></div>
    <slot />
    <Related related="poetry" number="2" current={$page.params.poem}/>
    <Footer/>
  </main>