class PortfoliosController < ApplicationController
	before_action :authenticate_admin!, except: [:index]
	layout "admin", except: [:index]
	def index
		@portfolios = Portfolio.order(position: "ASC")
	end

	def show
		
	end

	def new
		@portfolio = Portfolio.new
		@portfolios = Portfolio.all
	end

	def create
		@portfolio = Portfolio.new(portfolio_params)

		if @portfolio.save
			redirect_to admins_portfolios_path, notice: "Portfolio created successfully"
		else
			render :new, alert: "Portfolio NOT created"
		end
	end

	def edit
		@portfolio = Portfolio.find(params[:id])
		@portfolios = Portfolio.all
	end

	def update
		@portfolio = Portfolio.find(params[:id])

		if @portfolio.update_attributes(portfolio_params)
			redirect_to admins_portfolios_path, notice: "Portfolio edited successfully"
		else
			render :edit, alert: "Portfolio NOT edited"
		end
	end

	def destroy
		
	end

	private
		def portfolio_params
			params.require(:portfolio).permit(:title, :why_text, :design_text, :features_text, :url, :image, :image_modal, :portfolio_type, :position) 
		end
end
