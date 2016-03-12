class MainController < ApplicationController
	def index
		@portfolios = Portfolio.order(position: "ASC")
		@contact = Contact.new
	end
end
