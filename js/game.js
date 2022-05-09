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
    document.getElementsByTagName("img")[0].setAttribute("src",`./images/${gameInfo["name"]}Banner.png`);
    document.getElementsByTagName("h1")[0].textContent = `Welcome to ${gameInfo["name"].substring(0,1).toUpperCase()+gameInfo["name"].substring(1,gameInfo["name"].length)}`;
    document.getElementsByTagName("p")[0].textContent = gameInfo["description"];
    document.getElementsByTagName("p")[1].textContent = `Release Progress: ${gameInfo["progress"]}`;
    const galleryDiv = document.getElementsByTagName("div")[0];
    for(let i=1; i<=3; i++) {
        const image = document.createElement("img");
        image.setAttribute("alt",`Screenshot ${i}`);
        image.setAttribute("src",`./images/${gameInfo["name"] + i}.png`);
        galleryDiv.appendChild(image);
    }
}

generatePage();