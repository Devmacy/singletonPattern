import singleCounter from "../counter.js";
import counterLog from "../counterLog.js";

export default function BlueButton() {
    const divStyle = {
        background: '#31b1fc',
        color: '#ffffff',
        borderRadius: '20px'
    };

    return (
        <button id='blue'
                style={divStyle}
                onClick={() => {
                    singleCounter.decrement();
                    alert(singleCounter.getCount())
                    counterLog.log(`blue button click, current total:${singleCounter.getCount()}`)
                    console.info(counterLog.getLogList())
                }}
        >
            --count
        </button>
    )
}
