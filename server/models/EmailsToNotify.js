import { Schema, model } from "mongoose";

const EmailsToNotify = new Schema(
  {
    email: {
      type: String,
    },
  },
  { timestamps: true }
);

const newEmailToNotify = model("newEmailToNotify", EmailsToNotify);
export default newEmailToNotify;
