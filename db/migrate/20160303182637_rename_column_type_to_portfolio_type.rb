class RenameColumnTypeToPortfolioType < ActiveRecord::Migration
  def change
  	rename_column :portfolios, :type, :portfolio_type
  end
end
