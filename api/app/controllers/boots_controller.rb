class BootsController < ApplicationController
  def index
    @boots = Boot.all
    render :json => @boots
  end
end
