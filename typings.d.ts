export interface ImageType {
  src: string;
  alt?: string;
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
