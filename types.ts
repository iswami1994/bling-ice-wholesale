export interface Product {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  badge?: {
    text: string;
    type: 'primary' | 'white' | 'dark';
  };
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Category {
  id: string;
  label: string;
  isActive?: boolean;
}