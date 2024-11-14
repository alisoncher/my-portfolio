<h1>Meta</h1>
<p>Code Stats</p>

<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';

  let data = [];
  let commits = [];
  let longestLineLength = 0;  // Variable to store the longest line length
  let numFiles = 0;           // Variable to store the number of files
  let numDaysWorked = 0;      // Variable to store the number of days worked

  let width = 1000, height = 600;
  let margin = { top: 10, right: 10, bottom: 30, left: 20 };

  let usableArea = {
    top: margin.top,
    right: width - margin.right,
    bottom: height - margin.bottom,
    left: margin.left,
    width: width - margin.left - margin.right,
    height: height - margin.top - margin.bottom,
  };

  let xAxis, yAxis, yAxisGridlines; // Declare the gridlines element

  // Define Y scale for time of day and X scale for commit dates
  let yScale = d3.scaleLinear().domain([0, 24]).range([usableArea.bottom, usableArea.top]);
  let xScale;

  $: if (commits.length) {
    // After commits are loaded, set up the X scale based on datetime values
    xScale = d3.scaleTime()
      .domain(d3.extent(commits, (d) => d.datetime))
      .range([usableArea.left, usableArea.right])
      .nice();

    // Bind axes to xAxis and yAxis elements
    d3.select(xAxis).call(d3.axisBottom(xScale));
    d3.select(yAxis).call(
        d3.axisLeft(yScale)
            .tickFormat((d) => String(d % 24).padStart(2, '0') + ':00')
    );
    // Bind the gridlines to the yAxisGridlines element
    d3.select(yAxisGridlines)
      .call(d3.axisLeft(yScale)
        .tickSize(-usableArea.width)  // This makes the gridlines span the width of the chart
        .tickFormat('')               // Hide the tick labels, since we only want gridlines
      );
  }

  onMount(async () => {
    // Read the CSV and convert rows as necessary
    data = await d3.csv('loc.csv', (row) => ({
      ...row,
      line: +row.line,
      depth: +row.depth,
      length: +row.length,
      date: new Date(row.date + 'T00:00' + row.timezone),
      datetime: new Date(row.datetime),
    }));

    // Group the data by commit
    commits = d3.groups(data, (d) => d.commit).map(([commit, lines]) => {
      let first = lines[0];
      let { author, date, time, timezone, datetime } = first;

      let ret = {
        id: commit,
        url: 'https://github.com/vis-society/lab-7/commit/' + commit,
        author,
        date,
        time,
        timezone,
        datetime,
        hourFrac: datetime.getHours() + datetime.getMinutes() / 60,
        totalLines: lines.length,
      };

      Object.defineProperty(ret, 'lines', {
        value: lines,
        configurable: true,
        writable: true,
        enumerable: false,
      });

      return ret;
    });

    // Find the longest line length in the data
    longestLineLength = Math.max(...data.map((row) => row.length));

    // Calculate the number of unique files
    numFiles = new Set(data.map((row) => row.file)).size;

    // Calculate the number of unique days worked
    numDaysWorked = new Set(
      data.map((row) => new Date(row.datetime).toISOString().split('T')[0])
    ).size;
  });

  let hoveredIndex = -1;
  $: hoveredCommit = commits[hoveredIndex] ?? hoveredCommit ?? {};
  
</script>

<dl class="stats">
  <dt>Total LOC</dt>
  <dd>{data.length}</dd>

  <dt>Total Commits</dt>
  <dd>{commits.length}</dd>

  <dt>Longest Line Length</dt>
  <dd>{longestLineLength} characters</dd>

  <dt>Number of Files</dt>
  <dd>{numFiles}</dd>

  <dt>Number of Days Worked</dt>
  <dd>{numDaysWorked}</dd>
</dl>

<h2>Commits by Time of Day</h2>

<svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
  <!-- Gridlines -->
  <g class="gridlines" transform={`translate(${usableArea.left}, 0)`} bind:this={yAxisGridlines} />
  
  <!-- X Axis -->
  <g transform={`translate(0, ${usableArea.bottom})`} bind:this={xAxis} />
  
  <!-- Y Axis -->
  <g transform={`translate(${usableArea.left}, 0)`} bind:this={yAxis} />
  
  <!-- Scatterplot Dots -->
  <g class="dots">
    {#each commits as commit, index}
      <circle
        cx={xScale(commit.datetime)}
        cy={yScale(commit.hourFrac)}
        r="5"
        fill="steelblue"
        on:mouseenter={evt => {
            hoveredIndex = index;
            hoveredCommit = commit;
            hoveredCommit.tooltipX = evt.clientX + 10;  /* Position tooltip with a small offset */
            hoveredCommit.tooltipY = evt.clientY + 10;  /* Position tooltip with a small offset */
          }}
          on:mouseleave={() => {
            hoveredIndex = -1;
            hoveredCommit = {};  /* Hide the tooltip */
          }}
      />
    {/each}
  </g>
</svg>

<style>
  svg {
    overflow: visible;
    width: 100%;
    height: auto
  }

  /* Styling the gridlines */
  .gridlines .tick line {
    stroke: #ddd;
    stroke-opacity: 0.7;
  }

  .gridlines {
    stroke-opacity: 0.2;
  }

  .gridlines path {
    display: none;  /* Hide the axis path */
  }

  .stats {
    margin: 1em 0;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin: 0 0 1em 0;
  }

  .dots circle {
    transition: 200ms transform ease; 
    transform-origin: center;        
    transform-box: fill-box;         
  }

  .dots circle:hover {
    transform: scale(1.5); 
  }

  /* Tooltip styling */
  .tooltip {
    position: absolute;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    display: none;  /* Initially hidden, controlled by Svelte logic */
    pointer-events: none; /* Tooltip shouldn't interfere with mouse events */
    z-index: 10;
    max-width: 300px;  /* Prevents the tooltip from becoming too wide */
  }

  .info dt {
    font-weight: bold;
  }
</style>

<dl id="commit-tooltip" class="info tooltip" 
    style="display: {hoveredCommit.id ? 'block' : 'none'}; 
           top: {hoveredCommit.tooltipY}px; 
           left: {hoveredCommit.tooltipX}px;">
  <dt>Commit</dt>
  <dd>
    <a href="{ hoveredCommit.url }" target="_blank">{ hoveredCommit.id }</a>
  </dd>

  <dt>Date</dt>
  <dd>{ hoveredCommit.datetime?.toLocaleString("en", {dateStyle: "full"}) }</dd>
  
  <!-- Add: Time, author, lines edited -->
  <dt>Time</dt>
  <dd>{ hoveredCommit.time }</dd>

  <dt>Author</dt>
  <dd>{ hoveredCommit.author }</dd>

  <dt>Lines Edited</dt>
  <dd>{ hoveredCommit.totalLines }</dd>
</dl>
