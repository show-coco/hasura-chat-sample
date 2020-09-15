
ALTER TABLE "public"."user" ADD CONSTRAINT "user_name_key" UNIQUE ("name");
alter table "public"."user" rename column "name" to "username";

ALTER TABLE "public"."user" ADD COLUMN "last_seen" time NULL;

ALTER TABLE "public"."user" ADD COLUMN "last_typed" timestamptz NULL;

ALTER TABLE "public"."user" ALTER COLUMN "last_seen" TYPE timetz;

ALTER TABLE "public"."user" ALTER COLUMN "last_typed" TYPE timetz;

CREATE TABLE "public"."message"("id" serial NOT NULL, "text" text NOT NULL, "username" text NOT NULL, "timestamp" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("username") REFERENCES "public"."user"("username") ON UPDATE restrict ON DELETE restrict);

ALTER TABLE "public"."user" ADD COLUMN "id2" serial NOT NULL;

alter table "public"."user" drop constraint "user_pkey";
alter table "public"."user"
    add constraint "user_pkey" 
    primary key ( "id2" );

ALTER TABLE "public"."user" DROP COLUMN "id" CASCADE;

alter table "public"."user" rename column "id2" to "id";

ALTER TABLE "public"."user" DROP COLUMN "last_typed" CASCADE;

ALTER TABLE "public"."user" ADD COLUMN "last_typed" timestamptz NULL;

ALTER TABLE "public"."user" DROP COLUMN "last_seen" CASCADE;

ALTER TABLE "public"."user" ADD COLUMN "last_seen" timestamptz NULL;
