CREATE TABLE "public"."user"("id" serial NOT NULL, "username" text NOT NULL, "last_seen" timestamptz NOT NULL, "last_typed" timestamptz NOT NULL, PRIMARY KEY ("id") , UNIQUE ("username"));
