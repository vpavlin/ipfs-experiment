import { useState } from "react";
import { useHelia } from "../hooks/useHelia";


const DEFAULT_OBJECT = '{"hello": "world"}'

const Upload = () => {
    const {json} = useHelia()
    const [data, setData] = useState<any>(JSON.parse(DEFAULT_OBJECT))
    const [cid, setCID] = useState<string>()

    const upload = () => {
        if (!json || !data) return

        
        json.add(data).then((cid) => setCID(cid.toString()))

    }
    return (
        <div>
            <textarea defaultValue={DEFAULT_OBJECT} onChange={(e) => setData(JSON.parse(e.target.value))}></textarea>
            <button onClick={() => upload()}>Upload</button>
            <div>{cid}</div>
        </div>
    )
}

export default Upload;