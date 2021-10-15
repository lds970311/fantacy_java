const compiler = require("../utils/Compiler");

// @ts-ignore
const addVueComponentAction = function (name: string, destination: string | undefined) {
    compiler("component.vue.ejs", {name, lowerName: name.toLowerCase()})
        .then(res => {
            console.log(res);
        })
        .catch(err => console.error(err));
}

module.exports = addVueComponentAction
