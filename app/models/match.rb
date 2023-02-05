class Match < ApplicationRecord
  belongs_to :user1, class_name: "User"
  belongs_to :user2, class_name: "User"

  enum status: { pending: "pending", matched: "matched", canceled: "canceled" }

  after_save :update_status

  def update_status
    if user1_accepted && user2_accepted
      self.status = :matched
    end

    save if changed?
  end
end
