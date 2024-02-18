import mongoose, { Schema } from 'mongoose'

const MaterialeSchema = Schema({
  nome: {
    type: String,
    required: [true, 'Inserire il nome del materiale'],
  },
  marca: {
    type: String,
    required: [true, 'Inserire la marca del materiale'],
  },
  categoria: {
    enum: ['Strumento', 'Pennello', 'Prodotto'],
  },
  URLProduttore: {
    type: String,
    required: [true, 'Inserisci il link al sito del produttore'],
  },
})

const LezioneSchema = Schema({
  stato: {
    type: String,
    enum: ['Bozza', 'Pubblico'],
    default: 'Bozza',
  },
  nomeLezione: {
    type: String,
    required: [true, 'Insert Lesson Name'],
  },
  video: {
    type: String,
  },
  copertina: {
    type: String,
  },
})

const CorsoSchema = Schema(
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
    scheda: {
      type: String,
      enum: [
        'Tecniche Base',
        'Tecniche Avanzate',
        'Nuove Tecniche',
        'Unghie Problematiche',
        'Pulizia',
        'Effetto',
        'Disegno',
      ],
      default: 'Tecniche Base',
    },
    metodo: {
      type: String,
      enum: ['Gel', 'AcryGel', 'Acrilico', 'Nessuno'],
      default: 'Nessuno',
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
    copertinaStyle3: {
      type: String,
    },
    presentazione: {
      type: String,
    },
    materiale: {
      type: [MaterialeSchema],
    },
    lezioni: {
      type: [LezioneSchema],
    },
  },
  { timestamps: true }
)

export default mongoose.model('Corso', CorsoSchema)
