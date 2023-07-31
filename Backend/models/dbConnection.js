const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gym_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

// Test the database connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to the database successfully!.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
