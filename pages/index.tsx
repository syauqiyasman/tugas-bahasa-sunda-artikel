import { useState } from "react"
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {

  const [data, setData] = useState({
    input: ""
  })

  const { input } = data

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }


  const result = input.split(/[ |]+/).join(' | ')

  const duplicates = (arr: any) => {
    let sorted_arr = arr.slice().sort()

    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1].toLowerCase() == sorted_arr[i].toLowerCase()) {
        results.push(sorted_arr[i])
      }
    }
    return results;
  }

  const duplicate = duplicates(input.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/))
  const duplicateResults = duplicate.join(', ')

  const distinct = (value: any, index: any, self: any) => {
    return self.indexOf(value) === index
  }

  const kamusResult = input.toLowerCase().split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/).sort().filter(distinct).join('\n')

  return (
    <>
      <Head>
        <title>Bantuan Tugas Bahasa Sunda</title>
      </Head>
      <p className="Jasdj8">Bahasa Sunda Artikel</p>
      <div className="Ud9sjd">
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

          <div className="uJando">
            <label htmlFor="duplicateResults">Kata yang duplikat</label>
            <textarea
              name="duplicateResults"
              id="duplicateResults"
              className="sjd8Im"
              value={duplicateResults}
              readOnly
            >
            </textarea>
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
