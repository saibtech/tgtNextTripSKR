import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { createBrowserHistory } from 'history'
import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import NextTrip from './components/NextTrip'
import About from './routes/About'
import Home from './routes/Home'
import Sample from './routes/Sample'
const client = new ApolloClient({
  uri: 'http://localhost:4000',
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
          <Route path="/sample" component={Sample} />
        </Switch>
        <Footer />
      </Router>
    </>
  </ApolloProvider>
)


