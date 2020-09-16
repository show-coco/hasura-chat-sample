CREATE OR REPLACE VIEW public."user_typing" AS 
 SELECT "user".id,
    "user".username,
    "user".last_typed,
    "user".last_seen
   FROM "user"
  WHERE ("user".last_typed > (now() - '00:00:02'::interval));
