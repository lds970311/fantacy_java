const isValid = s => {
    const len = s.length;
    const stack = []
    for (let i = 0; i < len; i++) {
        let c = s.charAt(i);
        if (c === '[' || c === '(' || c === '{') {
            stack.push(c);
        } else {
            if (stack.length === 0) return false;
            let leftChar = stack.pop();
            if (leftChar === '(' && c !== ')') return false;
            if (leftChar === '[' && c !== ']') return false;
            if (leftChar === '{' && c !== '}') return false;
        }
    }
    if (stack.length === 0) {
        return true;
    }

    return false;
};


console.log(isValid("()"));