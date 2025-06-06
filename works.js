const works = [
    {
        title: "bathwall",
        image: "assets/images/works/bathwall.png",
        link: "https://bathwall.co",
        description: ["A guest book for cafes and bars."],
        keywords: ["fullstack"],
    },
    {
        title: "secrets are best kept",
        image: "assets/images/works/cipher.gif",
        keywords: ["html / js / css", "tool"],
        link: "https://play.teo.fyi/cipher",
        description: ["A tool to create cipher encryption and decryption animated text.", "I think this could be used on a fun secret sharing website."],
        keywords: ["web"],
    },
    {
        title: "friends on riso",
        image: "assets/images/works/boys.gif",
        link: "https://play.teo.fyi/riso",
        description: ["An image slideshow script made using the p5.riso library."],
        keywords: ["pixel mask"],
    },
    {
        title: "ice break mints",
        image: "assets/images/works/impermanence.gif",
        link: "https://play.teo.fyi/impermanence",
        description: ["An interactive reader."],
        keywords: ["web"],
    },
    {
        title: "byjohns be byjohns",
        image: "assets/images/works/bike.gif",
        link: "https://play.teo.fyi/pygif",
        description: ["A script that converts video to dithered gif. Inspired by the art of John Provencher."],
        keywords: ["script", "pixel mask"],
    },
    {
        title: "ps2 nostalgia",
        image: "assets/images/works/ps2.png",
        link: "https://ps2nostalgia.win",
        description: ["While trying to figure out how to hop on to the playstation graphics trend that was floating around, I built a tool that let people do it.", "Special thanks to my friend Teddy."],
        keywords: ["fullstack"],
    },
    {
        title: "populations",
        image: "assets/images/works/coins.gif",
        link: "https://play.teo.fyi/coins",
        description: ["A clustering algorithm to iteratively create and visualize two separate populations.", "Plan is to use this to visualize tweets on polarizing topics on X."],
        keywords: ["web", "pixel mask"],
    },
    {
        title: "internet pip",
        image: "assets/images/works/pip.gif",
        link: "https://pip.teo.fyi",
        description: ["A web exploration experiment."],
        keywords: ["web"],
    },
    {
        title: "sobu moving co",
        image: "assets/images/works/sobu.gif",
        link: "https://sobu.teo.fyi",
        description: ["A browser game to commemorate my move in NYC in July 2024."],
        keywords: ["web", "design"],
    },
    {
        title: "sometimes ... ",
        image: "assets/images/works/face.gif",
        keywords: ["p5.js", "world"],
        link: "https://play.teo.fyi/face",
        description: ["A game I suppose ? Not exactly sure to be honest."],
        keywords: ["web"],
    },
];

// Update this function to only return keywords that appear multiple times
function getUniqueKeywords() {
    const keywordCount = {};

    // Count occurrences of each keyword
    works.forEach(work => {
        work.keywords.forEach(keyword => {
            keywordCount[keyword] = (keywordCount[keyword] || 0) + 1;
        });
    });

    // Filter to only keep keywords that appear more than once
    return Object.entries(keywordCount)
        .filter(([_, count]) => count > 1)
        .map(([keyword, _]) => keyword).sort();
}

// Add this function to render radio buttons
function renderKeywordFilters() {
    const filterContainer = document.getElementById('keyword-filters');
    const keywords = getUniqueKeywords();

    // Add "all" option
    filterContainer.innerHTML = `
        <label>
            <input type="radio" name="keyword-filter" value="all" checked>
            all
        </label>
    `;

    // Add other keyword options
    keywords.forEach(keyword => {
        filterContainer.innerHTML += `
            <label>
                <input type="radio" name="keyword-filter" value="${keyword}">
                ${keyword}
            </label>
        `;
    });

    // Add event listener for filter changes
    filterContainer.addEventListener('change', (e) => {
        const selectedKeyword = e.target.value;
        renderWorks(selectedKeyword);
    });
}

// Modify the rendering function to accept a filter
function renderWorks(filter = 'all') {
    const projectsList = document.getElementById('works');
    projectsList.innerHTML = ''; // Clear existing content

    const filteredWorks = filter === 'all'
        ? works
        : works.filter(project => project.keywords.includes(filter));

    filteredWorks.forEach(project => {
        const li = document.createElement('li');
        li.className = 'work-item';

        li.innerHTML = `
        <a href="${project.link}">
            <h3>${project.title}</h3>

            <img src="${project.image}" alt="${project.title}" class="work-image">
            
            <div class="blurb">
                <div class="description">
                    ${project.description && project.description.map(keyword => `<span class="keyword">${keyword}</span>`).join("")}
                </div>
                
            </div>
        </a>
        `;

        // <div class="keywords">
        //     ${project.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('')}
        // </div>

        projectsList.appendChild(li);
    });
}

// Modify the initialization to create the filters container
document.addEventListener('DOMContentLoaded', () => {
    // Create and insert the filters container
    const worksContainer = document.getElementById('works').parentElement;
    const filtersDiv = document.createElement('div');
    filtersDiv.id = 'keyword-filters';
    worksContainer.insertBefore(filtersDiv, document.getElementById('works'));

    // Initialize filters and works
    renderKeywordFilters();
    renderWorks('all');
}); 