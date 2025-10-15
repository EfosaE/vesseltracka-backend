CREATE TYPE "public"."gender" AS ENUM('male', 'female');--> statement-breakpoint
CREATE TYPE "public"."marital_status" AS ENUM('single', 'married', 'divorced', 'widowed');--> statement-breakpoint
CREATE TABLE "departments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" varchar(255),
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "first_timers" RENAME COLUMN "isStudent" TO "is_student";--> statement-breakpoint
ALTER TABLE "first_timers" ADD COLUMN "gender" "gender" NOT NULL;--> statement-breakpoint
ALTER TABLE "first_timers" ADD COLUMN "marital_status" "marital_status" NOT NULL;--> statement-breakpoint
ALTER TABLE "first_timers" ADD COLUMN "born_again" boolean NOT NULL;--> statement-breakpoint
ALTER TABLE "first_timers" ADD COLUMN "holy_ghost_baptized" boolean NOT NULL;--> statement-breakpoint
ALTER TABLE "first_timers" ADD COLUMN "invited_by" varchar(255);--> statement-breakpoint
ALTER TABLE "first_timers" ADD COLUMN "dept_interested_in" uuid;--> statement-breakpoint
ALTER TABLE "first_timers" ADD COLUMN "would_like_to_join" boolean NOT NULL;--> statement-breakpoint
ALTER TABLE "first_timers" ADD CONSTRAINT "first_timers_dept_interested_in_departments_id_fk" FOREIGN KEY ("dept_interested_in") REFERENCES "public"."departments"("id") ON DELETE no action ON UPDATE no action;