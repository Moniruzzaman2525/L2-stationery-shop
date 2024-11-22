import { Schema, model } from "mongoose";
import { TProduct } from "./productInterface";


// stationery schema
const productsSchema = new Schema<TProduct>({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    brand: {
        type: String,
        required: [true, 'Brand is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be a positive number']
    },
    category: {
        type: String,
        enum: {
            values: ['Writing' , 'Office Supplies' , 'Art Supplies' , 'Educational' , 'Technology']
        }
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required']
    },
    inStock: {
        type: Boolean,
        default: true,
        // required: [true, 'In Stack is required']
    },
    created_at: {
        type: Date,
        default: Date.now,
      },
    updated_at: {
        type: Date,
        default: Date.now,
    }
})

// stationery model 
export const Products = model<TProduct>('Products', productsSchema)