import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this';

/**
 * Hash a password
 */
export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

/**
 * Verify password against hash
 */
export async function verifyPassword(password, hash) {
  return bcrypt.compare(password, hash);
}

/**
 * Generate JWT token
 */
export function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d', // Token expires in 7 days
  });
}

/**
 * Verify JWT token
 */
export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

/**
 * Verify admin password
 */
export async function verifyAdminPassword(password) {
  const adminPasswordHash = resolveAdminPasswordHash();

  console.log('🔍 DEBUG - Verifying password...');
  console.log('🔍 ADMIN_PASSWORD_HASH exists:', !!adminPasswordHash);
  console.log('🔍 ADMIN_PASSWORD_HASH length:', adminPasswordHash?.length);
  console.log('🔍 Password received length:', password?.length);
  
  if (!adminPasswordHash) {
    console.error('❌ ADMIN_PASSWORD_HASH not set in environment variables');
    return false;
  }
  
  const result = await verifyPassword(password, adminPasswordHash);
  console.log('🔍 Password verification result:', result);
  return result;
}

/**
 * Generate password hash for setup
 * Usage: node -e "require('./lib/auth.js').generatePasswordHash('your-password')"
 */
export async function generatePasswordHash(password) {
  const hash = await hashPassword(password);
  console.log('Password hash:', hash);
  console.log('Add this to your .env.local as ADMIN_PASSWORD_HASH');
  return hash;
}

function resolveAdminPasswordHash() {
  const cleanedFromEnv = cleanHash(process.env.ADMIN_PASSWORD_HASH);

  if (cleanedFromEnv && cleanedFromEnv.length >= 40) {
    return cleanedFromEnv;
  }

  try {
    const envPath = path.join(process.cwd(), '.env');

    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      const match = content.match(/^\s*ADMIN_PASSWORD_HASH\s*=\s*(.+)\s*$/m);

      if (match) {
        const fromFile = cleanHash(match[1]);

        if (fromFile && fromFile.length >= 40) {
          return fromFile;
        }
      }
    }
  } catch (error) {
    console.warn('⚠️ Unable to read ADMIN_PASSWORD_HASH from .env file:', error);
  }

  return cleanedFromEnv;
}

function cleanHash(value) {
  if (!value) {
    return value;
  }

  return value.trim().replace(/^['"]+|['"]+$/g, '');
}

