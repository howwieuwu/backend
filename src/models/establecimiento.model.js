import mongoose from "mongoose";


const establecimientoSchema = new mongoose.Schema({
    nombreEstablecimiento: {
        type: "String",
        required: true
    },

    direccion: {
        type: "String",
        required: true
    },
    telefono: {
        type: "String",

    },
    comprobante: {

    }
}, {
    timestamps: true
}


)

export default mongoose.model('Establecimiento', establecimientoSchema)




