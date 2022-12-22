/* eslint-disable react/no-unescaped-entities */
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <div className="row-text center">
        <div className="md-col 12">
          <h2 className="sign-up-text">
            {' '}
            By crypto natives, for crypto natives.
          </h2>
          <h2> Privacy. </h2>
          <p>
            At Infinicoin, we value the privacy of our customers above all else.
            Sensitive customer data, such as user KYC documents and banking
            information, is securely encrypted and only processed as absolutely
            needed.{' '}
          </p>
          <h2> Accountability. </h2>
          <p>
            User funds are held exactly 1:1 in every asset listed. We will{' '}
            <span style={{ fontWeight: 'bold' }}>never</span> rehypothecate user
            funds for any purposes, and we're actively exploring a solution for
            real-time, public Proof of Reserves.
          </p>
          <h2> Accessibility. </h2>
          <p>
            We've intentionally designed our UI/UX to be simple enough for
            crypto newcomers to use, while still offering a full-featured and
            robust selection of investment products and services for experienced
            users.
          </p>
          {/* <h2>Your Keys, Your Coins.</h2>
          <p>
            We've engineered a groundbreaking approach to allow customers to
            self-custody their coins while still being able to take advantage of
            all the services offered by Infinicoin. Never worry about solvency
            again.
          </p> */}
        </div>
      </div>
    </>
  )
}

export default AboutPage
