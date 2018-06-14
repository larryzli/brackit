UPDATE brackets
SET bracket_name = $2, 
    start = $3, 
    subject = $4, 
    description = $5, 
    image_url = $6
WHERE bracket_id = $1 
RETURNING *;