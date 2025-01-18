import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["Admin", "Mentor", "Student"],
      default: "Student",
    },
    enrolledCourse: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    photoUrl: {
      type: String,
      default: "",
    },
  },
  { timeseries: true }
);

export default mongoose.model("User", userSchema)