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
      type: DataTypes.REAL,
      allowNull: false,
      defaultValue: 0
    },
    expense: {
      type: DataTypes.REAL,
      allowNull: false,
      defaultValue: 0
    },
    saving: {
      type: DataTypes.REAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    timestamps: false
  })
}
