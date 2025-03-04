import {
  Table,
  Column,
  Model,
  DataType,
  TableOptions,
  HasMany,
} from "sequelize-typescript";

enum RolEnum {
  SUPER_ADMIN = "super_admin",
  ADMIN = "admin",
  MESERO = "mesero",
  COCINA = "cocina"
} 
@Table({
  tableName: "users",
  timestamps: true,
  modelName: "User",
} as TableOptions)
export class User extends Model<User> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  uuid!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notEmpty: false,
    },
  })
  name!: string;
  @Column({
    type: DataType.STRING,
    allowNull: true,
    validate: {
      notEmpty: false,
    },
  })
  last_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  password!: string;

  @Column({
    type: DataType.ENUM(...Object.values(RolEnum)),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  role!: RolEnum;

/*   @HasMany(() => Task)
  tasks!: Task[]; */
}
