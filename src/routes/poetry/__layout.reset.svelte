<script>
    import "$styles/app.css";
    import Menu from "$components/Menu.svelte";
    import Meta from "$components/Meta.svelte";
    import Footer from "$components/Footer.svelte";
    import "/src/styles/tailwind.css";
    export const router = true;
  
  </script>
  
  <main class="bg-[color:var(--color-background)] px-6 max-w-5xl mx-auto" id="content">
    <Meta/>
   <Menu/>
    <slot />
    <Footer/>
  </main>