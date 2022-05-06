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
    ["placeholder1",""],
    ["placeholder2",""]
]);

