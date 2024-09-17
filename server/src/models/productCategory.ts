import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { Product } from "./product";

@Table({
  tableName: "productCategories",
  timestamps: true,
  modelName: "ProductCategory",
})
export class ProductCategory extends Model<ProductCategory> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  description!: string;

  @HasMany(() => Product)
  products!: Product[];
}
