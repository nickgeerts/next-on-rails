class PingController < ApplicationController
  def index
    render json: { ping: 'pong' }
  end
end
