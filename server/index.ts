import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

// Route imports
import contentRoutes from './routes/content.ts';
import eventRoutes from './routes/events.ts';
import galleryRoutes from './routes/gallery.ts';
import blogRoutes from './routes/blog.ts';
import socialRoutes from './routes/social.ts';
import adminRoutes from './routes/admin.ts';

// Database initialization
import { initializeDatabase } from './models/database.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:", "blob:"],
      scriptSrc: ["'self'"],
      connectSrc: ["'self'"],
    },
  },
}));

// CORS configuration for Orthodox youth website
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174', 
    'http://localhost:3000',
    process.env.FRONTEND_URL || 'http://localhost:5173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Logging
app.use(morgan('combined'));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static file serving for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes for Orthodox Youth Website
app.use('/api/content', contentRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/social', socialRoutes);
app.use('/api/admin', adminRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    message: 'Orthodox Youth Website API is running',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// API documentation endpoint
app.get('/api', (req, res) => {
  res.json({
    name: 'Orthodox Youth Website API',
    description: 'Backend API for Orthodox youth community in Lagos, Nigeria',
    version: '1.0.0',
    endpoints: {
      content: '/api/content - Site content management',
      events: '/api/events - Youth events and activities',
      gallery: '/api/gallery - Photo gallery management',
      blog: '/api/blog - Blog posts and articles',
      social: '/api/social - Social media integration',
      admin: '/api/admin - Administrative functions',
      health: '/api/health - API health check'
    },
    documentation: 'Visit /api/docs for detailed API documentation'
  });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  
  // Don't leak error details in production
  const isDevelopment = process.env.NODE_ENV !== 'production';
  
  res.status(err.status || 500).json({
    error: true,
    message: err.message || 'Internal Server Error',
    ...(isDevelopment && { stack: err.stack, details: err })
  });
});

// 404 handler for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({
    error: true,
    message: `API endpoint ${req.originalUrl} not found`,
    availableEndpoints: [
      '/api/content',
      '/api/events', 
      '/api/gallery',
      '/api/blog',
      '/api/social',
      '/api/admin',
      '/api/health'
    ]
  });
});

// Initialize database and start server
async function startServer() {
  try {
    // Initialize SQLite database with Orthodox youth schema
    await initializeDatabase();
    console.log('✅ Database initialized successfully');
    
    // Start the Express server
    app.listen(PORT, () => {
      console.log(`🚀 Orthodox Youth API Server running on port ${PORT}`);
      console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
      console.log(`📖 API documentation: http://localhost:${PORT}/api`);
      console.log(`🎨 Frontend should connect to: http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down Orthodox Youth API Server...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down Orthodox Youth API Server...');
  process.exit(0);
});

// Start the server
startServer();