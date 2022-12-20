import type { ComponentMeta } from '@storybook/react'

import PsPage from './PsPage'

export const generated = () => {
  return <PsPage />
}

export default {
  title: 'Pages/PsPage',
  component: PsPage,
} as ComponentMeta<typeof PsPage>
