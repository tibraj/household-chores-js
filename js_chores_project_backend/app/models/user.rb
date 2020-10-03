class User < ApplicationRecord
    has_many :chores

    validates :name, presence: true
end
