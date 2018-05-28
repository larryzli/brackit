INSERT INTO brackets 
(bracket_name, start, subject, description, image_url, creator_id)
VALUES ($1, $2, $3, $4, $5, $6) 
RETURNING bracket_id;