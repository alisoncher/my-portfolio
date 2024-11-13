<script>
    import * as d3 from 'd3';

    export let data = [];


    // Create the pie generator to calculate angles, with the .value() function to specify the 'value' key
    let sliceGenerator = d3.pie().value((d) => d.value);

    // Create the arc generator (no need to manually calculate angles)
    let arcGenerator = d3.arc()
        .innerRadius(0)      // Change to a positive value for a donut chart
        .outerRadius(50);    // Outer radius for the pie slices

    // Create a color scale using d3.schemeTableau10 for a set of distinct colors
    let colors = d3.scaleOrdinal(d3.schemeTableau10);

    // Reactive statement to update arcData whenever data changes
    let arcData = [];
    $: {
        arcData = sliceGenerator(data); // Recalculate arc data whenever 'data' changes
    }

    // Store the hovered slice index for opacity control
    let hoveredIndex = null;

    // Function to handle hover events
    function handleHover(index, isHovering) {
        hoveredIndex = isHovering ? index : null; // Set or clear the hovered index
    }
</script>

<style>
    /* Container for the pie chart and legend, display them side by side */
    .container {
        display: flex;
        gap: 2em;  /* Adds space between the pie chart and legend */
        align-items: center;  /* Vertically centers the items */
        flex-wrap: wrap;  /* Allows wrapping on smaller screens */
    }

    /* SVG styling for the pie chart */
    svg {
        max-width: 20em;
        overflow: visible;
        flex-shrink: 0;  /* Prevents the SVG from shrinking */
    }

    path {
  transition: 300ms;
}

    /* Flexbox for vertical alignment of text and swatch */
    .legend li {
        display: flex;
        align-items: center;
        gap: 0.5em;  /* Adds spacing between the swatch and the label */
    }

    .legend .swatch {
        width: 1em;
        height: 1em;
        background-color: var(--color);
    }

    .legend em {
        font-style: normal;
        color: #555;
    }
</style>

<div class="container">
    <svg viewBox="-50 -50 100 100" role="img" aria-labelledby="pieChartTitle">
        <title id="pieChartTitle">Pie chart representing the data distribution</title>
        <!-- Render each arc as a path element with colors assigned from the color scale -->
        {#each arcData as arc, i}
            <path
                d="{arcGenerator(arc)}"
                fill="{colors(i)}"
                on:mouseenter="{() => handleHover(i, true)}"
                on:mouseleave="{() => handleHover(i, false)}"
                style="opacity: {hoveredIndex !== null && hoveredIndex !== i ? 0.5 : 1}"
                role="img"
                aria-label="Slice for {arcData[i].data.label}, value: {arcData[i].data.value}"
                
            />
        {/each}
    </svg>

    <!-- Legend displaying data labels and corresponding color swatches -->
    <ul class="legend">
        {#each data as d, index}
            <li style="--color: {colors(index)}">
                <span class="swatch"></span>
                {d.label} <em>({d.value})</em>
            </li>
        {/each}
    </ul>
</div>
