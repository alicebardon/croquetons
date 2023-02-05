class MatchesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:update_or_create]

  def update_or_create
    p params
    match = Match.find_by(user1_id: params[:user_to_match_id], user2_id: params[:current_user_id])
    if match.present?
      match.update(
        user2_accepted: true,
      )
    else
      Match.create(user1_id: params[:current_user_id], user2_id: params[:user_to_match_id])
    end

    head :ok
  end
end
