import Head from 'next/head'

type Props = {
  colors: string[]
}

export default function Home({ colors }: Props) {
  return (
    <div style={{ maxWidth: 1024, margin: '0 auto', padding: 20 }}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        Colors from API:
        <ul>
          {colors.map((color) => (
            <li key={color}>{color}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/colors`)
  const { colors } = await response.json()

  return {
    props: { colors }
  }
}
