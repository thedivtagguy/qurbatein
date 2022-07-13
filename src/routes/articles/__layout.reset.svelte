<script>
    import "$styles/app.css";
    import Menu from "$components/Menu.svelte";
    import "/src/styles/tailwind.css";
    export const router = true;
  
  </script>
  
  <main class="bg-[color:var(--color-background)]" id="content">
   <Menu/>
    <slot />
  </main>