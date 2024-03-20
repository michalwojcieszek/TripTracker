import mongoose from "mongoose";

const financesSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    savingsGoal: {
      type: Number,
      required: true,
    },
    income: {
      type: Number,
      required: true,
    },
    currency: { type: String },
    expenses: {
      january: [
        {
          expenseId: { type: String },
          addedOn: { date: { type: String }, time: { type: String } },
          category: { type: String },
          cost: { type: Number },
          description: { type: String, default: "" },
        },
      ],
      february: [
        {
          expenseId: { type: String },
          addedOn: { date: { type: String }, time: { type: String } },
          category: { type: String },
          cost: { type: Number },
          description: { type: String, default: "" },
        },
      ],
      march: [
        {
          expenseId: { type: String },
          addedOn: { date: { type: String }, time: { type: String } },
          category: { type: String },
          cost: { type: Number },
          description: { type: String, default: "" },
        },
      ],
      april: [
        {
          expenseId: { type: String },
          addedOn: { date: { type: String }, time: { type: String } },
          category: { type: String },
          cost: { type: Number },
          description: { type: String, default: "" },
        },
      ],
      may: [
        {
          expenseId: { type: String },
          addedOn: { date: { type: String }, time: { type: String } },
          category: { type: String },
          cost: { type: Number },
          description: { type: String, default: "" },
        },
      ],
      june: [
        {
          expenseId: { type: String },
          addedOn: { date: { type: String }, time: { type: String } },
          category: { type: String },
          cost: { type: Number },
          description: { type: String, default: "" },
        },
      ],
      july: [
        {
          expenseId: { type: String },
          addedOn: { date: { type: String }, time: { type: String } },
          category: { type: String },
          cost: { type: Number },
          description: { type: String, default: "" },
        },
      ],
      august: [
        {
          expenseId: { type: String },
          addedOn: { date: { type: String }, time: { type: String } },
          category: { type: String },
          cost: { type: Number },
          description: { type: String, default: "" },
        },
      ],
      september: [
        {
          expenseId: { type: String },
          addedOn: { date: { type: String }, time: { type: String } },
          category: { type: String },
          cost: { type: Number },
          description: { type: String, default: "" },
        },
      ],
      october: [
        {
          expenseId: { type: String },
          addedOn: { date: { type: String }, time: { type: String } },
          category: { type: String },
          cost: { type: Number },
          description: { type: String, default: "" },
        },
      ],
      november: [
        {
          expenseId: { type: String },
          addedOn: { date: { type: String }, time: { type: String } },
          category: { type: String },
          cost: { type: Number },
          description: { type: String, default: "" },
        },
      ],
      december: [
        {
          expenseId: { type: String },
          addedOn: { date: { type: String }, time: { type: String } },
          category: { type: String },
          cost: { type: Number },
          description: { type: String, default: "" },
        },
      ],
    },
  },
  { timestamps: true }
);

const Finances = mongoose.model("Finances", financesSchema);

export default Finances;
