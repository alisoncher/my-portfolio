<svelte:head>
  <title>Contact</title>
</svelte:head>
<nav>
    <ul>

        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/resume">Resume</a></li>
        <li><a href="https://github.com/alisoncher" target="_blank">GitHub</a></li>

        <!-- <li><a href="/Users/alisoncher/Documents/GitHub/portfolio/index.html">Home</a></li> 
        <li><a href="/Users/alisoncher/Documents/GitHub/portfolio/projects/index.html">Projects</a></li> 
        <li><a href="index.html">Contact</a></li> 
        <li><a href="/Users/alisoncher/Documents/GitHub/portfolio/resume/index.html">Resume</a></li>
        <li><a href="https://github.com/alisoncher" target="_blank">GitHub</a></li>  -->


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
<h1>Contact</h1>
<form action="mailto:your-email@example.com" method="POST" enctype="text/plain">
  
    <label> Your Email:</label>
    <input type="email" name="email" required><br><br>

    <label> Subject:</label>
    <input name="subject" required>

    <label> Message:</label>
    <textarea name="body" required></textarea>

    <button>Send</button>
</form>
