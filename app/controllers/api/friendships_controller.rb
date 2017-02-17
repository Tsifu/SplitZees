class Api::FriendshipsController < ApplicationController
  def create
    @friendship = Friendship.new(friendship_params)

    render json: @friendship.errors.full_messages, status: 422 unless @friendship.save
  end

  def show
     @user = User.find_by(params[:id])
     @friends = @user.friends
     @prospective_friends = @user.prospective_friends
  end

  def friendship_params
    params.require(:friendship).permit(:user_id, :friend_id)
  end

end
