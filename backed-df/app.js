const express = require('express');  
const mongoose = require('mongoose');  
const cors = require('cors');  
const helmet = require('helmet');  
const compression = require('compression');  
const dotenv = require('dotenv');  
const path = require('path');  
const swaggerJsDoc = require('swagger-jsdoc');  
const swaggerUi = require('swagger-ui-express');  

// Load environment variables
dotenv.config();


const swaggerOptions = {  
  swaggerDefinition: {  
    openapi: '3.0.0',  
    info: {  
      title: 'API Documentation',  
      version: '1.0.0',  
      description: 'API Information',  
    },  
    servers: [{  
      url: 'http://localhost:5001',  
    }],
  },  
  apis: ['./routes/*.js'],  
};  
const swaggerDocs = swaggerJsDoc(swaggerOptions);  




const app = express();  
app.use(cors());  
app.use(helmet());  
app.use(compression());  
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  


// Route imports
const newsRoutes = require('./routes/news');
const paymentRoutes = require('./routes/payment');
const eventRoutes = require('./routes/event');
const documentRoutes = require('./routes/document');
const academicProgramRoutes = require('./routes/academicProgram');
const userRoutes = require('./routes/user');
const directoryEntryRoutes = require('./routes/directoryEntry');
const libraryResourceRoutes = require('./routes/libraryResource');
const applicationRoutes = require('./routes/application');
const serviceRoutes = require('./routes/service');
const chatSessionRoutes = require('./routes/chatSession');

// Routes
app.use('/api/news', newsRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/academic', academicProgramRoutes);
app.use('/api/users', userRoutes);
app.use('/api/directory', directoryEntryRoutes);
app.use('/api/library', libraryResourceRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/chat', chatSessionRoutes);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Database connection
const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    console.log('Starting server without MongoDB connection...');
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
