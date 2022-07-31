<script>
     import { marked } from 'marked';
     export let text;
     export let breaks;
    if (!text)
        throw new Error(
        '"text" prop must be defined as a string'
        );

    // Go through all text, replace \n with <br>
    // if it is \r\n\r\n\r\n, replace with a <br><br> and newline
    text = text.replace(/\r\n\r\n\r\n/g, "<br><br>");
    text = text.replace(/\n/g, "<br>");
    // If there are numbers like [3], replace them with <sup>3</sup>
    text = text.replace(/\[(\d+)\]/g, "<sup>$1</sup>");
    // If there are any numbers at the end of a sentence, make them <sup>3</sup>
    text = text.replace(/^\d+/g, "<sup>$1</sup>");

</script>

<section class="body-text">
    {@html marked(text)}
  </section>
