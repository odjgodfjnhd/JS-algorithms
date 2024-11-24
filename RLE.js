function encode(input){
    let result = '';
    let i = 0;
    
    while (i<input.length) {
        let currentSymbol = input[i];
        let length = 1;
        
        while (currentSymbol == input[length+i]){
            length++;
        }
    
        if (length<=2){
            result += currentSymbol.repeat(length);
        }

        else{
            result += length + currentSymbol;
        }
        i += length;
        
    }
    return result;
}



function decode(input){
    let result = '';
    let i = 0;
    let numbers = "0123456789";

    while (i<input.length) {
        var count = '';
        while(numbers.indexOf(input[i])!=-1){
            count+=input[i];
            i++;
        }
        if(count.length>0){
            count = Number(count)
            result += input[i].repeat(count-1);
        }
        else{
            result += input[i]
            i++;
        }

        
        
    }

    return result;
}

let fs = require('fs'); 

var Text = fs.readFileSync('input_to_encode.txt'); 
var start_string = inText.toString()

encode_str = encode(start_string);
fs.writeFileSync('code.txt', encode_str);
console.log("Коэффициент сжатия = ", a.length/encode_str.length); 


var CodedText = fs.readFileSync('input_to_decode.txt');
var coded_string = CodedText.toString()
decode_str = decode(coded_string);
fs.writeFileSync('decode.txt', decode_str);

console.log("Коэффициент сжатия = ", decode_str.length/b.length);
