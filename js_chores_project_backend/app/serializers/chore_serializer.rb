class ChoreSerializer < ActiveModel::Serializer 

    attributes :id, :task, :duration

    belongs_to :user

end