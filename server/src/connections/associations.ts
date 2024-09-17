/* import { User } from "../models/user";
import { Task } from "../models/task"; */
import { ProductCategory } from "../models/productCategory";
import { Product } from "../models/product";
import { Inventory } from "../models/inventory";


export function setupAssociations() {
  /* User.hasMany(Task, { foreignKey: "userId", sourceKey: "uuid" });
  Task.belongsTo(User, { foreignKey: "userId", targetKey: "uuid" }); */

  ProductCategory.hasMany(Product, { foreignKey: "productCategoryId", sourceKey: "id" });
  Product.belongsTo(ProductCategory, { foreignKey: "productCategoryId", targetKey: "id" }); 

  Product.hasMany(Inventory, {foreignKey: "productId", sourceKey: "id"});
  Inventory.belongsTo(Product, { foreignKey: "productId", targetKey: "id" }); 

}
