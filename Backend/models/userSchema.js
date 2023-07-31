  const { Sequelize, DataTypes } = require('sequelize');
  const sequelize = require('./dbConnection');

  const User = sequelize.define('User', {
    // Define the attributes (columns) of the table
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    names: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    age:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  User.sync()
    .then(() => {
      console.log('User table created successfully.');
    })
    .catch((err) => {
      console.error('Error creating User table:', err);
    });

  module.exports = User;
