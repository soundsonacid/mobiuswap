type NavbarLayoutProps = {
  children?: React.ReactNode
}

const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  return (
    <>
      <nav>
        <header>
          <a href="google.com">
            <img
              src="https://media.istockphoto.com/id/1012682886/vector/infinity-symbol-black-simple-with-discontinuation-isolated-vector.jpg?s=612x612&w=0&k=20&c=CFVfjIg4yAHCPFpBq_wWjkZtc7GekfGO6nfqjI9CQM4="
              width="100"
              height="50"
              alt="Mobius Logo"
            />
          </a>
          <a href="https://mobiuswap.xyz">About us.</a>
          <a href="https://twitter.com/mobiuswap" className="media-link">
            <img
              src="https://ipsf.net/wp-content/uploads/2018/10/twitter-transparent-app-2-300x300.png"
              width="50"
              height="50"
              className="media-link"
              alt="Twitter Logo"
            />
          </a>
        </header>
      </nav>
      <main>{children}</main>
    </>
  )
}

export default NavbarLayout
