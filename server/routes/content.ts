import express from 'express';
import { getDatabase } from '../models/database.ts';

const router = express.Router();

// Get all site content or by section
router.get('/', async (req, res) => {
  try {
    const db = getDatabase();
    const { section } = req.query;
    
    let query = 'SELECT * FROM site_content';
    let params: any[] = [];
    
    if (section) {
      query += ' WHERE section = ?';
      params.push(section);
    }
    
    query += ' ORDER BY section, key';
    
    const content = await db.all(query, params);
    res.json({ success: true, data: content });
  } catch (error) {
    console.error('Error fetching site content:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch content' });
  }
});

// Get specific content by section and key
router.get('/:section/:key', async (req, res) => {
  try {
    const db = getDatabase();
    const { section, key } = req.params;
    
    const content = await db.get(
      'SELECT * FROM site_content WHERE section = ? AND key = ?',
      [section, key]
    );
    
    if (!content) {
      return res.status(404).json({ success: false, error: 'Content not found' });
    }
    
    res.json({ success: true, data: content });
  } catch (error) {
    console.error('Error fetching content:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch content' });
  }
});

// Update content (admin only - auth middleware would be added later)
router.put('/:section/:key', async (req, res) => {
  try {
    const db = getDatabase();
    const { section, key } = req.params;
    const { content, content_type = 'text' } = req.body;
    
    if (!content) {
      return res.status(400).json({ success: false, error: 'Content is required' });
    }
    
    const result = await db.run(
      `UPDATE site_content 
       SET content = ?, content_type = ?, updated_at = CURRENT_TIMESTAMP 
       WHERE section = ? AND key = ?`,
      [content, content_type, section, key]
    );
    
    if (result.changes === 0) {
      // Insert new content if it doesn't exist
      await db.run(
        `INSERT INTO site_content (section, key, content, content_type) 
         VALUES (?, ?, ?, ?)`,
        [section, key, content, content_type]
      );
    }
    
    res.json({ success: true, message: 'Content updated successfully' });
  } catch (error) {
    console.error('Error updating content:', error);
    res.status(500).json({ success: false, error: 'Failed to update content' });
  }
});

export default router;