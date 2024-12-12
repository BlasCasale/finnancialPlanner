import { Sequelize, DataTypes } from 'sequelize'

export const MovementFunc = (db: Sequelize) => {
  return db.define('Movement', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    userId: {
      allowNull: false,
      type: DataTypes.UUID
    },
    date: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    category: {
      allowNull: false,
      type: DataTypes.UUID
    },
    quantity: {
      allowNull: false,
      type: DataTypes.DECIMAL(30, 2)
    },
    description: {
      allowNull: true,
      type: DataTypes.STRING(30)
    },
    type: {
      allowNull: false,
      type: DataTypes.UUID
    }
  }, {
    timestamps: false
  })
}
