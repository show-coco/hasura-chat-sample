CREATE OR REPLACE VIEW public."user_online" AS 
 SELECT "user".id,
    "user".username,
    "user".last_typed,
    "user".last_seen
   FROM "user"
  WHERE ("user".last_seen > (now() - '00:00:10'::interval));
