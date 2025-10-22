// backend/netlify/functions/my-api-function.js
// This function will be accessible at /.netlify/functions/my-api-function

// Example: If your backend uses Mongoose, ensure it's initialized here or in a shared utility.
// You might need to move your Mongoose connection logic into a utility file
// that each function can import and call.
// const mongoose = require('mongoose');
// let cachedDb = null;

// async function connectToDatabase() {
//   if (cachedDb) {
//     return cachedDb;
//   }
//   const connectionString = process.env.MONGODB_URI; // Set this in Netlify Environment Variables
//   cachedDb = await mongoose.connect(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   return cachedDb;
// }

exports.handler = async (event, context) => {
  try {
    // await connectToDatabase(); // Connect to your database

    // Access environment variables (e.g., Clerk Secret Key)
    const clerkSecretKey = process.env.CLERK_SECRET_KEY;

    // Your existing backend logic for this specific API endpoint
    // For example, if this was a GET request to /api/items:
    // const items = await Item.find({});

    // The 'event' object contains request details (method, path, headers, body, queryStringParameters)
    // The 'context' object contains information about the invocation, function, and user.

    // Example: Handle different HTTP methods
    if (event.httpMethod === 'GET') {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "Hello from Netlify Function!",
          secretKeyStatus: clerkSecretKey ? "Clerk Secret Key is set" : "Clerk Secret Key NOT found",
          // data: items,
        }),
      };
    } else if (event.httpMethod === 'POST') {
      const requestBody = JSON.parse(event.body);
      // Process POST request
      return {
        statusCode: 201,
        body: JSON.stringify({ received: requestBody, status: "processed" }),
      };
    }

    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };

  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "Internal Server Error" }),
    };
  }
};
// backend/netlify/functions/my-api-function.js