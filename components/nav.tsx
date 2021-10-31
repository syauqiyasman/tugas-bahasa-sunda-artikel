import Link from "next/link"

export default function Nav() {
    return (
        <>
            <div className="Tdazu1">
                <div className="Tdazu2">
                    <div className="Tdazu3">
                        <Link href="/">
                            <a>
                                Sunda
                            </a>
                        </Link>
                    </div>
                    <div className="Tdazu3">
                        <Link href="/kbbi">
                            <a>
                                KBBI
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
