import mongoose, { Schema } from 'mongoose'

const LiveSchema = Schema(
  {
    stato: {
      type: String,
      enum: ['Bozza', 'Pubblico'],
      default: 'Bozza',
    },
    nomeCorso: {
      type: String,
      required: [true, 'Please insert a name for the course'],
    },
    insegnante: {
      type: String,
      required: [true, 'Insert a teacher'],
    },
    descrizione: {
      type: String,
      required: [true, 'Please insert a description'],
    },
    categoria: {
      type: String,
      enum: ['Struttura', 'Decorazione'],
      required: [true, 'Please insert a Category'],
    },
    data: {
      type: Date,
      required: [true, 'Insert a date'],
    },
    ora: {
      type: String,
      requiured: [true, 'Insert an hour'],
    },
    durata: {
      type: Number,
      required: [true, 'Insert a duration'],
    },
    tag: {
      type: [String],
      required: [true, 'Please insert a tag'],
    },
    copertinaStyle1: {
      type: String,
    },
    copertinaStyle2: {
      type: String,
    },
    presentazione: {
      type: String,
    },
    materiale: {
      type: String,
    },
    URLStreaming: {
      type: String,
      required: [true, 'Required'],
    },
  },
  { timestamps: true }
)

export default mongoose.model('Live', LiveSchema)
