<svelte:head>
  <title>Home</title>
</svelte:head>

<script>
  let pages = [
    { url: '/', title: 'Home' },
    { url: '/projects', title: 'Projects' },
    { url: '/contact', title: 'Contact' },
    { url: '/resume', title: 'Resume' },
  ];

  let currentPath = window.location.pathname;
</script>

<nav>
  {#each pages as p}
    <a href={p.url}
       class="{p.url === currentPath ? 'current' : ''}">
      {p.title}
    </a>
  {/each}
  <a href="https://github.com/alisoncher" target="_blank">GitHub</a>
</nav>

<style>
  nav {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #ccc;
  }
  
  nav a {
    padding: 10px;
    text-decoration: none;
    color: inherit;
    text-align: center;
  }

  nav a.current {
    border-bottom: 4px solid #ccc;
    font-weight: bold;
  }

  nav a:hover {
    background-color: #f0f0f0;
  }
</style>

<form id="color-scheme-form">
  <label for="color-scheme-select">Theme:</label>
      <select id="color-scheme-select" name="color-scheme">
          <option value="auto" selected>Automatic (Default)</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
      </select>
</form>


<h1>Alison Cher</h1>
<p>I'm just a girl</p>
<img src="images/alison.jpg" alt="A cloudy day in New York City" style="width: 300px; height: auto;">
