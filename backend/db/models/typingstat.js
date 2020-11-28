'use strict';
const { Op, Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const TypingStat = sequelize.define('TypingStat', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    speed: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
      // defaultValue: 0,
    },
    score: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
      // defaultValue: 0,
    },
    time: {
      type: DataTypes.ARRAY(DataTypes.FLOAT),
      allowNull: false,
      //in minutes
      // defaultValue: 0,
    },
    letters: {
      type: DataTypes.ARRAY(DataTypes.FLOAT),
      allowNull: false,
    },
    errors: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
    frequency: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
  }, {});
  TypingStat.associate = function (models) {
    TypingStat.belongsTo(models.User, { foreignKey: 'user_id' });
  };

  TypingStat.getStats = async function (id) {
    const typingStat = await TypingStat.findOne({
      where: {
        user_id: id,
      },
    });

    return typingStat
  }

  TypingStat.updateStats = async function ({ id, speed, score, time, frequency }) {
    const userStat = await TypingStat.findOne({
      where: {
        user_id: id
      }
    });

    return await userStat.update({
      speed: Sequelize.fn('array_append', Sequelize.col('speed'), speed),
      score: Sequelize.fn('array_append', Sequelize.col('score'), score),
      time: Sequelize.fn('array_append', Sequelize.col('time'), time),
      frequency: Sequelize.fn('array_append', Sequelize.col('frequency'), frequency),
    });
  };

  return TypingStat;
};
