import { Sequelize, DataTypes } from 'sequelize'

export const MonthResumeFunc = (db: Sequelize) => {
  return db.define('MonthResume', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    earnings: {
      type: DataTypes.DECIMAL(30, 2),
      allowNull: false,
      defaultValue: 0
    },
    expense: {
      type: DataTypes.DECIMAL(30, 2),
      allowNull: false,
      defaultValue: 0
    },
    saving: {
      type: DataTypes.DECIMAL(30, 2),
      allowNull: false,
      defaultValue: 0
    },
    expectedEarning: {
      type: DataTypes.DECIMAL(30, 2),
      allowNull: false
    },
    expectedExpense: {
      type: DataTypes.DECIMAL(30, 2),
      allowNull: false
    },
    expectedSaving: {
      type: DataTypes.DECIMAL(30, 2),
      allowNull: false
    }
  }, {
    timestamps: false
  })
}
