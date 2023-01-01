import singleCounter from "../counter.js";
import counterLog from "../counterLog.js";

export default function RedButton() {
    const divStyle = {
        background: '#fc3131',
        color:'#ffffff',
        borderRadius:'20px'
    };

    return (
        <button id='red'
                style={divStyle}
                onClick={() => {
                    singleCounter.increment();
                    alert(singleCounter.getCount())
                    counterLog.log(`red button click, current total:${singleCounter.getCount()}`)
                    console.info(counterLog.getLogList())
                }}
        >
            ++count
        </button>
    )
}
