class Api::OwersController < ApplicationController
  def create
    @user = current_user

    Ower.settle_bills_by_friend(
      params[:friend][:friend_id],
      params[:friend][:paid_date],
      @user.id
    )

    @outstanding_receivables = @user.outstanding_receivables
    @outstanding_payables = @user.outstanding_payables
    @settled_receivables = @user.settled_receivables
    @settled_payables = @user.settled_payables
    @balance_by_friends = @user.outstanding_balance_by_friends(@outstanding_receivables, @outstanding_payables)
    @bills_by_friend = @user.bills_by_friend(@outstanding_receivables, @outstanding_payables)
    @outstanding_balances = @user.outstanding_balances(@balance_by_friends)
    render "api/bills/show"
  end

  def index
    debugger
    Ower.settle_individual_bill(
      params[:bill][:bill_id],
      params[:bill][:paid_date],
      params[:bill][:ower_userid]
    )

    @user = current_user
    @outstanding_receivables = @user.outstanding_receivables
    @outstanding_payables = @user.outstanding_payables
    @settled_receivables = @user.settled_receivables
    @settled_payables = @user.settled_payables
    @balance_by_friends = @user.outstanding_balance_by_friends(@outstanding_receivables, @outstanding_payables)
    @bills_by_friend = @user.bills_by_friend(@outstanding_receivables, @outstanding_payables)
    @outstanding_balances = @user.outstanding_balances(@balance_by_friends)
    render "api/bills/show"
  end

end
