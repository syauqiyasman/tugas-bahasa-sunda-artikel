import { useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import Nav from "../components/nav"

export default function KbbiPage({ data, error }: { data: any, error: any }) {

    /** API error handling */
    let definition, phrase

    try {
        definition = data.kateglo.definition
        phrase = data.kateglo.phrase
    } catch (err) {
        definition = false
        phrase = false
    }

    const [word, setWord] = useState({
        input: ""
    })

    const { input } = word

    const handleChange = (e: any) => {
        setWord({ ...word, [e.target.name]: e.target.value })
    }

    const router = useRouter()

    const handleSearch = (e: any) => {
        e.preventDefault()

        if (input === "") {
            router.push('/kbbi')
        } else {
            router.push({
                query: {
                    search: input,
                },
            })
        }
    }

    const { query } = router

    return (
        <>
            <Head>
                <title>KBBI</title>
            </Head>
            <div className="Ud9sjd">
                <Nav />
                <p className="Jasdj8">KBBI</p>
                <div className="uasKa8">
                    <div className="uJando">
                        <form>
                            <label htmlFor="input">Cari kata</label>
                            <div className="aoKADn">
                                <input
                                    name="input"
                                    id="input"
                                    className="Ysbaa0"
                                    value={input}
                                    onChange={handleChange}
                                    autoFocus
                                />
                                <button
                                    onClick={handleSearch}
                                    className="kasnd8"
                                >
                                    Cari
                                </button>
                            </div>
                        </form>
                    </div>
                    <div>
                        {phrase ? <h2>{data.kateglo.phrase}</h2> : null}

                        {query.search ? definition ? data.kateglo.definition.map((e: any) => (
                            <div key={e.def_num}>
                                <p>{`${e.def_num}. ${e.def_text}`}</p>
                            </div>
                        )) : `Kata "${query.search}" tidak ditemukan` : null}
                    </div>
                </div>
            </div>
            <div className="foiaj3">
                <div className="uasKa8">
                    <a href="https://github.com/ivanlanin/kateglo">API</a>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps({ query }: { query: any }) {
    let data, error

    if (query.search) {
        try {
            const res = await fetch(`https://kateglo.com/api.php?format=json&phrase=${query.search}`)
            data = await res.json()
            error = false
        } catch (err) {
            data = []
            error = true
        }

        return {
            props: { data, error }
        }
    }

    return {
        props: {}
    }
}
