let fs = require('fs');
Text = fs.readFileSync('input.txt');
Text = Text.toString();
function H(string)
{
    freqTable = new Object();
    lenOfString = string.length;
    result = 0;
    for (let i = 0; i < lenOfString; i++)
    {
        if (freqTable[string.charAt(i)])
        {
            freqTable[string.charAt(i)] += 1;
        }
        else
        {
            freqTable[string.charAt(i)] = 1;
        }
    }
    POWER = 0;
    for (let i in freqTable)
    {
        freqTable[i] /= lenOfString;
        POWER ++;
    }
    if (POWER > 1)
    {
        for (i in freqTable)
        {
            result -= freqTable[i] * Math.log(freqTable[i]);
        }
        result /= Math.log(POWER);
        return result;
    }
    return 0;
    

}

console.log(H('a'));