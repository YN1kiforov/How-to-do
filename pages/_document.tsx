import { Html, Head, Main, NextScript } from 'next/document'
import LeftSide from '../components/LeftSide'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className='wrapper'> 
          <LeftSide />
          <Main />
          <NextScript />
         </div> 
      </body>
    </Html>
  )
}
