import { Router } from "express";
import { verifyUser } from "../middlewares/authUser";
import { getProductCategories } from "../controllers/productCategory";


const routerProductCategory = Router();

routerProductCategory.get("/categories", verifyUser, getProductCategories);

/* routerProductCategory.post("/task/create", verifyUser, createTask);

routerProductCategory.get("/task/:id", verifyUser, getTask);

routerProductCategory.put("/task/update/:id", verifyUser, updateTask);

routerProductCategory.delete("/task/delete/:id", verifyUser, deleteTask);
 */
export default routerProductCategory;
