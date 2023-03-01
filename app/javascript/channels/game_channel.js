import consumer from "channels/consumer"
import game from "pages/gameplay"

const gameChannel = consumer.subscriptions.create({channel: "GameChannel", game_id: game_id}, {
  connected() {
    console.log("Connect to ", this)
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    game.ProcessAction(data);
    console.log(data)
  }
});

export default gameChannel;