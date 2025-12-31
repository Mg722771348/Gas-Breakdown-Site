
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
