import type { ComponentType, SVGProps } from 'react';

export enum MediaType {
  Image = 'image',
  Video = 'video',
}

export interface MediaItem {
  id: number;
  type: MediaType;
  src: string;
  alt: string;
  span?: string;
}

export interface SectionData {
  id: string;
  title: string;
  description: string;
  media: MediaItem[];
  chart?: string; // URL or path to chart image
  words?: Array<{ title: string; content: string }>; // Individual word items to interleave with photos
}

export interface SocialLink {
  name: string;
  url: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

