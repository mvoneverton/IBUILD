SELECT *
FROM user
JOIN property
WHERE user.user_id = property.user_id
AND is_contractor = 0