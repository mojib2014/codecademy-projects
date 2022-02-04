CREATE TABLE "school" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "description" varchar
);

CREATE TABLE "student" (
  "id" SERIAL PRIMARY KEY,
  "first_name" varchar,
  "last_name" varchar,
  "created_at" timestamp,
  "telephone" char,
  "email" varchar,
  "school_id" int
);

CREATE TABLE "teacher" (
  "id" SERIAL PRIMARY KEY,
  "first_name" varchar,
  "last_name" varchar,
  "telephone" char,
  "email" varchar,
  "school_id" int
);

CREATE TABLE "teachers_students" (
  "teacher_id" int,
  "student_id" int,
  "primary" "key(teacher_id, student_id)",
  PRIMARY KEY ("teacher_id", "student_id")
);

CREATE TABLE "class" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "number_of_enruled_students" int,
  "teacher_id" int,
  "school_id" int
);

CREATE TABLE "classes_students" (
  "class_id" int,
  "student_id" int,
  "primary" "key(class_id, student_id)",
  PRIMARY KEY ("class_id", "student_id")
);

ALTER TABLE "student" ADD FOREIGN KEY ("school_id") REFERENCES "school" ("id");

ALTER TABLE "teacher" ADD FOREIGN KEY ("school_id") REFERENCES "school" ("id");

ALTER TABLE "class" ADD FOREIGN KEY ("teacher_id") REFERENCES "teacher" ("id");

ALTER TABLE "class" ADD FOREIGN KEY ("school_id") REFERENCES "school" ("id");

