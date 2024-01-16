import { Router } from "express";
import { CategoryController } from "../controllers/category.controller";

export const categoriesRoutes = Router()

const controller = new CategoryController

categoriesRoutes.post('/', controller.create)