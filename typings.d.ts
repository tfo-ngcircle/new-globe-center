import { OrganizationJsonLdProps } from "next-seo";

export interface ImageType {
  src: string;
  alt?: string;
}

export interface Linktype {
  label: string;
  link?: string;
  newTab?: boolean;
}

export interface LatLng {
  lat: number;
  lng: number;
}

export interface Section<T> {
  anchor: string;
  headline: string;
  description?: string;
  image?: Entity<MediaType>;
  content?: T[];
}

export interface ImagesSection {
  image: Entity<MediaType>;
}

export interface Contact {
  name?: string;
  telephone?: string;
  contactType?: string;
  areaServed: string;
  availableLanguage?: string;
  email?: string;
}

export interface FeaturesSectionData extends SectionData {
  features: {
    title: string;
    icon: string;
    description?: string;
  }[];
}

export interface FooterColumn {
  heading: string;
  body: string;
}

// Simple SEO
export interface SEO {
  title: string;
  description: string;
  images?: Entities<MediaType>;
}

// Data that is available on all pages
export interface GlobalData {
  siteName: string;
  defaultSeo?: SEO;
  header: Linktype[];
  footer: {
    columns: [FooterColumn[]];
    bottomLinks: Linktype[];
    socialLinks: Linktype[];
  };
  organization?: OrganizationJsonLdProps;
}

// Data from Backend

export interface Data<T> {
  id: number;
  attributes: T;
}

export interface Entity<T> {
  data?: Data<T>;
}

export interface Entities<T> {
  data?: Data<T>[];
}

export interface MediaType {
  name?: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: {
    thumbnail: {
      name: string;
      mime: string;
      width: number;
      height: number;
      size: number;
      url: string;
    };
  };
  mime?: string;
  url: string;
}

export interface PageType {
  slug: string;
  title: string;
  markdown?: string;
  seo?: SEO;
}

export interface PriceType {
  name: string;
  amount: number;
}

export interface VipPackagetype {
  title: string;
  description: string;
  image: Enitiy<MediaType>;
}

export interface SpaceType {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  images: Entities<MediaType>;
  availability: string[];
  prices: Entities<PriceType>;
  vip_packages: Entities<VipPackagetype>;
  characteristics: {
    key: Entities<CharacteristicType>;
    equipment: Entities<CharacteristicType>;
  };
  extras: {
    key: Entities<CharacteristicType>;
    equipment: Entities<CharacteristicType>;
  };
  technology: {
    description: string;
    images?: Entities<MediaType>;
  };
}

export interface CharacteristicType {
  name: string;
  label: string;
  details?: string;
}
