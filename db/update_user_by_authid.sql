UPDATE users
SET alias = $2, name = $3, profile_image_url = $4, bio = $5
WHERE user_id = $1
RETURNING user_id, name, alias, email, profile_image_url, bio;