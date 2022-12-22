import { Link, routes } from '@redwoodjs/router'
type NavbarLayoutProps = {
  children?: React.ReactNode
}

const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  return (
    <>
      <header>
        <Link to={routes.landing()}>
          <img
            src="https://media.istockphoto.com/id/1012682886/vector/infinity-symbol-black-simple-with-discontinuation-isolated-vector.jpg?s=612x612&w=0&k=20&c=CFVfjIg4yAHCPFpBq_wWjkZtc7GekfGO6nfqjI9CQM4="
            alt="The logo"
            width="50"
            height="25"
          ></img>
        </Link>
        <a href="https://twitter.com/mobiuswap">
          <Link to={routes.about()}>About us.</Link>
        </a>
        <a href="https://twitter.com/mobiuswap">
          <Link to={routes.ps()}>Products & Services.</Link>
        </a>
        <a href="https://twitter.com/mobiuswap">
          <img
            src="https://ipsf.net/wp-content/uploads/2018/10/twitter-transparent-app-2-300x300.png"
            alt="Twitter"
            width="50"
            height="50"
            className="media-link"
          ></img>
        </a>
      </header>
      <main>{children}</main>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <footer
          className="footer"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <p>© 2022 Orion Ventures</p>
        </footer>
      </div>
    </>
  )
}

export default NavbarLayout
