import * as React from 'react'

import toast, { Toaster } from 'react-hot-toast'
import { CreateUserMutation, CreateUserMutationVariables } from 'types/graphql'

import {
  Form,
  Label,
  FieldError,
  FormError,
  TextField,
  Submit,
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
  const [create, { loading, error }] = useMutation<
    CreateUserMutation,
    CreateUserMutationVariables
  >(CREATE_USER, {
    onCompleted: () => {
      toast.success('Alpha registration complete!')
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <>
      <MetaTags title="Mobius" description="Mobiuswap" />
      <Toaster />
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h1>Mobius.</h1>
            <h2>The next generation of exchange.</h2>
            <h2>Sign up for alpha:</h2>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-12">
            <h2>
              <Form
                onSubmit={onSubmit}
                config={{ mode: 'onBlur' }}
                error={error}
              >
                <FormError error={error} wrapperClassName="form-error" />
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

                <Submit disabled={loading}>Submit</Submit>
              </Form>
            </h2>
            <h2>Built by Orion Ventures.</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
