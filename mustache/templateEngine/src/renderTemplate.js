/**
 * 让tokens变为dom字符串
 * @param tokens
 * @param data
 */
export default function renderTemplate(tokens, data) {
    let resStr = ''
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];

        if (token[0] == 'text') {
            resStr += token[1]
        }else if (token[0] == 'name') {

        }
    }
}
