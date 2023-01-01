let instance;
let logArr = []

class CounterLog {
    constructor() {
        if (instance) {
            throw new Error("cant create");
        }
        instance = this;
    }

    log(msg = ''){
        logArr.push(msg)
    }

    getLogLength(){
        return logArr.length;
    }

    getLogList(){
        return logArr;
    }
}

const counterLog = Object.freeze(new CounterLog())
export default counterLog
