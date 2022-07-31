<script>
    import "$styles/app.css";
    import Menu from "$components/Menu.svelte";
    import Meta from "$components/Meta.svelte";
    import Footer from "$components/Footer.svelte";
    import Related from "$components/Related.svelte";
    import { page } from '$app/stores';
    import "/src/styles/tailwind.css";
    export const router = true;
    console.log($page.params);
  </script>
      <Meta/>
      <Menu/>
  <main class="bg-[color:var(--color-background)] max-w-5xl mx-auto" id="content">
    <slot />
    <Related number="2" related="articles" current={$page.params.article} />
    <Footer/>
  </main>