const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get the custom name from command-line arguments (if provided)
const customName = process.argv[2];

if (!customName) {
    console.error('Error: Please provide a custom name for the migration.');
    process.exit(1);
}

// Get the current date and time
const currentDate = new Date();
const formattedDate = currentDate.toISOString().slice(0, 19).replace(/[^0-9]/g, '');

// Create a filename with the current date and time and custom name
const migrationName = `${formattedDate}_${customName}`;

// Execute the Knex CLI migrate:make command
try {
    execSync(`npx knex migrate:make ${migrationName}`);
    console.log(`Migration '${migrationName}' created successfully.`);
} catch (error) {
    console.error('Error creating migration:', error);
}

//The command to create new migration:
//node create-migration.js <custom-migration-name>

//this use new migration without date
//npx knex migrate:make migration_name

