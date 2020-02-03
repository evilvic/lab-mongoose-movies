const { Schema, model } = require('moongose')

const celebritySchema = new Schema(
  {
    name: String,
    occupation: {
      type: String,
      enum: ['actor', 'singer', 'comedian', 'unknown']
    },
    catchPhrase: String
  }
)

module.exports = model('Celebrity', celebritySchema)