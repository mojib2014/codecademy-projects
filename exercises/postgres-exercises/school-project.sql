CREATE TABLE "student" (
  "id" SERIAL PRIMARY KEY,
  "first_name" varchar,
  "last_name" varchar,
  "created_at" timestamp,
  "telephone" char,
  "email" varchar
);

CREATE TABLE "teacher" (
  "id" SERIAL PRIMARY KEY,
  "first_name" varchar,
  "last_name" varchar,
  "telephone" char,
  "email" varchar
);

CREATE TABLE "teachers_students" (
  "teacher_id" int,
  "student_id" int,
  "primary" "key(teacher_id, student_id)"
);

CREATE TABLE "school" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "description" varchar,
  "teacher_id" int,
  "student_id" int
);

ALTER TABLE "teacher" ADD FOREIGN KEY ("id") REFERENCES "teachers_students" ("teacher_id");

ALTER TABLE "student" ADD FOREIGN KEY ("id") REFERENCES "teachers_students" ("student_id");

ALTER TABLE "teacher" ADD FOREIGN KEY ("id") REFERENCES "school" ("teacher_id");

ALTER TABLE "student" ADD FOREIGN KEY ("id") REFERENCES "school" ("student_id");
