import { Helia } from "helia"
import { useEffect, useState } from "react"
import { getHelia } from "../lib/helia"
import { multiaddr } from '@multiformats/multiaddr'
import { useHelia } from "../hooks/useHelia"


const DEFAULT_ADDR="/dns4/ipfs.myrandomdemos.online/udp/4001/quic-v1/webtransport/certhash/uEiBG-N803swzPt1xtPVNy4nQMV7GPrF7F--RSNU2ZNfFYw/certhash/uEiAQ5PAJet1_uTHD04Tyk_HzKQkbpkHWQ5EN9xhremyYvw/p2p/12D3KooWBzbXNBrKXzGpwXacuxQwkUiFJ1rho882HZDocKfdJB8Y"
const Dial = () => {
    const {helia} = useHelia()

    const [maStr, setMA] = useState<string>(DEFAULT_ADDR)

    const dial = async () => {
        if (!helia || !maStr) return
        const ma = multiaddr(maStr)
        console.log("dialing")
        await helia.libp2p.dial(ma)
        console.log("Dialed " + maStr)
    }

    return (
        <div>
        { helia &&
            <div>
                <input type="text"  size={50} onChange={(e) => setMA(e.target.value)} defaultValue={DEFAULT_ADDR} />
                <button onClick={() => dial()}>Dial</button>
            </div>
        }
        </div>
    )
}

export default Dial