import game from "pages/gameplay";

const size = 15;
const w = window.innerWidth;
const h = window.innerHeight;
const gameboard = document.getElementById("gameboard");
const gameview = document.getElementById("game-container");
const tileSize = (h/20);
const boardSize = (tileSize * size);

setupGameboard();

function setupGameboard(){
    var boardMargin = 10;
    var gamecoords = {
        x : (((gameview.offsetWidth - boardSize) > 0) ? ((gameview.offsetWidth - boardSize) / 2) : boardMargin),
        y : (((gameview.offsetHeight - boardSize) > 0) ? ((gameview.offsetHeight - boardSize) / 2) : boardMargin)
    }
    
    gameboard.style.left = gamecoords.x + "px";
    gameboard.style.top = gamecoords.y + "px";
    gameboard.style.width = boardSize + boardMargin + "px";
    gameboard.style.height = boardSize + boardMargin + "px";

    for(var i = 0; i < size; i++){
        for(var j = 0; j < size; j++){
            const gametile  = document.createElement("div");
            var xpos = (j * tileSize), ypos = (i * tileSize);
            gametile.className = "gametile";
            gametile.id = "tile-" + j + "-" + i;
            gametile.style.top = ypos + "px";
            gametile.style.left = xpos + "px";
            gameboard.appendChild(gametile);
        }
    }
}