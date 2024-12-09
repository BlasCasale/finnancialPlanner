import { Sequelize, DataTypes } from 'sequelize'

export const CategoriesFunc = (db: Sequelize) => {
  return db.define('Categories', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    category: {
      unique: true,
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    timestamps: false
  })
}
