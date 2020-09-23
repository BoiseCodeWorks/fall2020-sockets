import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const Ship = new Schema({
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
  price: { type: Number, required: true },
  img: { type: String, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })



export default Ship