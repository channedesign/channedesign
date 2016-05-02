class CreateLogosPortfolios < ActiveRecord::Migration
  def change
    create_table :logos_portfolios, id: false do |t|
    	t.belongs_to :logo, index: true
      t.belongs_to :portfolio, index: true
    end
  end
end
