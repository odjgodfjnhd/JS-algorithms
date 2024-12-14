let fs = require('fs');
var Sstring = fs.readFileSync('input_string.txt');
var String = Sstring.toString();

function Node(name, freq, used, parent, code)
{
    this.name = name;
    this.freq = freq;
    this.used = used;
    this.parent = parent;
    this.code = code;
}

function reverse(s){
    return s.split("").reverse().join("");
}
inLength = String.length;
//initilization
alph = new Object();
for(let i = 0; i < String.length; i++)
{
	if(alph[String.charAt(i)])
		alph[String.charAt(i)] ++
	else
		alph[String.charAt(i)] = 1;
}

alphPower = 0;
tree = new Array();
for(let i in alph)
{
    alphPower++;
    newNode = new Node(i, alph[i], false, undefined, '');
    tree.push(newNode);
}

for (let i = 1; i < alphPower; i++)
{
    el1 = {ind : 0, val : Number.MAX_VALUE};
    el2 = {ind : 0, val : Number.MAX_VALUE};
    for (let k = 0; k < tree.length; k++)
    {
        if ((tree[k].used == false) & (tree[k].freq < el1.val))
        {
            el1.ind = k;
            el1.val = tree[k].freq;
        }
        else ((tree[k].used == false) & (tree[k].freq < el2.val))
        {
            el2.ind = k;
            el2.val = tree[k].freq;
        }

            
    }
    newNode = new Node(tree[el1.ind].name + tree[el2.ind].name, tree[el1.ind].freq + tree[el2.ind].freq, false, undefined, '');
    tree[el1.ind].used = true;
    tree[el1.ind].parent = tree.length;
    tree[el1.ind].code = '0';
    tree[el2.ind].used = true;
    tree[el2.ind].parent = tree.length;
    tree[el2.ind].code = '1';
    tree.push(newNode);
    
}
for (let i = 0; i < alphPower; i++)
{
    codeForLetter = '';
    currentObject = tree[i];
    while (currentObject.parent != undefined)
    {
        codeForLetter += currentObject.code;
        currentObject = tree[currentObject.parent];
    }
    alph[tree[i].name] = reverse(codeForLetter);
    
}


for (let i in alph)
{
    console.log("Код для символа ", i, ": ", alph[i]);
}
