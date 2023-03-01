require_relative "../models/GameLogic"

class GameChannel < ApplicationCable::Channel
  def subscribed
    stream_from "game_channel_#{params[:game_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
    logger.error "Data sent through receive action cable"
  end

  def move(data)
    logger.debug data
  end
end
