//Object that stores all of the information for the auto-generated page
class GamePage {
    constructor(name, description, progress) {
        this.name = name;
        this.description = description;
        this.progress = progress;
    }
}

//Map that holds all of the information for all 3 game page
const gamesList = new Map([
    ["voidcage",new GamePage("voidcage",`Play as a lone crewman on the the interstellar transport ship, the VOIDCAGE, which is on route to transport a collection of alien lifeforms from across the galaxy. As a mysterious breach rocks the ship, you will have to struggle to survive and find a way off the ship as hostile creatures take over and the VOIDCAGE begins to collapse. Arm yourself with scattered tools from the crew and learn to conquer the intergalactic food chain before you're consumed, either by the aliens, or the void of space.`,"Out Now!")],
    ["13",""],
    ["hylophobia",""]
]);

//Function that generates all of the elements for the page
const generatePage = () => {
    const gameInfo = gamesList.get(document.title.toLowerCase());
    
    //Generates the banner for the page
    const banner = document.createElement("img");
    banner.setAttribute("src",`./images/${gameInfo["name"]}Banner.png`);
    document.body.appendChild(banner);

    //Generates the game title and description
    const descriptionSection = document.createElement("section");
    const title = document.createElement("h1");
    title.textContent = `Welcome to ${gameInfo["name"].substring(0,1).toUpperCase()+gameInfo["name"].substring(1,gameInfo["name"].length)}`;
    const description = document.createElement("p");
    description.textContent = gameInfo["description"];
    descriptionSection.appendChild(title);
    descriptionSection.appendChild(description);
    document.body.appendChild(descriptionSection);

    //Generates the release progress
    const progress = document.createElement("p");
    progress.textContent = `Release Progress: ${gameInfo["progress"]}`;
    document.body.appendChild(progress);

    //Generates the gallery for the page
    const gallerySection = document.createElement("section");
    const galleryTitle = document.createElement("h1");
    galleryTitle.textContent = "Gallery";
    gallerySection.appendChild(galleryTitle);
    const galleryDiv = document.createElement("div");
    for(let i=1; i<=3; i++) {
        const image = document.createElement("img");
        image.setAttribute("alt",`Screenshot ${i}`);
        image.setAttribute("src",`./images/${gameInfo["name"] + i}.png`);
        galleryDiv.appendChild(image);
    }
    gallerySection.appendChild(galleryDiv);
    document.body.appendChild(gallerySection);
}

generatePage();