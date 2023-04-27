class User < ApplicationRecord
  has_secure_password
  before_validation :format_username
  has_many :reviews, dependent: :destroy
  has_many :restaurants, through: :reviews
  has_many :meals, through: :reviews
  validates :username, presence: true, uniqueness: true, format: { with: /\A[a-zA-Z0-9]+\Z/ }

  private

  def format_username
    self.username = self.username.downcase
  end
  
end
