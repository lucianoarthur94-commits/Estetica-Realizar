import { ServiceItem } from './types';

// Real generated high-fidelity image paths
export const IMAGES = {
  hero: '/src/assets/images/hero_eyebrow_studio_1792187841456.jpg',
  microblading: '/src/assets/images/service_microblading_1792187841497.jpg',
  designPersonalizado: '/src/assets/images/service_design_personalizado_1792187842712.jpg',
  micropigmentacao: '/src/assets/images/service_micropigmentacao_1792187842410.jpg',
  aboutStudio: '/src/assets/images/about_studio_salon_1792187843399.jpg',
};

export const CLINIC_INFO = {
  name: 'Clínica de Estética Realizar',
  shortName: 'Clínica Realizar',
  headline: 'A harmonia precisa que transforma o seu olhar.',
  subheadline: 'Visagismo facial exclusivo e micropigmentação de alto padrão em Lauro de Freitas.',
  phoneRaw: '(71) 99338-833',
  phoneSanitized: '557199338833',
  address: 'R. Juracy Magalhães, 30 - Pitangueiras, Lauro de Freitas - BA, 42700-000',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=R.+Juracy+Magalh%C3%A3es%2C+30+-+Pitangueiras%2C+Lauro+de+Freitas+-+BA%2C+42700-000',
  instagram: '@realizar.estetica',
  instagramUrl: 'https://instagram.com/realizar.estetica',
  hours: 'Atendimento exclusivo com hora marcada',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'microblading',
    name: 'Microblading',
    price: 350,
    duration: '2h',
    tagline: 'Fios hiper-realistas com efeito natural',
    description: 'Técnica manual milimétrica que desenha fios ultrafinos na mesma direção do crescimento natural, proporcionando preenchimento discreto e harmonia perfeita.',
    image: IMAGES.microblading,
    imageAlt: 'Microblading detalhado com fios hiper-realistas na sobrancelha',
    features: ['Fios desenhados um a um', 'Pigmento orgânico biocompatível', 'Durabilidade de 8 a 12 meses'],
  },
  {
    id: 'design-personalizado',
    name: 'Design Personalizado',
    price: 80,
    duration: '45min',
    tagline: 'Visagismo e alinhamento áureo',
    description: 'Mapeamento geométrico facial respeitando as proporções naturais dos seus traços. Limpeza milimétrica e acabamento que valoriza a expressão dos olhos.',
    image: IMAGES.designPersonalizado,
    imageAlt: 'Design personalizado de sobrancelhas com proporção áurea',
    features: ['Mapeamento com paquímetro áureo', 'Alinhamento dos arcos faciais', 'Finalização suave e personalizada'],
  },
  {
    id: 'micropigmentacao',
    name: 'Micropigmentação',
    price: 450,
    duration: '2h30',
    tagline: 'Efeito powder e densidade duradoura',
    description: 'Técnica de sombreamento aveludado (Shadow/Powder) que confere volume, acabamento de maquiagem suave e definição elegante sem agredir a pele.',
    image: IMAGES.micropigmentacao,
    imageAlt: 'Micropigmentação de sobrancelha com acabamento powder aveludado',
    features: ['Efeito sombreado aveludado', 'Ideal para quem busca densidade', 'Durabilidade de 12 a 18 meses'],
  },
];
