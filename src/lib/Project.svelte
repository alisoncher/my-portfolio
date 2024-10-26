<script>
    export let data = {}; // Define the data prop
  </script>
  
  <article>
    <h2>{data.title}</h2> <!-- Use data.title -->
    <img src={data.image} alt={data.title}> <!-- Use data.image -->
    <p>{data.description}</p> <!-- Use data.description -->
  </article>