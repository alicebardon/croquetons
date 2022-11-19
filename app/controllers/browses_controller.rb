class BrowsesController < ApplicationController

  def browse
    @users = User.where.not(id: current_user)
  end

  def like
    # swipe right
  end

  def dislike
    #swipe left
  end
end
