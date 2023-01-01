import singleCounter from "../counter.js";

export default function BlueButton(){
    const divStyle = {
        background: '#31b1fc',
        color:'#ffffff',
        borderRadius:'20px'
    };

    return (
        <button id='blue'
                style={divStyle}
        onClick={()=>{
            singleCounter.decrement();
            alert(singleCounter.getCount())
        }}
        >
            --count
        </button>
    )
}
