import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
  } from "sequelize-typescript";
  import { Product } from "./product";
  
  @Table({
    tableName: "Inventories",
    timestamps: true,
    modelName: "Inventory",
  })
  export class Inventory extends Model<Inventory> {
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    quantity!: number;
  
    price!: number;
  
    @ForeignKey(() => Product)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
      field: "productId",
    })
    productId!: number;
  
    @BelongsTo(() => Product)
    product!: Product;
  }
  