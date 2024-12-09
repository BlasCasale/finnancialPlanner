import { Sequelize, DataTypes } from 'sequelize'

export const MovementTypeFunc = (db: Sequelize) => {
  return db.define('MovementType', {
    id: {
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING(20)
    }
  }, {
    timestamps: false
  })
}
