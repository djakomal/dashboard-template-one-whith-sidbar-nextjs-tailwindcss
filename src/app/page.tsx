import Head from 'next/head'
import Header from '@/components/Header'
import Card from '@/components/Card'
export default function Home() {
  return (
    <>  <Head>
        <meta title='Dashbaord-sidbar' content=''></meta>
        <meta name='viewport' content=''></meta>
        <link rel='icon' href=''></link>
        </Head>
          <main className='bg-gray-100 min-h-screen'>
       <Header/>
      </main>
    </>
  )
}
