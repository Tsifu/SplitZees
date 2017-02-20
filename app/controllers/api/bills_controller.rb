class Api::BillsController < ApplicationController
  def create
    @bill = Bill.new(bill_params)
    @bill.payer_id = current_user.id
    @bill.paid = false
    if @bill.save
      @owers = params[:bill][:owers]
      Ower.record_bill(@bill.id, @owers)
      render json: @bill
    else
      render json: @bill.errors.full_messages, status: 422
    end
  end

  def show
    @user = current_user
    @outstandingReceivables = @user.outstanding_receivables
    @outstandingPayables = @user.outstanding_payables
    @settledReceivables = @user.settled_receivables
    @settledPayables = @user.settled_payables
  end

  def update
  end

  private
  def bill_params
    params.require(:bill).permit(:amount, :description, :bill_date)
  end

end
