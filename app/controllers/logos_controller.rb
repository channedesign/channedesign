class LogosController < ApplicationController
	before_action :authenticate_admin!
	layout 'admin'


	def new 
		@logos = Logo.all.includes(:portfolios)
		@logo = Logo.new
	end	

	def create
		@logo = Logo.new(logo_params)

		if @logo.save
			redirect_to admins_portfolios_path, notice: "Logo created successfully"
		else
			render :new, alert: "Logo NOT created"
		end
	end

	def destroy
		Logo.find(params[:id]).destroy
	end

	private
		def logo_params
			params.require(:logo).permit(:title, :image)
		end	
end
