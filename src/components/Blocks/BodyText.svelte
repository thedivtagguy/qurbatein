<script>
     import { marked } from 'marked';
     export let text;

    if (!text)
        throw new Error(
        '"text" prop must be defined as a string'
        );

    // Go through all text, replace \n with <br>
    // if it is \r\n\r\n\r\n, replace with a <br><br>
    text = text.replace(/\r\n\r\n\r\n/g, "<br><br>");
    text = text.replace(/\n/g, "<br>");
</script>

<section class="body-text">
    {@html marked.parse(text)}
  </section>