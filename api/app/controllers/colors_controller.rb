class ColorsController < ApplicationController
  def index
    render json: { colors: ['red', 'blue', 'green', 'purple', 'black'] }
  end
end
