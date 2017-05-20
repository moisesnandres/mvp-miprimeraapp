class Project < ApplicationRecord
  belongs_to :company
  belongs_to :step

  has_many :assignments

  def assignments_count
      assignments.count
  end
end
