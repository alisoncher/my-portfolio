

<script>
  import projects from '$lib/projects.json';
  import Project from '$lib/Project.svelte';
  // export let hLevel = 2;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>


 
<h1>Alison Cher</h1>
<p>I'm just a girl</p>
<img src="images/alison.jpg" alt="A cloudy day in New York City" style="width: 300px; height: auto;">
<h2> latest projects </h2>
<div class= "projects highlights">
  {#each projects.slice (0,3) as p}
  <Project data = {p} hLevel = {3}/>
  {/each}
</div>