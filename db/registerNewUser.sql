INSERT INTO users (auth_id,name,email,image,password)
VALUES(${sub},${name},${email},${image},${password})
RETURNING *;
