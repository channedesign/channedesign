class Portfolio < ActiveRecord::Base
	
	has_attached_file :image, styles: { thumb: '100x100>' }
  	validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
  	has_attached_file :image_modal, styles: { thumb: '100x100>' }
  	validates_attachment_content_type :image_modal, :content_type => /\Aimage\/.*\Z/
  	acts_as_list
end
