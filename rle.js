function encodeRLE(text)
{
    lenOfText = text.length;
    counter = 1;
    encodedText = ''
    for (i = 0; i < lenOfText; i++)
    {
        if (text[i] == text[i + 1])
        {
            counter++;
        }
        else
        {
            while (counter > 255)
            {
                encodedText += '#' + String.fromCharCode(255) + text[i];
                counter -= 255;
            }
            if (counter > 3 || text[i] == '#') 
            {
                encodedText += '#' + String.fromCharCode(counter) + text[i];
            } 
            else {
                encodedText += text[i].repeat(counter);
            }
            counter = 1;
        }
    }
    return encodedText;
}


function decodeRLE(text)
{
    i = 0;
    lenOfText = text.length;
    decodedText = ''
    while (i < lenOfText) {
        if (text[i] == '#') {
            counter = text.charCodeAt(i + 1);
            if (counter > 0) {
                decodedText += text[i + 2].repeat(counter);
            }
            i += 3; 
        } 
        else 
        {
            decodedText += text[i];
            i++;
        }
    }
    return decodedText;
}
let fs = require('fs'); 
Text = fs.readFileSync('input.txt'); 
start_string = Text.toString();
console.log(encodeRLE(start_string));
console.log(decodeRLE(encodeRLE(start_string)));
