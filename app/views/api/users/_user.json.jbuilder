json.extract! user, :id, :full_name, :email, :username
json.avatar_url asset_path(user.avatar.expiring_url(3600))
