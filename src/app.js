import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import fetch from 'cross-fetch'
import { createBrowserHistory } from 'history'
import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import NextTrip from './components/NextTrip'
import About from './routes/About'
import Home from './routes/Home'
const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000', fetch }),
  cache: new InMemoryCache()
})

export const App = () => (
  <ApolloProvider client={client}>
    <>
      <Router history={createBrowserHistory()}>
        {/* <Navigation /> */}
        <Header />
        <NextTrip></NextTrip>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/graphql" component={() => {
            window.location.href = 'http://localhost:4000/'
            return null
          }} />
        </Switch>
        <Footer />
      </Router>
    </>
  </ApolloProvider>
)
