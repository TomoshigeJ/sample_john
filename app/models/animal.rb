class Animal < ApplicationRecord

  mount_uploader :avatar, AvatarUploader

  enum size: { small: 0, middle: 1, big: 2}
  
end
