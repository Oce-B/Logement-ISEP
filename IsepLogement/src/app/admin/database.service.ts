// database.service.js

// Import necessary modules and models
const mongoose = require('mongoose');
const Listing = require('./listing.model');
const Chat = require('./chat.model');
const { MOCK_LISTINGS, MOCK_CHATS } = require('./mock-data');

// Connect to MongoDB database
async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/ISEPLogement', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Function to populate database with mock listings
async function populateListings() {
  try {
    await Listing.insertMany(MOCK_LISTINGS);
    console.log('Mock listings inserted successfully');
  } catch (error) {
    console.error('Error inserting mock listings:', error);
  }
}

// Function to populate database with mock chats
async function populateChats() {
  try {
    await Chat.insertMany(MOCK_CHATS);
    console.log('Mock chats inserted successfully');
  } catch (error) {
    console.error('Error inserting mock chats:', error);
  }
}

// Close database connection
function closeDatabaseConnection() {
  mongoose.disconnect();
  console.log('Database connection closed');
}

// Export functions
module.exports = {
  connectToDatabase,
  populateListings,
  populateChats,
  closeDatabaseConnection,
};
