UPDATE users
SET alias = $2, name = $3, profile_image_url = $4
WHERE user_id = $1
RETURNING *;