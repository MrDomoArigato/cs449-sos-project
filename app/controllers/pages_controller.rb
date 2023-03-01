class PagesController < ApplicationController
  # TODO
  # computer mode
  # game selection
  # user login




  def index
    @status = 2
    #check_login()
    #check_active_games()
  end

  def game
    @game_id = params[:id]
  end

  private
    # def check_login
    #   if session[:username] && session[:token]
    #     @player = Player.find(session[:token])
    #     @status = 2
    #   end
    # end

    # def check_active_games

    # end
end
