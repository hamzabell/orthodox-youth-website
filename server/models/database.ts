import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let db: Database<sqlite3.Database, sqlite3.Statement>;

// Initialize SQLite database for Orthodox Youth Website
export async function initializeDatabase(): Promise<Database<sqlite3.Database, sqlite3.Statement>> {
  try {
    // Open database connection
    db = await open({
      filename: path.join(__dirname, '..', 'orthodox-youth.db'),
      driver: sqlite3.Database
    });

    // Enable foreign keys
    await db.exec('PRAGMA foreign_keys = ON');

    // Create tables for Orthodox Youth Website content management
    await createTables();
    await seedInitialData();

    console.log('✅ Orthodox Youth database initialized successfully');
    return db;
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    throw error;
  }
}

async function createTables() {
  // Site Content Table - for all text content on the website
  await db.exec(`
    CREATE TABLE IF NOT EXISTS site_content (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      section VARCHAR(50) NOT NULL,
      key VARCHAR(100) NOT NULL,
      content TEXT NOT NULL,
      content_type VARCHAR(20) DEFAULT 'text',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(section, key)
    )
  `);

  // Events Table - for youth activities and gatherings
  await db.exec(`
    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title VARCHAR(200) NOT NULL,
      description TEXT,
      event_date DATETIME NOT NULL,
      end_date DATETIME,
      location VARCHAR(300),
      capacity INTEGER DEFAULT 0,
      registered_count INTEGER DEFAULT 0,
      category VARCHAR(50) DEFAULT 'general',
      status VARCHAR(20) DEFAULT 'active',
      featured_image VARCHAR(500),
      registration_link VARCHAR(500),
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Gallery Table - for photo gallery management
  await db.exec(`
    CREATE TABLE IF NOT EXISTS gallery (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title VARCHAR(200),
      description TEXT,
      image_url VARCHAR(500) NOT NULL,
      alt_text VARCHAR(300),
      category VARCHAR(50) DEFAULT 'general',
      upload_date DATETIME DEFAULT CURRENT_TIMESTAMP,
      display_order INTEGER DEFAULT 0,
      is_featured BOOLEAN DEFAULT 0,
      status VARCHAR(20) DEFAULT 'active'
    )
  `);

  // Blog Posts Table - for blog content integration
  await db.exec(`
    CREATE TABLE IF NOT EXISTS blog_posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title VARCHAR(300) NOT NULL,
      excerpt TEXT,
      content TEXT,
      featured_image VARCHAR(500),
      author VARCHAR(100),
      category VARCHAR(50),
      external_url VARCHAR(500),
      publish_date DATETIME DEFAULT CURRENT_TIMESTAMP,
      status VARCHAR(20) DEFAULT 'published',
      view_count INTEGER DEFAULT 0,
      is_featured BOOLEAN DEFAULT 0
    )
  `);

  // Social Media Table - for platform links and settings
  await db.exec(`
    CREATE TABLE IF NOT EXISTS social_media (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      platform VARCHAR(50) NOT NULL UNIQUE,
      username VARCHAR(100),
      profile_url VARCHAR(500),
      display_name VARCHAR(100),
      icon_class VARCHAR(100),
      is_active BOOLEAN DEFAULT 1,
      display_order INTEGER DEFAULT 0,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Navigation Table - for menu management
  await db.exec(`
    CREATE TABLE IF NOT EXISTS navigation (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      label VARCHAR(100) NOT NULL,
      href VARCHAR(300) NOT NULL,
      icon VARCHAR(100),
      parent_id INTEGER,
      display_order INTEGER DEFAULT 0,
      is_active BOOLEAN DEFAULT 1,
      target VARCHAR(20) DEFAULT '_self',
      FOREIGN KEY (parent_id) REFERENCES navigation (id)
    )
  `);

  // Site Settings Table - for theme and configuration
  await db.exec(`
    CREATE TABLE IF NOT EXISTS site_settings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      key VARCHAR(100) NOT NULL UNIQUE,
      value TEXT,
      description TEXT,
      category VARCHAR(50) DEFAULT 'general',
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Admin Users Table - for content management authentication
  await db.exec(`
    CREATE TABLE IF NOT EXISTS admin_users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username VARCHAR(50) NOT NULL UNIQUE,
      email VARCHAR(100) NOT NULL UNIQUE,
      password_hash VARCHAR(255) NOT NULL,
      full_name VARCHAR(100),
      role VARCHAR(20) DEFAULT 'admin',
      is_active BOOLEAN DEFAULT 1,
      last_login DATETIME,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create indexes for better performance
  await db.exec(`
    CREATE INDEX IF NOT EXISTS idx_site_content_section ON site_content(section);
    CREATE INDEX IF NOT EXISTS idx_events_date ON events(event_date);
    CREATE INDEX IF NOT EXISTS idx_events_status ON events(status);
    CREATE INDEX IF NOT EXISTS idx_gallery_category ON gallery(category);
    CREATE INDEX IF NOT EXISTS idx_gallery_featured ON gallery(is_featured);
    CREATE INDEX IF NOT EXISTS idx_blog_status ON blog_posts(status);
    CREATE INDEX IF NOT EXISTS idx_blog_featured ON blog_posts(is_featured);
    CREATE INDEX IF NOT EXISTS idx_social_active ON social_media(is_active);
    CREATE INDEX IF NOT EXISTS idx_navigation_active ON navigation(is_active);
  `);
}

async function seedInitialData() {
  // Seed initial site content
  const existingContent = await db.get('SELECT id FROM site_content LIMIT 1');
  if (!existingContent) {
    await db.exec(`
      INSERT INTO site_content (section, key, content, content_type) VALUES
      ('hero', 'title', 'Orthodox Youth Lagos', 'text'),
      ('hero', 'subtitle', 'Connecting young hearts with ancient faith', 'text'),
      ('hero', 'cta_primary', 'Join Community', 'text'),
      ('hero', 'cta_secondary', 'Upcoming Events', 'text'),
      ('about', 'title', 'Faith • Community • Growth', 'text'),
      ('about', 'description', 'We are a vibrant community of young Orthodox believers in Lagos, Nigeria, committed to growing in faith and serving our community together.', 'text'),
      ('contact', 'email', 'youth@orthodoxng.com', 'email'),
      ('contact', 'phone', '+234 123 456 7890', 'phone'),
      ('contact', 'address', 'St. Nicholas Orthodox Church, Lagos, Nigeria', 'text')
    `);
  }

  // Seed social media platforms
  const existingSocial = await db.get('SELECT id FROM social_media LIMIT 1');
  if (!existingSocial) {
    await db.exec(`
      INSERT INTO social_media (platform, username, profile_url, display_name, display_order, is_active) VALUES
      ('facebook', 'orthodoxYouthLagos', 'https://facebook.com/orthodoxYouthLagos', 'Facebook', 1, 1),
      ('instagram', 'orthodox_youth_lagos', 'https://instagram.com/orthodox_youth_lagos', 'Instagram', 2, 1),
      ('youtube', 'OrthodoxYouthLagos', 'https://youtube.com/@OrthodoxYouthLagos', 'YouTube', 3, 1),
      ('tiktok', 'orthodoxYouthLagos', 'https://tiktok.com/@orthodoxYouthLagos', 'TikTok', 4, 1)
    `);
  }

  // Seed navigation items
  const existingNav = await db.get('SELECT id FROM navigation LIMIT 1');
  if (!existingNav) {
    await db.exec(`
      INSERT INTO navigation (label, href, display_order, is_active) VALUES
      ('Home', '#hero', 1, 1),
      ('About', '#about', 2, 1),
      ('Gallery', '#gallery', 3, 1),
      ('Events', '#events', 4, 1),
      ('Blog', '#blog', 5, 1),
      ('Connect', '#social', 6, 1)
    `);
  }

  // Seed site settings
  const existingSettings = await db.get('SELECT id FROM site_settings LIMIT 1');
  if (!existingSettings) {
    await db.exec(`
      INSERT INTO site_settings (key, value, description, category) VALUES
      ('site_name', 'Orthodox Youth Lagos', 'Website name', 'general'),
      ('site_description', 'Orthodox youth community in Lagos, Nigeria', 'Site meta description', 'seo'),
      ('primary_color', '#112722', 'Primary Orthodox green color', 'theme'),
      ('secondary_color', '#d3e97c', 'Orthodox gold color', 'theme'),
      ('accent_color', '#7dd6e8', 'Orthodox cyan color', 'theme'),
      ('enable_donations', '1', 'Enable donation functionality', 'features'),
      ('max_upload_size', '10485760', 'Maximum file upload size in bytes (10MB)', 'uploads')
    `);
  }

  console.log('✅ Initial data seeded successfully');
}

// Get database instance
export function getDatabase(): Database<sqlite3.Database, sqlite3.Statement> {
  if (!db) {
    throw new Error('Database not initialized. Call initializeDatabase() first.');
  }
  return db;
}

// Close database connection
export async function closeDatabase(): Promise<void> {
  if (db) {
    await db.close();
    console.log('📦 Database connection closed');
  }
}