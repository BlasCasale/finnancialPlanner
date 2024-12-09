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
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expense: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    saving: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false
  })
}
