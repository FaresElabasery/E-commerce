'use client'

import { Button } from "@/_Components/ui/button"
import { Minus, Plus } from "lucide-react"
import { useState } from "react"

export default function Incrementer() {
    const [counts, setCounts] = useState(0)
    return (
        <div className="flex items-center border-text2 border rounded-xs">
            <Button className=" bg-transparent hover:bg-hover-button1 border-text2  rounded-xs text-text2 p-3 border-r-1" onClick={() => counts > 0 && setCounts(counts - 1)}><Minus /></Button>
            <span className="w-20 font-medium  text-center">{counts }</span>
            <Button className="-r bg-button2 hover:bg-hover-button2  rounded-xs text-text p-3" onClick={() => setCounts(counts + 1)}><Plus /></Button>
        </div>
    )
}
