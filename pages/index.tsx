import { useState } from "react"
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from "next/link"
import Nav from "../components/nav"

const Home: NextPage = () => {

  const [data, setData] = useState({
    input: ""
  })

  const { input } = data

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }


  const result = input.split(/[ |]+/).join(' | ')

  const distinct = (value: any, index: any, self: any) => {
    return self.indexOf(value) === index
  }

  const kamusResult = input.toLowerCase().split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/).sort().filter(distinct).join('\n')

  const duplicates = (arr: any) => {
    let array = arr
    let results: any = [];
    for (let i = 0; i < array.length; i++) {
      if (results.includes(array[i].toLowerCase())) {
        results.push(array[i].toLowerCase().strike())
      } else {
        results.push(array[i].toLowerCase())
      }
    }

    return results;
  }

  const duplicate = duplicates(input.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/))
  const duplicateResults = duplicate.join(' | ')

  return (
    <>
      <Head>
        <title>Bantuan Tugas Bahasa Sunda</title>
      </Head>
      <div className="Ud9sjd">
        <Nav />
        <div style={{ maxWidth: "768px", margin: "1rem auto 0 auto", padding: "1rem" }}>
          <Link href="/kbbi">
            <a>
              New update KBBI!
            </a>
          </Link>
        </div>
        <p className="Jasdj8">Bahasa Sunda Artikel</p>
        <div className="uasKa8">
          <div className="uJando">
            <label htmlFor="input">Paste text</label>
            <textarea
              name="input"
              id="input"
              className="sjd8Im"
              value={input}
              onChange={handleChange}
            >
            </textarea>
          </div>

          <div className="uJando">
            <label htmlFor="result">Hasil</label>
            <textarea
              name="result"
              id="result"
              className="sjd8Im"
              value={result}
              readOnly
            >
            </textarea>
          </div>

          <label>Kata yang duplikat</label>
          <div className="uJando Kpas9d">
            <code dangerouslySetInnerHTML={{ __html: duplicateResults }} />
          </div>

          <div className="uJando">
            <label htmlFor="kamus">Kata untuk kamus</label>
            <textarea
              name="kamus"
              id="kamus"
              className="sjd8Im"
              value={kamusResult}
              readOnly
            >
            </textarea>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
