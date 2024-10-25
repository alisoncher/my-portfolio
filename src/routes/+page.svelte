
<svelte:head>
  <title>Home</title>
</svelte:head>

<!-- <style>
  :global(body) {
    max-width: 1300px;
    margin-inline: auto;   
    padding: 20px;  
    text-align: center;   
    background-color: Canvas;  
    color: CanvasText;
  }

  :global(nav) {
    display: flex; 
    justify-content: center; 
    margin-bottom: 40px;
  }

  :global(nav ul) {
    display: flex; 
    list-style-type: none; 
    padding: 0; 
    margin: 0;
  }

  :global(nav ul li) {
    flex: 1; 
  }

  :global(nav a) {
    display: block; 
    text-align: center; 
    padding: 10px; 
    text-decoration: none;
    color: inherit;
  }

  :global(nav a.current) {
    border-bottom: 0.4em solid oklch(80% 3% 200);
    padding-bottom: 6px;
  }

  :global(nav a:hover) {
    border-bottom: 0.4em solid var(--color-accent); 
    padding-bottom: 6px;
    background-color: color-mix(in oklch, var(--color-accent), canvas 85%);
  }

  body {
        background-color: Canvas;  
        color: CanvasText;         
        max-width: 1300px;
        margin-inline: auto;
        padding: 20px;
        text-align: center;
        }

        #color-scheme-form {
            position: absolute; 
            top: 10px; 
            right: 10px; 
        }

        #color-scheme-select {
            margin: 0; 
        }
</style> -->


<nav>

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
<p>I'm just a girl</p>
<img src="images/alison.jpg" alt="A cloudy day in New York City" style="width: 300px; height: auto;">
