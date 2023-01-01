import singleCounter from "../counter.js";

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
                }}
        >
            ++count
        </button>
    )
}
