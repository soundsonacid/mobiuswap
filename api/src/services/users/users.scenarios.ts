import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { email: 'String4406581' } },
    two: { data: { email: 'String7425924' } },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
