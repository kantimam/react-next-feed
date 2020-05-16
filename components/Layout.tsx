import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'Feed',
}) => (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
        |{' '}
          <Link href="/create">
            <a>Create</a>
          </Link>{' '}
        |{' '}
          <Link href="/users">
            <a>Users List</a>
          </Link>{' '}
        | <a href="/api/users">Users API</a>
        </nav>
      </header>
      {children}

    </div>
  )

export default Layout
