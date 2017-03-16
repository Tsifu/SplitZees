class Api::FriendshipsController < ApplicationController
  def create
    @friendship = Friendship.new(friendship_params)

    if @friendship.save
      @friend = User.find(params[:friendship][:friend_id])
      render "api/friendships/friend"
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def show
     @user = User.find(params[:id])
     friends = @user.friends.order(:username)
     prospective_friends = @user.prospective_friends.order(:email)

     @friends = friends.order(:username)
     @prospective_friends = prospective_friends.order(:email)
     render "api/friendships/show"
  end

  def friendship_params
    params.require(:friendship).permit(:user_id, :friend_id)
  end

end
