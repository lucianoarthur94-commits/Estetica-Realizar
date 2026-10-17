export interface ServiceItem {
  id: string;
  name: string;
  price: number;
  duration: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
}

export interface BookingState {
  serviceId: string;
  date: string;
  timeSlot: string;
  clientName: string;
  clientPhone: string;
}
