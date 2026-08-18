import { z } from 'zod';

export const authSignUpSchema = z.object({
    name: z.string({ message: 'Campo name é obrigatório'}),
    email: z.email('E-mail inválido')
})