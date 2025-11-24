const dotenv = require('dotenv');
dotenv.config();

const db = require('./src/models');

async function checkData() {
    try {
        console.log('Connecting to database...');
        await db.sequelize.authenticate();
        console.log('Connection successful.');

        const modelNames = Object.keys(db).filter(key => key !== 'sequelize' && key !== 'Sequelize');
        console.log(`Found models: ${modelNames.join(', ')}`);

        for (const modelName of modelNames) {
            try {
                const count = await db[modelName].count();
                console.log(`Model ${modelName}: ${count} rows`);
            } catch (err) {
                console.error(`Error counting ${modelName}:`, err.message);
            }
        }
    } catch (error) {
        console.error('Database connection failed:', error.message);
    } finally {
        if (db.sequelize) {
            await db.sequelize.close();
        }
    }
}

checkData();
