export interface CallState {
  _id: string;
  title: string;
  status: "aberto" | "pendente" | "fechado";
  description: string;
  priority?: "baixa" | "média" | "alta" | "urgente";
  createdAt: string;
  updatedAt: string;
  comments?: string[];
  category?: string;
  resolutionStatus?: "resolvido" | "não resolvido" | "em andamento";
  createdBy: string;
  sector: string;
  store: string;
  resolutionBy: string;
  phone: string;
}

export interface User {
  name: string;
  email: string;
  password: string;
  role: "ADMIN" | "USER";
}
