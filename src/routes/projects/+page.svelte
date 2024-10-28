 

<script>
    import projects from '$lib/projects.json';
    import Project from '$lib/Project.svelte';
  </script>
  
  <svelte:head>
    <title>Projects</title>
  </svelte:head>
  
  <h1>Projects</h1>
  <div class="projects">
      {#each projects as p}
        <Project data={p} />  
      {/each}
 

        <h2>Project 1 : Expository Visualization</h2>
        <img src="https://vis-society.github.io/labs/2/images/empty.svg" alt="">
        <p>Designed an expository visualization to clearly communicate an idea based on a small data set.</p>
   
        <h2>Project 2 : Deceptive Visualization</h2>
        <img src="https://vis-society.github.io/labs/2/images/empty.svg" alt="">
        <p>Created two static visualizations of a selected dataset. The first visualization is designed to clearly and sincerely convey insights from the data. In contrast, the second is crafted to intentionally mislead the viewer, causing them to make incorrect inferences.</p>
    
        <h2>Illo eius consequuntur iusto.</h2>
        <img src="https://vis-society.github.io/labs/2/images/empty.svg" alt="">
        <p>Asperiores eligendi placeat delectus magni nihil deserunt quisquam soluta quo debitis voluptatum animi, obcaecati eveniet reiciendis nesciunt non recusandae maiores ab doloribus veritatis odio deleniti totam maxime consectetur. Et, dignissimos!</p>
   
        <h2>Accusantium autem tempora laboriosam?</h2>
        <img src="https://vis-society.github.io/labs/2/images/empty.svg" alt="">
        <p>Repudiandae voluptatibus, eaque dignissimos ullam nesciunt non quod cumque, itaque harum in, consectetur iste deleniti praesentium pariatur repellat recusandae possimus velit sequi unde sunt. Maxime odio natus quae repellendus provident.</p>
    
        <h2>Totam temporibus incidunt numquam?</h2>
        <img src="https://vis-society.github.io/labs/2/images/empty.svg" alt="">
        <p>Quisquam adipisci iure suscipit eveniet consequuntur, animi hic rerum obcaecati mollitia corrupti? Quidem repellat exercitationem, laudantium vero dolorum impedit! Quae quas optio eaque ipsum libero non dolore, temporibus laboriosam facilis.</p>
   
        <h2>Odit facilis voluptatem amet?</h2>
        <img src="https://vis-society.github.io/labs/2/images/empty.svg" alt="">
        <p>Excepturi ut praesentium libero dicta laboriosam recusandae asperiores harum aliquam, architecto exercitationem eligendi at, molestiae temporibus modi aliquid? Expedita quos accusamus aliquid temporibus minus incidunt atque facere esse, ducimus commodi.</p>
   
        <h2>Nemo atque tempore ipsa?</h2>
        <img src="https://vis-society.github.io/labs/2/images/empty.svg" alt="">
        <p>Harum non eaque, vitae aperiam a ipsa dolores beatae ex quisquam architecto quae consectetur hic iure dignissimos cupiditate magni error sunt. Enim magni soluta id ipsa, totam voluptatibus similique qui.</p>
    
        <h2>Necessitatibus obcaecati praesentium aut?</h2>
        <img src="https://vis-society.github.io/labs/2/images/empty.svg" alt="">
        <p>Harum vel, ut minus inventore numquam quod totam aspernatur ea at dolorem, voluptates officia? Minus nihil at molestias dolorem suscipit consequuntur amet libero vitae quisquam, necessitatibus aliquam voluptate repellat explicabo.</p>
    
        <h2>Sunt ratione voluptatem distinctio!</h2>
        <img src="https://vis-society.github.io/labs/2/images/empty.svg" alt="">
        <p>Unde, assumenda! Maiores in, deleniti nesciunt minus, mollitia tenetur eos laudantium praesentium corrupti at aliquam laboriosam eaque cumque facilis itaque aperiam numquam quaerat. Quasi qui similique quos blanditiis, dolorem molestiae?</p>
    
        <h2>Cum veniam quibusdam pariatur.</h2>
        <img src="https://vis-society.github.io/labs/2/images/empty.svg" alt="">
        <p>Rem, ab beatae! Laborum dolor atque doloremque sunt necessitatibus consequatur accusantium mollitia inventore numquam saepe labore, dicta rem aperiam perspiciatis earum omnis debitis possimus aspernatur expedita quas neque consectetur dolores!</p>
    
        <h2>Repellat similique labore porro.</h2>
        <img src="https://vis-society.github.io/labs/2/images/empty.svg" alt="">
        <p>Voluptas aperiam sit, necessitatibus ea quibusdam voluptatibus praesentium tenetur doloremque et illum fugiat ullam quis dolorem, earum voluptatum animi harum reiciendis fuga eaque vel eveniet, esse nisi inventore. Dolor, minima.</p>
</div>

<p>Here are some projects that I am currently working on:</p>
<p><strong>*** COMING SOON! ****</strong></p>
    