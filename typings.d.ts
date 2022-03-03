import { OrganizationJsonLdProps } from "next-seo";

export interface ImageType {
  src: string;
  alt?: string;
}

export interface Linktype {
  label: string;
  link?: string;
}

export interface LatLng {
  lat: number;
  lng: number;
}

export interface SectionData {
  headline: string;
  description: string;
  image: ImageType;
}

export interface ContactSectionData extends SectionData {
  email: string;
  phone: string;
  location: LatLng;
}
export interface AboutSectionData extends SectionData {
  contact: {
    name?: string;
    phone?: string;
    post?: string;
  }[];
}

export interface FeaturesSectionData extends SectionData {
  features: {
    title: string;
    icon: string;
    description?: string;
  }[];
}

export interface LandingSectionData extends SectionData {
  images: ImageType[];
}

export interface GallerySectionData extends LandingSectionData {}

export interface MapSectionData extends SectionData {}

export interface CharacteristicType {
  name: string;
  label: string;
  details?: string;
}

export interface VipPackagetype {
  title: string;
  description: string;
  image: ImageType;
}

export interface SpaceType {
  slug: string;
  title: string;
  subtitle: string;
  description: string[];
  images: ImageType[];
  availability: string[];
  price: string[];
  vip: VipPackagetype[];
  characteristics: {
    key: CharacteristicType[];
    equipment: CharacteristicType[];
  };
  extras: {
    catering: CharacteristicType[];
    equipment: CharacteristicType[];
  };
  technology: {
    description: string;
    images?: ImageType[];
  };
}

export interface FooterColumn {
  heading: string;
  body: string;
}
export interface GlobalData {
  siteName: string;
  defaultSeo?: {
    title: string;
    description: string;
    shareImage: string;
  };
  header: Linktype[];
  footer: {
    columns: [FooterColumn[]];
    partners: ImageType[];
    bottomLinks: Linktype[];
    socialLinks: Linktype[];
  };
  organization?: OrganizationJsonLdProps;
}
