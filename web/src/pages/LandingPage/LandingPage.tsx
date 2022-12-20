import * as React from 'react'

import toast, { Toaster } from 'react-hot-toast'
import { CreateUserMutation, CreateUserMutationVariables } from 'types/graphql'

import {
  Form,
  Label,
  FieldError,
  TextField,
  Submit,
  useForm,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'

const CREATE_USER = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`
const LandingPage = () => {
  const formMethods = useForm({ mode: 'onBlur' })

  const [create, { loading, error }] = useMutation<
    CreateUserMutation,
    CreateUserMutationVariables
  >(CREATE_USER, {
    onCompleted: () => {
      toast.success('Alpha registration complete!')
      formMethods.reset()
    },
    onError: () => {
      toast.error('Registration error.')
      formMethods.reset()
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <>
      <MetaTags title="Mobius" description="Mobiuswap" />

      <Toaster />
      <div className="container-center">
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="sign-up-text">The next generation of exchange.</h2>
            <h2>
              <Form
                onSubmit={onSubmit}
                config={{ mode: 'onBlur' }}
                error={error}
                formMethods={formMethods}
                style={{ margin: '0 auto', width: '80%' }}
              >
                <Label name="Email" errorClassName="error">
                  {' '}
                  Email:{' '}
                </Label>
                <TextField
                  name="email"
                  validation={{
                    required: true,
                  }}
                  errorClassName="error"
                />
                <FieldError name="Email" className="error" />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Submit disabled={loading}>Submit</Submit>
                </div>
              </Form>
            </h2>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>© 2022 Orion Ventures</p>
      </footer>
    </>
  )
}

export default LandingPage
