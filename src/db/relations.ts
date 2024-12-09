import { User, Movement, Categories, MonthResume, MovementType, Planning } from './modeling'

User.hasMany(Movement, { foreignKey: 'userId' })
Movement.belongsTo(User, { foreignKey: 'userId' })

User.hasOne(Planning, { foreignKey: 'userId' })
Planning.hasOne(User, { foreignKey: 'userId' })

Movement.hasOne(Categories, { foreignKey: 'category' })
Categories.hasOne(Movement, { foreignKey: 'category' })

Movement.hasOne(MovementType, { foreignKey: 'type' })
MovementType.hasOne(Movement, { foreignKey: 'type' })

MonthResume.hasOne(User, { foreignKey: 'userId' })
User.hasOne(MonthResume, { foreignKey: 'userId' })
