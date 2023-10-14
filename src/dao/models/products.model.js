import { Schema, model } from "mongoose";

const productsSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    code:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    thumbnails:{
        type: String,
        required: true
    }
});

export const productsModel = model("Products", productsSchema);


