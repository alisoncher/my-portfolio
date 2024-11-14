console.log('IT’S ALIVE!');

document.addEventListener("DOMContentLoaded", () => {
document.body.insertAdjacentHTML(
    'afterbegin',
    `
    <label class="color-scheme" style="position: absolute; top: 1rem; right: 1rem; font-size: 80%;">
        Theme:
        <select id="color-scheme-selector">
            <option value="light dark">Automatic</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    </label>
    `
);


 // Get the select element and the root element (HTML)
//  const colorSchemeSelect = document.getElementById('color-scheme-select');
//  const root = document.documentElement;

const select = document.querySelector("#color-scheme-selector")
 
 
 // Helper function to set the color scheme
 function setColorScheme(scheme) {
    //  if (scheme === 'auto') {
    //      root.style.colorScheme = 'light dark'; // Use OS preference
    //  } else {
    //      root.style.colorScheme = scheme; // 'light' or 'dark'
    // }

    document.documentElement.style.setProperty("color-scheme", scheme); 
    localStorage.colorScheme=scheme;
 }

 if ("colorScheme" in localStorage) {
    select.value=localStorage.colorScheme;
    setColorScheme(localStorage.colorScheme);
 }

 select.addEventListener("input", event => {
    const scheme = event.target.value;
    setColorScheme(scheme);
 });
 
 // Set the initial color scheme to 'auto'
//  setColorScheme('auto');
 
 
 
//  function applyColorScheme(scheme) {
//      document.documentElement.style.colorScheme = scheme;
//  }
 
//  // Event listener for dropdown changes
//  colorSchemeSelect.addEventListener("change", (event) => {
//      const selectedScheme = event.target.value;
//      localStorage.colorScheme = selectedScheme; // Save to localStorage
//      applyColorScheme(selectedScheme); // Apply the selected color scheme
//  });
 
//  // Read and apply the saved color scheme on page load
//  window.addEventListener("DOMContentLoaded", () => {
//      const savedScheme = localStorage.colorScheme || "auto"; // Default to 'auto'
//      applyColorScheme(savedScheme); // Apply the saved color scheme
//      colorSchemeSelect.value = savedScheme; // Update the dropdown value
//  });
 
 
//add nav menu//
let pages = [
    { url: '.', title: 'Home' },
    { url: 'projects', title: 'Projects' },
    { url: 'contact', title: 'Contact' },
    { url: 'resume', title: 'Resume' },
    { url: 'meta', title: 'Meta' },
    { url: 'https://github.com/alisoncher', title: 'GitHub' } // External link
];

// Create a new <nav> element and prepend it to the body
let nav = document.createElement('nav');
document.body.prepend(nav);

// Check if we are on the home page by checking for the 'home' class on the root element
const ARE_WE_HOME = document.documentElement.classList.contains('home');

// Loop over the pages array to create <a> elements for each page
for (let p of pages) {
    let url = p.url;
    let title = p.title;
    // let isExternal = p.external || false; 

    // Modify the URL if we are not on the home page
    // url = !ARE_WE_HOME && !isExternal && !url.startsWith('http') ? '../' + url : url;

    // Create a new <a> element
    let a = document.createElement('a');
    a.href = url;
    a.textContent = title;
    nav.append(a);

    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add('current');
      }

    // Add current class if this is the current page
    a.classList.toggle('current', a.host === location.host && a.pathname === location.pathname);

}

})


let profileData = fetch('https://api.github.com/users/alisoncher');

let margin = { top: 10, right: 10, bottom: 30, left: 20 };

let usableArea = {
    top: margin.top,
    right: width - margin.right,
    bottom: height - margin.bottom,
    left: margin.left,
  };
  usableArea.width = usableArea.right - usableArea.left;
  usableArea.height = usableArea.bottom - usableArea.top;

let xAxis, yAxis;
$: {
    d3.select(xAxis).call(d3.axisBottom(xScale));
    d3.select(yAxis).call(d3.axisLeft(yScale));
  }
