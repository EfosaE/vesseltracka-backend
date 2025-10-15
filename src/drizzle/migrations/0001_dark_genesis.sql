CREATE TABLE "first_timers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"full_name" varchar(255) NOT NULL,
	"address" varchar(255) NOT NULL,
	"email" varchar(255),
	"occupation" varchar(255),
	"isStudent" boolean DEFAULT false NOT NULL,
	"phone_number" varchar(20) NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "first_timers_email_unique" UNIQUE("email"),
	CONSTRAINT "first_timers_phone_number_unique" UNIQUE("phone_number")
);
--> statement-breakpoint
CREATE TABLE "students" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"first_timer_id" uuid,
	"dept" varchar(255) NOT NULL,
	"level" integer NOT NULL,
	"school" varchar(255) NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "students_first_timer_id_unique" UNIQUE("first_timer_id")
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "updated_at" timestamp;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "deleted_at" timestamp;--> statement-breakpoint
ALTER TABLE "students" ADD CONSTRAINT "students_first_timer_id_first_timers_id_fk" FOREIGN KEY ("first_timer_id") REFERENCES "public"."first_timers"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "age";