import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

const APIurl = "https://my-json-server.typicode.com/rafianathallah/dbapicall/db"
const [showPosts, setshowPosts] = useState()

let displaydata
function pullJson() {
  fetch(APIurl)
  .then(response => response.json())
  .then(responsedata => {
    displaydata = responsedata.Tabel.map(function(todo) {
      return(
        <><h3 key={todo.No}>(No. {todo.No}) Nama: {todo.Nama}
        </h3>
        <p key={todo.No}>Nilai: {todo.Nilai}    Waktu: {todo.Waktu}
        </p>
        </>
        
        
        
      )
    })
    console.log(responsedata)
    setshowPosts(displaydata)
  })
}

useEffect(() => {
  pullJson()

},[])

  return (
    <div className={styles.container}>
      <Head>
        <title>JSON API Call test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Tabel Siswa dari JSON</h1>
        {showPosts}
      </main>
    </div>
  )
}
