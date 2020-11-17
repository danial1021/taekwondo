import { Schema, model } from 'mongoose'

// Define Schemes
const userSchema = new Schema({
  name: { type: String }, // ex) 홍길동
  username: { type: String, required: true, unique: true }, // ex) 관리자
  password: { type: String, required: true }
  // admin: { type: Boolean }
})

// Create Model & Export
export default model('user', userSchema)
