function solve() {
    let myObj = {};
    let cloneObj = Object.create(myObj);

    cloneObj.extend = function (template) {
        Object.entries(template).forEach(([key, value]) => {
            if (typeof value === 'function') {
                myObj[key] = value;
            } else {
                cloneObj[key] = value;
            }
        });
    }
    return cloneObj;
}