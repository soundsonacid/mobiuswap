// import { Link, routes } from '@redwoodjs/router'
import * as React from 'react'

import { MetaTags } from '@redwoodjs/web'

// import * as Handler from './eventHandler'

const LandingPage = () => {
  return (
    <>

      <MetaTags title="Landing" description="Landing page" />
      <h1>MobiuSwap</h1>
      <p>The next generation of exchange.</p>
      <h2>Built by Orion Ventures.</h2>
      <p>Sign up for alpha:</p>
      <div className="row text-center">
        <div className="col-md-4 align">
          <span>
            <input
              id="email"
              name="email"
              type="text"
              className="form-control"
              placeholder="mobiuswap@gmail.com"
              onChange={Handler.handleChange}
            ></input>
            <button style={{ marginTop: 15 }} className="btn btn-primary">
              Submit
            </button>
          </span>
        </div>
      </div>

      <script>
        const Handler = () => {
        return (
          const [email, setEmail] = useState('')

          const [updated, setUpdated] = useState(email)

          const handleChange = (event) => {
            setEmail((event.target as HTMLInputElement).value)
          };

          const handleClick = () => {
            setUpdated(email)
          };
        )
      }
      </script>
    </>
  )
}

export default LandingPage
