class AdminsController < ApplicationController
	before_action :authenticate_admin!
	layout "admin"
	def index
		
	end

	def portfolios
		@portfolios = Portfolio.order_by_position
	end
end
