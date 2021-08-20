import { getAnchorAndDmcList } from "../utils/anchorAndDmc"
import { getAnchorColourList } from "../utils/anchorColour"
import { getDmcColourList } from "../utils/dmcColour"


const AnchorToDmc = () => {


    const sorted = getAnchorAndDmcList()
    const dmcColourList = getDmcColourList()
    const anchorColourList = getAnchorColourList()

    return (<div style={{ width: '100%' }} >
        {
            sorted.map((entry, index) => {
                return (
                    <div key={index}>
                        <div style={{ backgroundColor: anchorColourList.get(entry.anchor ?? "white") }}>
                            {"Anchor: " + entry.anchor}
                        </div>
                        <div style={{ backgroundColor: dmcColourList.get(entry.dmc ?? "white") }}>
                            {"DMC: " + entry.dmc}
                        </div>
                    </div>
                )

            })
        }
    </div>)
}

export default AnchorToDmc