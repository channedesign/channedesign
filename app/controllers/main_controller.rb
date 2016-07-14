class MainController < ApplicationController
	def index
		@portfolios = Portfolio.order_by_position
		@contact = Contact.new
	end
end
