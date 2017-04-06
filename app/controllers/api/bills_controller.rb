class Api::BillsController < ApplicationController
  def create
    @bill = Bill.new(bill_params)
    @bill.payer_id = current_user.id
    @bill.paid = false

    if @bill.save
      @owers = JSON.parse(params[:bill][:owers])
      Ower.record_bill(@bill.id, @owers)
      @user = current_user
      @outstanding_receivables = @user.outstanding_receivables
      @outstanding_payables = @user.outstanding_payables
      @balance_by_friends = @user.outstanding_balance_by_friends(@outstanding_receivables, @outstanding_payables)
      @bills_by_friend = @user.bills_by_friend(@outstanding_receivables, @outstanding_payables)
      @outstanding_balances = @user.outstanding_balances(@balance_by_friends)
      render 'api/bills/create'
    else
      render json: @bill.errors.full_messages, status: 422
    end
  end

  def show
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

  def update
  end

  private
  def bill_params
    params.require(:bill).permit(:amount, :description, :bill_date, :attachment)
  end

end
