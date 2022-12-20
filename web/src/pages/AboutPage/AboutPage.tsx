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
            At Mobiuswap, we value the privacy of our customers above all else.
            Sensitive customer data, such as user KYC documents and banking
            information, is securely encrypted and only processed as absolutely
            needed.{' '}
          </p>
          <h2> Accountability. </h2>
          <p>
            User funds are held exactly 1:1 in every asset listed. We will never
            use customer funds in any way, shape, or form without express user
            consent, and we're actively exploring a solution for real-time,
            public PoR.
          </p>
          <h2> Accessibility. </h2>
          <p>
            We've intentionally designed our UI/UX to be simple enough for
            crypto newcomers to use, while still offering a full-featured and
            robust selection of investment products and services.
          </p>
        </div>
      </div>
      <footer className="footer">
        <p>© 2022 Orion Ventures</p>
      </footer>
    </>
  )
}

export default AboutPage
