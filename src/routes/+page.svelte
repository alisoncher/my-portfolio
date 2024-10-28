

<script>
  import projects from '$lib/projects.json';
  import Project from '$lib/Project.svelte';
  const url = "https://api.github.com/users/alisoncher";
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



<section>
  <h2>GitHub Profile Stats</h2>

  {#await fetch(url)}
    <p>Loading...</p>
  {:then response}
    {#await response.json()}
      <p>Decoding...</p>
    {:then data}
      <dl>
        <dt>Public Repositories</dt>
        <dd>{data.public_repos}</dd>

        <dt>Followers</dt>
        <dd>{data.followers}</dd>

        <dt>Following</dt>
        <dd>{data.following}</dd>

        <dt>Account Created</dt>
        <dd>{new Date(data.created_at).toLocaleDateString()}</dd>
      </dl>
    {:catch error}
      <p class="error">Something went wrong: {error.message}</p>
    {/await}
  {:catch error}
    <p class="error">Something went wrong: {error.message}</p>
  {/await}
</section>

