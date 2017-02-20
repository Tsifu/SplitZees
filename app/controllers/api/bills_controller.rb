class Api::BillsController < ApplicationController
  def create
    @bill = Bill.new(bill_params)
    @bill.payer_id = current_user.id
    @bill.paid = false
    if @bill.save
      @owers = params[:bill][:owers]
      Ower.record_bill(@bill.id, @owers)
      debugger
    else
      render json: @bill.errors.full_messages, status: 422
    end
  end

  def show
  end

  def update
  end

  private
  def bill_params
    params.require(:bill).permit(:amount, :description, :bill_date)
  end

end
