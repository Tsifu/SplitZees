class Api::BillsController < ApplicationController
  def create
    @bill = Bill.new(bill_params)
    @bill.payer_id = current_user.id

    if @bill.save
      render "api/bills/bill"

      params[:bill][:owers].each do |id|

    else
      render json: @bill.errors.full_messages, status: 422
    end
  end

  def show
  end

  private
  def bill_params
    params.require(:bill).permit(:amount, :description, :bill_date, owers: [])
  end

end
