const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
)

// Automatically creates a collection based on the name of the model
module.exports = mongoose.model('User', userSchema)
