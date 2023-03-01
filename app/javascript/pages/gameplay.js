import "channels";
import gameChannel from "channels/game_channel";

document.getElementById('btn-s').addEventListener("click", function(){
    gameChannel.perform('move', {message: "Hello", magic: [{x: "x", y: "y"}]})
});

    
class game {
    current_player = 0;
    player_turn = 0;

    ProcessAction(data){
        data.forEach(element => {
            switch(element.action){
                case 'start':
                    console.log(element.value);
                    break;
                case 'set player':
                    console.log(element.value);
                    break;
                case 'test':
                    console.log(element.value);
                    break;
            }
        });
    }
}

export default game;