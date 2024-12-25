function bruteForce(text, textToFind) {
    arrOfSubstrings = new Array();
    r = textToFind.length; //длина подстроки, она по сути является длиной смещения
    l = text.length; //длина изначальной строки. чтобы мы знали, до куда идти в цикле.
    cnt = 0; //по сути нужно чтобы просто добавлять новое вхождения в наш эррей
    for (let i = 0; i < l - r + 1; i++) {
        if (text.substring(i, i + r) == textToFind) {
            arrOfSubstrings[cnt] = i;
            cnt++;
        }
    }
    return arrOfSubstrings;
}

function ascii_hashes(text, textToFind) {
    hashOfSubstring = 0;
    hashOfCurrentText = 0;
    r = textToFind.length; //длина подстроки, она по сути является длиной смещения
    l = text.length; //длина изначальной строки. чтобы мы знали, до куда идти в цикле.
    cnt = 0; //по сути нужно чтобы просто добавлять новое вхождения в наш эррей
    arrOfSubstrings = new Array();
    collisions = 0;
    //тут считаем хэш подстроки и начальной части текста, длиной с длину подстроки
    for (let i = 0; i < r; i++) {
        hashOfSubstring += textToFind[i].charCodeAt(0);
        hashOfCurrentText += text[i].charCodeAt(0);
    }
    for (let i = 0; i <= l - r; i++) {
        if (hashOfCurrentText === hashOfSubstring) {
            if (text.substring(i, i + r) == textToFind) {
                arrOfSubstrings[cnt] = i;
                cnt++;
            }
            else {
                collisions += 1;
            }
        }
        if (i != l - r)
            hashOfCurrentText = hashOfCurrentText - text[i].charCodeAt(0) + text[i + r].charCodeAt(0);
    }
    console.log("количество коллизий: " + collisions.toString());
    return arrOfSubstrings;
}
function RabinKarp(text, textToFind)
{
    hashOfSubstring = 0;
    hashOfCurrentText = 0;
    r = textToFind.length; //длина подстроки, она по сути является длиной смещения
    l = text.length; //длина изначальной строки. чтобы мы знали, до куда идти в цикле.
    cnt = 0; //по сути нужно чтобы просто добавлять новое вхождения в наш эррей
    arrOfSubstrings = new Array();
    collisions = 0;
    d = 2;
    for (let i = 0; i < r; i++) 
    {
        hashOfSubstring += textToFind[i].charCodeAt(0) * Math.pow(2, r - i);
        hashOfCurrentText += text[i].charCodeAt(0) * Math.pow(2, r - i);
    }
    for (let i = 0; i <= l - r; i++) {
        if (hashOfCurrentText === hashOfSubstring) {
            if (text.substring(i, i + r) == textToFind) 
            {
                arrOfSubstrings[cnt] = i;
                cnt++;
            }
            else 
            {
                collisions += 1;
            }
        }
        if (i != l - r)
            hashOfCurrentText = (hashOfCurrentText - text[i].charCodeAt(0) * Math.pow(2, r)) * 2 + text[i + r].charCodeAt(0) * 2;
    }
    console.log("количество коллизий: " + collisions.toString());
    return arrOfSubstrings;


}
console.log(bruteForce('abababababababababa', 'baba'))
console.log(ascii_hashes('abababababababababa', 'baba'));
console.log(RabinKarp('abababababababababa', 'baba'));
