export interface ImageType {
  src: string;
  alt?: string;
}

export interface Linktype {
  label: string;
  link?: string;
}

export interface AboutSectionData {
  headline: string;
  description: string;
  image: ImageType;
  contact: {
    name?: string;
    phone?: string;
    post?: string;
  }[];
}

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
  defaultSeo: {
    metaTitle: string;
    metaDescription: string;
    shareImage: string;
  };
  header: Linktype[];
  footer: {
    columns: [FooterColumn[]];
    partners: ImageType[];
    bottomLinks: Linktype[];
    socialLinks: Linktype[];
  };
}
