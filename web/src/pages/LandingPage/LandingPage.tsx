import * as React from 'react'

import toast, { Toaster } from 'react-hot-toast'
import { CreateUserMutation, CreateUserMutationVariables } from 'types/graphql'

import { Form, Label, FieldError, TextField, Submit } from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'

// import { toast, Toaster } from '@redwoodjs/web/toast'

const CREATE_USER = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`

const LandingPage = () => {
  const [create, { loading }] = useMutation<
    CreateUserMutation,
    CreateUserMutationVariables
  >(CREATE_USER, {
    onCompleted: () => {
      toast.success('Alpha registration complete!')
    },
  })

  const onSubmit = (data) => {
    try {
      create({ variables: { input: data } })
    } catch (e) {
      console.log('Something went wrong.')
    }
  }

  return (
    <>
      <MetaTags title="Landing" description="Landing page" />
      <Toaster />
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h2>MobiuSwap</h2>
            <p>The next generation of exchange.</p>
            <p>Sign up for alpha:</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-12">
            <Form onSubmit={onSubmit}>
              <Label name="Email" errorClassName="error">
                {' '}
                Email:{' '}
              </Label>
              <TextField
                name="email"
                validation={{
                  required: true,
                  pattern: {
                    value: /^[^@]+@[^.]+\..+$/,
                    message: 'Please enter a valid email address',
                  },
                }}
                errorClassName="error"
              />
              <FieldError name="Email" className="error" />

              <Submit disabled={loading}>Submit</Submit>
            </Form>
            <h2>Built by Orion Ventures.</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
