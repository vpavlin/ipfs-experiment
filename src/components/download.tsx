import { useState } from "react";
import { useHelia } from "../hooks/useHelia";
import { CID } from 'multiformats/cid'



const DEFAULT_OBJECT = '{"hello": "world"}'

const Download = () => {
    const {json} = useHelia()
    const [data, setData] = useState<any>()
    const [cid, setCID] = useState<string>()

    const upload = () => {
        if (!json || !cid) return

        
        const c = CID.parse(cid)
        console.log("Getting "+ cid)
        json.get(c).then((data) => {
            setData(data)
            console.log("Done! "+ cid)
        })

    }
    return (
        <div>
            <input  onChange={(e) => setCID(e.target.value)} />
            <button onClick={() => upload()}>Download</button>
            <div>{JSON.stringify(data)}</div>
        </div>
    )
}

export default Download;