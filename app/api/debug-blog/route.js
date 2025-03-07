import { debugBlogFiles } from '@/lib/blog';

export async function GET() {
  const debugInfo = debugBlogFiles();
  
  return Response.json(debugInfo);
}
