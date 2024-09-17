import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { ProductCategory } from "./productCategory";
import { Inventory } from "./inventory";

// Define the enum type
enum StatusEnum {
  DISPONIBLE = "disponible",
  NO_DISPONIBLE = "no_disponible",
}
@Table({
  tableName: "products",
  timestamps: true,
  modelName: "Product",
})
export class Product extends Model<Product> {
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

  @Column({
    type: DataType.ENUM(...Object.values(StatusEnum)),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  status!: StatusEnum;

  @Column({
    type: DataType.DECIMAL(10, 2), // 10 total digits, 2 decimal places
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  price!: number;

  @ForeignKey(() => ProductCategory)
  @Column({
    type: DataType.INTEGER, // Changed from INTEGER to UUID
    allowNull: false,
    field: "productCategoryId",
  })
  productCategoryId!: number; // Changed from UUID to string to match User's uuid type

  @BelongsTo(() => ProductCategory)
  productCategory!: ProductCategory;

  @HasMany(() => Inventory)
  inventories!: Inventory[];
}
