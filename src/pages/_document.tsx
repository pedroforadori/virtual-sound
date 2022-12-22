import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Code+Latin:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-app bg-cover bg-center bg-no-repeat bg-fixed overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
