CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"age" integer NOT NULL,
	"phone_number" varchar(20) NOT NULL,
	CONSTRAINT "users_phone_number_unique" UNIQUE("phone_number")
);
