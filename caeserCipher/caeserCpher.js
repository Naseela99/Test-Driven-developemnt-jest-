code = 'abcdefghijklmnopqrstuvwxyz'
cipher = 'bcdefghijklmnopqrstuvwxyza'


function isLower(s){
    if (s.toLowerCase() && s!=s.toUpperCase()){
        return true
    }
    return false
}

function isUpper(s){
    if (s.toUpperCase() && s!=s.toLowerCase()){
        return true
    }
    return false
}

function getCharCipher(s){
    var idx = code.indexOf(s)
    c = cipher[idx]
    return c
}

function caeserCipher(str,shift){
    if(typeof str!='string'){
        return 'not string'
    }
    new_str=''


    for(i=0;i<str.length;i++){
        if (isLower(str[i])){
            new_str+= getCharCipher(str[i])
        }else if(isUpper(str[i])){
            new_str+= getCharCipher(str[i].toLowerCase()).toUpperCase()
        }
        else{
            new_str+=str[i]
        }
    }
    return new_str
}

module.exports = caeserCipher;