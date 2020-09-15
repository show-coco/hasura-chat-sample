
ALTER TABLE "public"."user" DROP COLUMN "last_seen";

ALTER TABLE "public"."user" ADD COLUMN "last_seen" timetz;
ALTER TABLE "public"."user" ALTER COLUMN "last_seen" DROP NOT NULL;

ALTER TABLE "public"."user" DROP COLUMN "last_typed";

ALTER TABLE "public"."user" ADD COLUMN "last_typed" timetz;
ALTER TABLE "public"."user" ALTER COLUMN "last_typed" DROP NOT NULL;

alter table "public"."user" rename column "id" to "id2";

ALTER TABLE "public"."user" ADD COLUMN "id" text;
ALTER TABLE "public"."user" ALTER COLUMN "id" DROP NOT NULL;

alter table "public"."user" drop constraint "user_pkey";
alter table "public"."user"
    add constraint "user_pkey" 
    primary key ( "id" );

ALTER TABLE "public"."user" DROP COLUMN "id2";

DROP TABLE "public"."message";

ALTER TABLE "public"."user" ALTER COLUMN "last_typed" TYPE timestamp with time zone;

ALTER TABLE "public"."user" ALTER COLUMN "last_seen" TYPE time without time zone;

ALTER TABLE "public"."user" DROP COLUMN "last_typed";

ALTER TABLE "public"."user" DROP COLUMN "last_seen";

ALTER TABLE "public"."user" DROP CONSTRAINT "user_name_key";
alter table "public"."user" rename column "username" to "name";
