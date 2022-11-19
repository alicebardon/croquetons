class BrowsesController < ApplicationController

  def browse
    @users = User.all
  end

  def like
    # swipe right
  end

  def decline
    #swipe left
  end
end
