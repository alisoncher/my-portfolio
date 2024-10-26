<svelte:head>
  <title>Contact</title>
</svelte:head>


<!-- <nav> -->
    <!-- <ul> -->

        <!-- <li><a href="../index.html">Home</a></li>
        <li><a href="../projects/index.html">Projects</a></li>
        <li><a href="../contact/index.html">Contact</a></li>
        <li><a href="../resume/index.html">Resume</a></li>
        <li><a href="https://github.com/alisoncher" target="_blank">GitHub</a></li> -->

        <!-- <li><a href="/Users/alisoncher/Documents/GitHub/portfolio/index.html">Home</a></li> 
        <li><a href="/Users/alisoncher/Documents/GitHub/portfolio/projects/index.html">Projects</a></li> 
        <li><a href="index.html">Contact</a></li> 
        <li><a href="/Users/alisoncher/Documents/GitHub/portfolio/resume/index.html">Resume</a></li>
        <li><a href="https://github.com/alisoncher" target="_blank">GitHub</a></li>  -->


    <!-- </ul> -->

    <!-- <form id="color-scheme-form">
        <label for="color-scheme-select">Theme:</label>
            <select id="color-scheme-select" name="color-scheme">
                <option value="auto" selected>Automatic (Default)</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
    </form> -->
<!-- </nav>  -->


<h1>Contact</h1>
<div class = "contact">
<form id="contact" action="mailto:your-email@example.com" method="GET" enctype="text/plain">
  
    <label for = "subject"> Subject: </label>
    <input type="text" id name="subject" required><br><br>

    <label for = "body"> Body:</label>
    <textarea id="body" name="body" required></textarea>

    <button type = "submit">Send</button>
</form>
</div>