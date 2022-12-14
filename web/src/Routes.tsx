// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import NavbarLayout from 'src/layouts/NavbarLayout/NavbarLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={NavbarLayout}>
        <Route path="/ps" page={PSPage} name="ps" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/landing" page={LandingPage} name="landing" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
