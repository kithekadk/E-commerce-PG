import { Request, Response } from "express";
import { product } from "../interfaces/product";
import pool from "../config/sqlConfig";
import { v4 } from "uuid";


export const ExtractOrders = async(req: Request, res: Response)=>{
    try {
        let order_id = v4()

        let {customer_id, total_amount, shipping_to} = req.body

        let result = await pool.query(
            `INSERT INTO Orders (order_id, customer_id, total_amount, shipping_to) 
            VALUES ($1, $2, $3, $4)`,
            [order_id, customer_id, total_amount, shipping_to]
        );

         return res.json({
            message: 'Order created successfully'
         })
    } catch (error) {
        return res.json({
            error: error
        })
    }
}
export const createOrder = async(req: Request, res: Response)=>{
    try {
        let order_id = v4()

        let {customer_id, total_amount, shipping_to} = req.body

        let result = await pool.query(
            `INSERT INTO Orders (order_id, customer_id, total_amount, shipping_to) 
            VALUES ($1, $2, $3, $4)`,
            [order_id, customer_id, total_amount, shipping_to]
        );

         return res.json({
            message: 'Order created successfully'
         })
    } catch (error) {
        return res.json({
            error: error
        })
    }
}

export const getOrders = async( req: Request, res: Response )=>{
    try {
        let result = await pool.query(
            `SELECT * FROM Orders`
        );

        return res.json({
            message: result.rows
        })
    } catch (error) {
        return res.json({
            error: error
        })
    }
}
