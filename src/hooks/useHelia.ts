import { Helia } from "helia"
import { useEffect, useMemo, useState } from "react"
import { getHelia } from "../lib/helia"
import { UnixFS, unixfs } from "@helia/unixfs"
import { JSON, json } from "@helia/json"


export const useHelia = () => {
    const [helia, setHelia] = useState<Helia>()
    const [jsonH, setJSON] = useState<JSON>()
    const [fs, setFS] = useState<UnixFS>()

    const [conns, setConns] = useState<string[]>([])


    useEffect(() => {
      if (!helia) return
  
      helia.libp2p.addEventListener("peer:connect", (e) => {
        setConns(helia.libp2p.getConnections().map((v) => v.remoteAddr.toString()))
      })

      const fs = unixfs(helia)
      setFS(fs)

      setJSON(json(helia))
    }, [helia])

    

    useEffect(() => {
        (async () => {
          setHelia(await getHelia())
        })()
      }, [helia])

    return useMemo(() => ({
        helia,
        fs,
        conns,
        json: jsonH,
    }), [
        helia,
        fs,
        jsonH,
        conns
    ])
}

