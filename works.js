const works = [
    {
        title: "pygif",
        image: "assets/images/works/bike.gif",
        keywords: ["python", "pixel masking"],
        link: "https://play.teo.fyi/pygif",
    },
    {
        title: "break it",
        image: "assets/images/works/impermanence.gif",
        keywords: ["html / js / css", "tool"],
        link: "https://play.teo.fyi/impermanence",
    },
    {
        title: "riso",
        image: "assets/images/works/boys.gif",
        keywords: ["p5.js", "generative"],
        link: "https://play.teo.fyi/riso",
    },
    {
        title: "sobu",
        image: "assets/images/works/sobu.gif",
        keywords: ["p5.js", "world", "figma / photoshop"],
        link: "https://play.teo.fyi/sobu",
    },
    {
        title: "liquids",
        image: "assets/images/works/liquids.gif",
        keywords: ["p5.js", "data driven"],
        link: "https://play.teo.fyi/liquids",
    },
    {
        title: "jellyfish",
        image: "assets/images/works/jellies.gif",
        keywords: ["p5.js", "world"],
        link: "https://play.teo.fyi/jellyfish",
    },
    {
        title: "cipher",
        image: "assets/images/works/cipher.gif",
        keywords: ["html / js / css", "tool"],
        link: "https://play.teo.fyi/cipher",
    },
    {
        title: "willump",
        image: "assets/images/works/willump.gif",
        keywords: ["p5.js", "world"],
        link: "https://play.teo.fyi/willump",
    },
    {
        title: "coins",
        image: "assets/images/works/coins.gif",
        keywords: ["p5.js", "data driven"],
        link: "https://play.teo.fyi/coins",
    },
    {
        title: "routine",
        image: "assets/images/works/routine.gif",
        keywords: ["html / js / css", "illustrator"],
        link: "https://play.teo.fyi/routine",
    },
    {
        title: "face",
        image: "assets/images/works/face.gif",
        keywords: ["p5.js", "world"],
        link: "https://play.teo.fyi/face",
    },
    {
        title: "ps2 nostalgia",
        image: "assets/images/works/ps2.png",
        keywords: ["svelte", "generative"],
        link: "https://ps2nostalgia.win",
    },
];

// Rendering function
function renderWorks() {
    const projectsList = document.getElementById('works');

    works.forEach(project => {
        const li = document.createElement('li');
        li.className = 'work-item';

        // Generate random rotation between -5 and 5 degrees
        // const randomRotation = -Math.random() * 10 + Math.random() * 10;
        const randomRotation = 0;

        li.innerHTML = `
        <a href="${project.link}">
            <h3 style="transform: rotate(${randomRotation}deg)">${project.title}</h3>

            <img src="${project.image}" alt="${project.title}" class="work-image">
            <div class="keywords">
                ${project.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('')}
            </div>
        </a>
        `;

        projectsList.appendChild(li);
    });
} 