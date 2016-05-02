class Logo < ActiveRecord::Base
	has_and_belongs_to_many :portfolios

	has_attached_file :image, styles: { thumb: '100x100>' }
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
