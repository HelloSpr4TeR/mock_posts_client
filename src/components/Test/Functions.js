export default function checkBrackets(str) {
    let stack = [];
    let bracketsMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {
        if (Object.values(bracketsMap).includes(char)) {
            stack.push(char);

        } else if (Object.keys(bracketsMap).includes(char)) {
            if (stack.length === 0 || stack.pop() !== bracketsMap[char]) {

                return false;
            }
        }
    }

    return stack.length === 0;
}