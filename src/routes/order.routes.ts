import { Router } from "express";
import { createOrder, getOrders } from "../controller/order.controller";

const order_router = Router()

order_router.post('/', createOrder)
order_router.get('/', getOrders)

export default order_router