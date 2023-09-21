import { z } from 'zod';

export const createSchema = z.object({
	title: z.string().nonempty('O nome da tecnologia é obrigatório').trim(),
	status: z.string().nonempty('O status é obrigatório'),
});

export const editSchema = z.object({
	status: z.string().nonempty('O status é obrigatório'),
});
