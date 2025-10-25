export type UserRole = 'farmer' | 'buyer' | 'international_buyer' | 'cooperative' | 'admin';

export type CropType = 
  | 'soybean_meal'
  | 'mustard_cake'
  | 'groundnut_cake'
  | 'sunflower_meal'
  | 'cottonseed_cake'
  | 'sesame_cake'
  | 'other';

export type QualityGrade = 'A' | 'B' | 'C' | 'D';

export interface User {
  id: string;
  name: string;
  email: string;
  mobile: string;
  role: UserRole;
  avatar?: string;
  location?: string;
  createdAt: Date;
}

export interface Batch {
  id: string;
  farmerId: string;
  cropType: CropType;
  quantity: number;
  location: string;
  images: string[];
  status: 'pending' | 'analyzing' | 'graded' | 'listed' | 'sold';
  qualityGrade?: QualityGrade;
  confidenceScore?: number;
  biochemicalData?: BiochemicalData;
  recommendedPrice?: number;
  listedPrice?: number;
  createdAt: Date;
  certificateId?: string;
}

export interface BiochemicalData {
  proteinContent: number;
  moistureContent: number;
  oilResidue: number;
  fiberContent: number;
  ashContent: number;
  contaminantLevel: number;
}

export interface CropOption {
  value: CropType;
  label: string;
  image: string;
}
