CREATE TABLE "public"."message"("id" serial NOT NULL, "text" text NOT NULL, "username" text NOT NULL, "timestamp" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("username") REFERENCES "public"."user"("username") ON UPDATE restrict ON DELETE restrict);