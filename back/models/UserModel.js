import mongoose, { Schema } from 'mongoose'
import validator from 'validator'
import bcryptjs from 'bcryptjs'

const UserSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Please insert a name'],
    },
    lastName: {
      type: String,
      required: [true, 'Please insert a lastName'],
    },
    email: {
      type: String,
      required: [true, 'Please insert an email'],
      validator: validator.isEmail,
      unique: true,
    },
    cellulare: {
      type: String,
    },
    tipologia: {
      type: String,
      enum: ['Base', 'Plus', 'Premium'],
      default: null,
    },
    immagine: {
      type: String,
    },
    ultimoAccesso: {
      type: Date,
      default: Date.now(),
    },
    oreDiStudio: {
      type: Number,
      default: 0,
    },
    corsiCompletati: {
      type: [String],
      default: [],
    },
    attestatiRicevuti: {
      type: [String],
      default: [],
    },
    password: {
      type: String,
      required: [true, 'Insert a valid password'],
      validator: validator.isStrongPassword,
      select: false,
    },

    pagato: {
      type: Boolean,
      default: false,
    },
    clientStripeId: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
)

UserSchema.pre('save', async function () {
  this.password = await bcryptjs.hash(this.password, 12)
})

export default mongoose.model('User', UserSchema)
