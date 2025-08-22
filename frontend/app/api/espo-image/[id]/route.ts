import { NextRequest, NextResponse } from 'next/server';

const ESPOCRM_BASE_URL = 'https://kepr.pl';
const API_KEY = '42e09d451fa151de753dbf94b5616808';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    // Fetch image from EspoCRM
    const response = await fetch(`${ESPOCRM_BASE_URL}/?entryPoint=attachment&id=${id}`, {
      headers: {
        'X-Api-Key': API_KEY,
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      return new NextResponse('Image not found', { status: 404 });
    }

    // Get the image data
    const imageBuffer = await response.arrayBuffer();
    
    // Get content type from response or default to image/jpeg
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    // Return the image with proper headers
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Error fetching EspoCRM image:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
