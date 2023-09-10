import { z } from "zod";

export const TicketSchema = z.object({
  title: z.string().min(10).max(100),
  status: z.enum(["aberto", "pendente", "fechado"]),
  description: z.string().min(10).max(1000),
  priority: z.optional(z.enum(["baixa", "média", "alta", "urgente"])),
  createdAt: z.string(), // Certifique-se de que o formato da data seja válido
  updatedAt: z.string(), // Certifique-se de que o formato da data seja válido
  comments: z.array(z.string()).optional(),
  category: z.string().optional(),
  resolutionStatus: z.optional(
    z.enum(["resolvido", "não resolvido", "em andamento"])
  ),
  createdBy: z.string(),
  sector: z.string(),
  store: z.string(),
  resolutionBy: z.string(),
  phone: z.string(),
});
