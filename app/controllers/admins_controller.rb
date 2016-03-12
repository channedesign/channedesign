class AdminsController < ApplicationController
	before_action :authenticate_admin!
	layout "admin"
	def index
		
	end

	def portfolios
		@portfolios = Portfolio.order(position: "ASC")
	end
end
