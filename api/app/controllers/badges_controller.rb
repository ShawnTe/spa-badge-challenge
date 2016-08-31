class BadgesController < ApplicationController
  def index
    boot = Boot.find(params[:boot_id])
    @badges = boot.badges
    render :json => @badges
  end
end
