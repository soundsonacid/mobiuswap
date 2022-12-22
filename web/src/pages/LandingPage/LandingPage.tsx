import * as React from 'react'

import toast, { Toaster } from 'react-hot-toast'
import { CreateUserMutation, CreateUserMutationVariables } from 'types/graphql'

import { Form, FieldError, TextField, Submit, useForm } from '@redwoodjs/forms'
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
      <MetaTags title="Infinicoin" description="Infinicoin" />

      <Toaster />
      <div className="container-center">
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="sign-up-text">The next generation of exchange.</h2>
            <h3 className="sign-up-text">Sign up for alpha:</h3>
            <h2>
              <Form
                onSubmit={onSubmit}
                config={{ mode: 'onBlur' }}
                error={error}
                formMethods={formMethods}
                style={{ margin: '0 auto', width: '80%' }}
              >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <TextField
                    className="email-text"
                    name="email"
                    placeholder="w@infinicoin.com"
                    validation={{
                      required: true,
                    }}
                    errorClassName="error"
                  />
                </div>
                <FieldError name="Email" className="error" />
                <div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '40%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Submit className="submit-email-button" disabled={loading}>
                    Submit
                  </Submit>
                </div>
              </Form>
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
