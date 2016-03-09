class MainController < ApplicationController
	def index
		@portfolios = Portfolio.all
		@contact = Contact.new
	end
end
