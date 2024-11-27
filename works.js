const works = [
    {
        title: "bathwall",
        image: "assets/images/works/bathwall.png",
        link: "https://bathwall.co",
        description: ["An online guest book for bars.", "Revisiting this soon."],
        keywords: ["fullstack development", "design", "guerilla marketing"],

    },
    {
        title: "ps2 nostalgia",
        image: "assets/images/works/ps2.png",
        link: "https://ps2nostalgia.win",
        description: ["A generative tool that turns images into nostalgic playstation 2 graphics.", "Special thanks to my friend Teddy."],
        keywords: ["fullstack development", "design", "guerilla marketing"],
    },
    {
        title: "break it",
        image: "assets/images/works/impermanence.gif",
        link: "https://play.teo.fyi/impermanence",
        description: ["An interactive reader with selected excerpts on nature and technology."],
        keywords: ["web development", "design"],
    },
    {
        title: "pygif",
        image: "assets/images/works/bike.gif",
        link: "https://play.teo.fyi/pygif",
        description: ["An image segmentation script that converts videos to pixelated GIFs."],
        keywords: ["script", "pixel masking"],
    },
    {
        title: "riso",
        image: "assets/images/works/boys.gif",
        link: "https://play.teo.fyi/riso",
        description: ["An image slideshow script made using the p5.riso library."],
        keywords: ["web development", "sketch", "pixel masking"],
    },
    {
        title: "coins",
        image: "assets/images/works/coins.gif",
        link: "https://play.teo.fyi/coins",
        description: ["A clustering algorithm to iteratively create and visualize two separate populations.", "Plan is to use this to visualize tweets on polarizing topics on X."],
        keywords: ["web development", "sketch", "pixel masking"],
    },
    {
        title: "sobu",
        image: "assets/images/works/sobu.gif",
        link: "https://sobu.teo.fyi",
        description: ["A browser game to commemorate my move in NYC in July 2024."],
        keywords: ["web development", "design", "asset creation"],
    },
    {
        title: "drinks",
        image: "assets/images/works/liquids.gif",
        link: "https://play.teo.fyi/liquids",
        description: ["A data profile of the drinks I consumed during the week of October 11-17, 2024."],
        keywords: ["web development", "sketch", "data driven"],
    },
    {
        title: "jellyfish",
        image: "assets/images/works/jellies.gif",
        link: "https://play.teo.fyi/jellyfish",
        description: ["An animated wallpaper.", "Fallout from drinks -- thought the circles layered on top of each other looked like jellyfish."],
        keywords: ["web development", "sketch", "data driven"],
    },
    {
        title: "cipher",
        image: "assets/images/works/cipher.gif",
        keywords: ["html / js / css", "tool"],
        link: "https://play.teo.fyi/cipher",
        description: ["A tool to create cipher encryption and decryption animated text.", "I think this could be used on a fun secret sharing website."],
        keywords: ["web development"],
    },
    {
        title: "willump",
        image: "assets/images/works/willump.gif",
        keywords: ["p5.js", "world"],
        link: "https://play.teo.fyi/willump",
        description: ["Part rabbit, part dogo, part human.", "Willump was made fully out of primitive shapes on p5.js."],
        keywords: ["web development", "sketch"],
    },
    {
        title: "routine",
        image: "assets/images/works/routine.gif",
        keywords: ["html / js / css", "illustrator"],
        link: "https://play.teo.fyi/routine",
        description: ["Illustrator text effect and css animation exercise."],
        keywords: ["sketch"],
    },
    {
        title: "face",
        image: "assets/images/works/face.gif",
        keywords: ["p5.js", "world"],
        link: "https://play.teo.fyi/face",
        description: ["A game I suppose ? Not exactly sure to be honest."],
        keywords: ["sketch"],
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
            
            <div class="blurb">
                <div class="description">
                    ${project.description && project.description.map(keyword => `<span class="keyword">${keyword}</span>`).join("")}
                </div>
                <div class="keywords">
                    ${project.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('')}
                </div>
            </div>
        </a>
        `;

        projectsList.appendChild(li);
    });
} 