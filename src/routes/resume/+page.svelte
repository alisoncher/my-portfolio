<svelte:head>
  <title>Resume</title>
</svelte:head>
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/resume">Resume</a></li>
        <li><a href="https://github.com/alisoncher" target="_blank">GitHub</a></li>
    </ul>

    <form id="color-scheme-form">
      <label for="color-scheme-select">Theme:</label>
      <select id="color-scheme-select" name="color-scheme">
        <option value="auto" selected>Automatic (Default)</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </form>
  </nav>
  
  <h1>Alison Cher</h1>
  <h1 class="email">Los Angeles, California</h1>
  <h1 class="email">email@gmail.com</h1>
  
  <section>
    <h2>Experience</h2>
    <hr class="section-line">
    <ul>
      <li>
        <p>Data Analyst</p>
        <time>October 2022-Present</time>
        <p>Working in data management for clinical trials related to Alzheimer's disease.</p>
      </li>
      <li>
        <p>Data Analyst Intern</p>
        <time>November 2021-August 2022</time>
        <p>Analyzed hospital data to investigate the link between COVID-19 and children with cystic fibrosis.</p>
      </li>
    </ul>
  </section>
  
  <section>
    <h2>Education</h2>
    <hr class="section-line">
    <ul>
      <li>CSUF: Bachelor of Science, Biology</li>
      <li>UCSD: Master of Data Science</li>
    </ul>
  </section>
  
  <section>
    <h2>Skills</h2>
    <hr class="section-line">
    <ul>
      <li>Python</li>
      <li>R</li>
      <li>SQL</li>
      <li>Microsoft Office</li>
    </ul>
  </section>
  