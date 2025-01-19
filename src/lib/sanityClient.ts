// lib/sanityClient.ts
import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '', // Sanity project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', // Dataset name
  apiVersion: '2023-01-01', // Lock API version for consistent behavior
  useCdn: true, // Use the CDN for faster response times
});

export default sanityClient;
