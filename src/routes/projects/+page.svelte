<script>
  import projects from '$lib/projects.json';
  import Project from '$lib/Project.svelte';
  import Pie from '$lib/Pie.svelte';
  import * as d3 from 'd3';

  let query = '';
  
  let filteredProjects;
  $: filteredProjects = projects.filter((project) => {
    // Convert project values to a single string and perform a case-insensitive search
    let values = Object.values(project).join('\n').toLowerCase();
    return values.includes(query.toLowerCase());
  });

  // This block will update reactively when filteredProjects changes
  let pieData;
  $: {
    // Calculate rolledData based on filteredProjects
    let rolledData = d3.rollups(
      filteredProjects,
      (v) => v.length,
      (d) => d.year,
    );

    // Map rolledData to the desired pieData format
    pieData = rolledData.map(([year, count]) => {
      return { value: count, label: year };
    });
  }
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<h1>Projects</h1>

<input
  type="search"
  bind:value="{query}"
  aria-label="Search projects"
  placeholder="🔍 Search projects…"
/>

<!-- Pass the data to the Pie component -->
<Pie data="{pieData}" />

<div class="projects">
  {#each filteredProjects as p}
    <Project data={p} />
  {/each}
</div>
