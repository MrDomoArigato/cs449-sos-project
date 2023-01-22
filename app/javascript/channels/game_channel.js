import consumer from "channels/consumer"

consumer.subscriptions.create({channel: "GameChannel", game_id: 1}, {
  connected() {
    console.log("CONnect to Game Channel")
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log(data)
  }
});
