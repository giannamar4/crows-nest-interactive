//Object that stores all of the information for the auto-generated page
class GamePage {
    constructor(name, description, progress, hasImages) {
        this.name = name;
        this.description = description;
        this.progress = progress;
        this.hasImages = hasImages;
    }
}

//Map that holds all of the information for all 3 game page
const gamesList = new Map([
    ["voidcage",new GamePage("voidcage",`Play as a lone crewman on the the interstellar transport ship, the VOIDCAGE, which is on route to transport a collection of alien lifeforms from across the galaxy. As a mysterious breach rocks the ship, you will have to struggle to survive and find a way off the ship as hostile creatures take over and the VOIDCAGE begins to collapse. Arm yourself with scattered tools from the crew and learn to conquer the intergalactic food chain before you're consumed, either by the aliens, or the void of space.`,"Out Now!",true)],
    ["13",new GamePage("13",`After a series of crop failures and livestock deaths with strange noises in the night, the family living on their farm must investigate to find the source of the plague on their land. During the day, search around the farm and work with authorities to discover the truth behind the supernatural events. Once night comes around however, be prepared to run.`,"In Development",false)],
    ["hylophobia",new GamePage("hylophobia",`A hunting party entering the forest slowly dissappears one by one during a trip. A mysterious force stalks the hunters aiming to pick them off to the last man. As a hunter, locate your lost partners, scavenge for supplies, and set traps to catch whatever monster is prowling the forest before it hunts you.`,"In Development",false)]
]);

//Creates a "section" element which is used by the loading script to reveal pieces of the page as the user scrolls
const makeSection = (elements) => {
    const loadSection = document.createElement("section");
    for(let i of elements) loadSection.appendChild(i);
    document.body.appendChild(loadSection);
}

//Function that generates all of the elements for the page
const generatePage = () => {
    const gameInfo = gamesList.get(document.title.toLowerCase());
    
    //Generates the banner and the background for the page
    const banner = document.createElement("img");
    banner.setAttribute("src",`./images/${gameInfo["name"]}Banner.png`);
    makeSection([banner]);
    document.getElementsByClassName("gameBody")[0].style.backgroundImage = `url(./images/${gameInfo["name"]}Background.webp)`;

    //Generates the game title and description
    const descriptionSection = document.createElement("div");
    const title = document.createElement("h1");
    title.textContent = `Welcome to ${gameInfo["name"].substring(0,1).toUpperCase()+gameInfo["name"].substring(1,gameInfo["name"].length)}`;
    const description = document.createElement("p");
    description.textContent = gameInfo["description"];
    descriptionSection.appendChild(title);
    descriptionSection.appendChild(description);
    makeSection([descriptionSection]);

    //Generates the release progress
    const progress = document.createElement("p");
    progress.textContent = `Release Progress: ${gameInfo["progress"]}`;
    makeSection([progress]);

    //Generates the gallery for the page
    const gallerySection = document.createElement("div");
    const galleryTitle = document.createElement("h1");
    galleryTitle.textContent = "Gallery";
    gallerySection.appendChild(galleryTitle);
    const galleryDiv = document.createElement("div");
    if(gameInfo["hasImages"]) {
        for(let i=1; i<=3; i++) {
            const image = document.createElement("img");
            image.setAttribute("alt",`Screenshot ${i}`);
            image.setAttribute("src",`./images/${gameInfo["name"] + i}.png`);
            galleryDiv.appendChild(image);
        }
        gallerySection.appendChild(galleryDiv);
               
    }else{
        const placeholderText = document.createElement("p");
        placeholderText.textContent = "No images yet. Come back later!";
        gallerySection.appendChild(placeholderText);
    }
    makeSection([gallerySection]);

    //Generates the footer
    document.body.appendChild(document.createElement("footer"));
    document.getElementsByTagName("footer")[0].classList.add("footer");
    document.getElementsByTagName("footer")[0].innerHTML = `<img src="images/capstoneLogo.png">
        <dl>
            <dt>Find us on Steam!</dt>
            <dd>Void Cage</dd>
            <dd>13</dd>
            <dd>Hylophobia</dd>
    
        </dl>
    
        <dl>
            <dt>Useful Links</dt>
            <dd>Games</dd>
            <dd>Kick Starter</dd>
            <dd>Help</dd>
        </dl>
        <dl class="foot-item">
            <dt>Contact Us</dt>
            <dd>crowsnest@gmail.com</dd>
            <br>
            <dd>+01(555)333-3333</dd>
            <dd></dd>
        </dl>`
}

generatePage();