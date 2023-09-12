import { z } from "zod";

export const TicketSchema = z.object({
  title: z
    .string({
      required_error: "O título é obrigatório",
    })
    .min(5, {
      message: "O título deve ter no mínimo 5 caracteres",
    })
    .max(50, {
      message: "O título deve ter no máximo 50 caracteres",
    })
    .nonempty({
      message: "O título não pode ser vazio",
    }),
  status: z.optional(z.enum(["aberto", "pendente", "fechado"])),
  description: z
    .string({
      required_error: "A descrição é obrigatória",
    })
    .min(10, {
      message: "A descrição deve ter no mínimo 10 caracteres",
    })
    .max(1000, {
      message: "A descrição deve ter no máximo 1000 caracteres",
    })
    .nonempty({
      message: "A descrição não pode ser vazia",
    }),
  priority: z.optional(
    z.enum(["baixa", "media", "alta", "urgente"])
  ),
  createdAt: z.string().default(() => new Date().toISOString()),
  updatedAt: z.string().default(() => new Date().toISOString()).optional(),
  comments: z.array(z.string()).optional(),
  category: z.string().optional(),
  resolutionStatus: z.optional(
    z.enum(["resolvido", "não resolvido", "em andamento"])
  ),
  createdBy: z
    .string({
      required_error: "Seu nome é obrigatório",
    })
    .nonempty({
      message: "Seu nome é obrigatório",
    }),
  sector: z
    .string({
      required_error: "O setor é obrigatório",
    })
    .nonempty({
      message: "O setor não pode ser vazio",
    }),
  store: z
    .string({
      required_error: "A loja é obrigatória",
    })
    .nonempty({
      message: "Precisa dizer qual loja",
    }),
  resolutionBy: z.string().optional(),
  phone: z
    .string({
      required_error: "O telefone é obrigatório",
    })
    .nonempty({
      message: "Informar telefone para contato!",
    }),
});
