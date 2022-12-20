import { MetaTags } from '@redwoodjs/web'

const PsPage = () => {
  return (
    <>
      <MetaTags title="Products & Services" description="Ps page" />
      <div className="row-text center">
        <div className="md-col 12">
          <h2 className="sign-up-text"> Products & Services. </h2>
          <h2> Instant, no KYC cross-chain swaps. </h2>
          <p>
            Our swap engine has been optimized to provide nearly instant
            cross-chain swaps, and our ability to not require KYC enables us to
            create a service rivalling Uniswap.{' '}
          </p>
          <h2> Multi-chain, no KYC Tumbler. </h2>
          <p>
            Want to ensure that your coins are truly untrackable? Take advantage
            of our Tumbler.
          </p>
          <h2> Spot and Margin Derivatives trading. </h2>
          <p>
            We offer an industry-leading selection of token derivatives and spot
            listings for you to trade 24 hours a day, 365 days a year. Options,
            Futures, and Perpetual Swaps are all supported by Mobiuswap.
          </p>
        </div>
      </div>
      <footer className="footer">
        <p>© 2022 Orion Ventures</p>
      </footer>
    </>
  )
}

export default PsPage
