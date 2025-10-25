import { CropOption } from '@/types';
import soybeanMeal from '@/assets/crops/soybean-meal.jpg';
import mustardCake from '@/assets/crops/mustard-cake.jpg';
import groundnutCake from '@/assets/crops/groundnut-cake.jpg';
import sunflowerMeal from '@/assets/crops/sunflower-meal.jpg';
import cottonseedCake from '@/assets/crops/cottonseed-cake.jpg';
import sesameCake from '@/assets/crops/sesame-cake.jpg';

export const cropOptions: CropOption[] = [
  {
    value: 'soybean_meal',
    label: 'Soybean Meal',
    image: soybeanMeal,
  },
  {
    value: 'mustard_cake',
    label: 'Mustard Cake',
    image: mustardCake,
  },
  {
    value: 'groundnut_cake',
    label: 'Groundnut Cake',
    image: groundnutCake,
  },
  {
    value: 'sunflower_meal',
    label: 'Sunflower Meal',
    image: sunflowerMeal,
  },
  {
    value: 'cottonseed_cake',
    label: 'Cottonseed Cake',
    image: cottonseedCake,
  },
  {
    value: 'sesame_cake',
    label: 'Sesame Cake',
    image: sesameCake,
  },
  {
    value: 'other',
    label: 'Other',
    image: '',
  },
];

export const getCropLabel = (value: string): string => {
  const crop = cropOptions.find(c => c.value === value);
  return crop?.label || value;
};

export const getCropImage = (value: string): string => {
  const crop = cropOptions.find(c => c.value === value);
  return crop?.image || '';
};
