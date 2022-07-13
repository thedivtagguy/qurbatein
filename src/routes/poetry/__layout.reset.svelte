<script>
    import "$styles/app.css";
    import Menu from "$components/Menu.svelte";
    import Meta from "$components/Meta.svelte";
    import Footer from "$components/Footer.svelte";
    import Related from "$components/Related.svelte";
    import "/src/styles/tailwind.css";
    export const router = true;
  
  </script>
  
  <main class="bg-[color:var(--color-background)] px-6 w-full" id="content">
    <Meta/>
   <div class="mx-auto"><Menu/></div>
    <slot />
    <Related related="poetry"/>
    <Footer/>
  </main>