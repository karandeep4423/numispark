import { NextResponse } from 'next/server';
import { verifyToken } from './auth';

/**
 * Middleware to verify admin authentication
 * Use this in API routes that require authentication
 */
export async function verifyAuth(request) {
  const token = request.cookies.get('admin-token');

  if (!token) {
    return {
      authenticated: false,
      response: NextResponse.json(
        { error: 'Unauthorized - No token provided' },
        { status: 401 }
      ),
    };
  }

  const decoded = verifyToken(token.value);

  if (!decoded || !decoded.admin) {
    return {
      authenticated: false,
      response: NextResponse.json(
        { error: 'Unauthorized - Invalid token' },
        { status: 401 }
      ),
    };
  }

  return { authenticated: true, user: decoded };
}

/**
 * HOC to wrap API route handlers with authentication
 */
export function withAuth(handler) {
  return async (request, context) => {
    const authResult = await verifyAuth(request);

    if (!authResult.authenticated) {
      return authResult.response;
    }

    return handler(request, context);
  };
}

