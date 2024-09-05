# MongoDB Connection Utility

This repository contains a Node.js utility for connecting to and disconnecting from a MongoDB database using Mongoose. This code demonstrates how to handle MongoDB connections with proper error handling and connection management.

## Features

- Connect to a MongoDB Atlas cluster.
- Verify the connection by pinging the database.
- Disconnect from the MongoDB database.
- Error handling for connection and disconnection failures.

## Prerequisites

- Node.js and npm installed on your machine.
- MongoDB Atlas account and a cluster set up.
- Mongoose library installed.

## Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/repository-name.git
   cd repository-name
npm install
2. **Install Dependencies**

 npm install
3. **Configuration**

Update the uri variable in index.js with your MongoDB connection string. Replace user, user, host, and db-name with your MongoDB credentials and database information.
const uri = "mongodb+srv://user:user@host/db-name?retryWrites=true&w=majority&appName=example";

Usage
To use the connection utility in your project:

1. **Import the Module**
   const { connectDB, disconnectDB } = require('./index');
2. **Connect to MongoDB**
Call the connectDB function to establish a connection:
async function start() {
    await connectDB();
    // Your code here
}

start();
3. **Disconnect from MongoDB**

Call the disconnectDB function to close the connection:
async function close() {
    await disconnectDB();
}

// Call close when you want to disconnect
close();
