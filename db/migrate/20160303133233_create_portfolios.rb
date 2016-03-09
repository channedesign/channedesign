class CreatePortfolios < ActiveRecord::Migration
  def change
    create_table :portfolios do |t|

    	t.string :title
    	t.text :why_text
    	t.text :design_text
    	t.text :features_text
    	t.string :url
    	t.attachment :image
    	t.attachment :image_modal

      t.timestamps
    end
  end
end
