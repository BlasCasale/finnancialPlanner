import { Sequelize, DataTypes } from 'sequelize'

export const PlanningFunc = (db: Sequelize) => {
  return db.define('Planning', {
    id: {
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true
    },
    earning: {
      type: DataTypes.DECIMAL(30, 2),
      allowNull: false
    },
    expense: {
      type: DataTypes.DECIMAL(30, 2),
      allowNull: false
    },
    saving: {
      type: DataTypes.DECIMAL(30, 2),
      allowNull: false
    }
  }, {
    timestamps: false
  })
}
