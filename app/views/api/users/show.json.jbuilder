json.partial! 'api/users/user', user: @user
json.extract! @user, :about
json.star @user.star.name
json.reviewIds @user.reviews.pluck(:id)
