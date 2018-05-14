INSERT INTO users (auth_id, name, alias, email, profile_image_url)
VALUES($1, $2, $3, $4, $5)
RETURNING user_id, name, alias, email, profile_image_url;