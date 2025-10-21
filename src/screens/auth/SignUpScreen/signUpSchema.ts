import { z } from 'zod'

const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim

export const signUpSchema = z.object({
  username: z.string().regex(usernameRegex, 'Username inválido'),
  fullName: z
    .string()
    .min(5, 'nome muito curto')
    .max(50, 'nome muito longo')
    .transform(value => {
      return value
        .split(' ')
        .map(word =>
          word
            .charAt(0)
            .toUpperCase()
            .concat(word.substring(1).toLocaleLowerCase())
        )
        .join(' ')
    }),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres')
})

export type SignUpSchema = z.infer<typeof signUpSchema>
