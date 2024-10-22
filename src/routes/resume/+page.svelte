<svelte:head>
  <title>Resume</title>
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
<h1 class="email">Los Angeles, California</h1>
<h1 class="email">email@gmail.com</h1>

<section>
<h2>Experience</h2>
<hr class="section-line">
<p>Data Analyst</p>
<time>October 2022-Present</time>

<li>Working in data management for clinical trials related to Alzheimer's disease.</li>


<p>Data Analyst Inten</p>
<time>November 2021-August 2022</time>
<li>Analyzed hospital data to investigate the link between COVID-19 and children with cystic fibrosis.</li>

</section>

<section>
<h2>Education</h2>
<hr class="section-line">
<p>CSUF</p>
<li>Bachelor of Science, Biology</li>
<p>UCSD</p>
<li>Master of Data Science</li>

</section>

<section>
<h2>Skills</h2>
<hr class="section-line">
<li>Python, R, SQL, Microsoft Office</li>
</section>

