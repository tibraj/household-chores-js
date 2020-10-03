class Chore < ApplicationRecord
  belongs_to :user

  validates :task, presence: true
  validates :duration, presence: true
end
