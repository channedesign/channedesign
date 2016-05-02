class CreateLogos < ActiveRecord::Migration
  def change
    create_table :logos do |t|
    	t.string :title
    	t.attachment :image
    	t.timestamps
    end
  end
end
