import { Schema, model } from "mongoose";

const EmailsToNotify = new Schema(
  {
    email: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

const newEmailToNotify = model("newEmailToNotify", EmailsToNotify);
export default newEmailToNotify;
