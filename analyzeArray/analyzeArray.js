function checkIntegerArray(arr){

    for (i=0;i<arr.length;i++){
        if (typeof arr[i]!== 'number'){
            return false
        }
    }

    return true

}

function analyzeArray(arr){

    if(!Array.isArray(arr)){
        return 'Not an Array'
    }

    if(!checkIntegerArray(arr)){
        return "Not Integer Array"
    }

    total = 0
    min=arr[0]
    max=arr[0]

    for (i=0;i<arr.length;i++){
        total+=arr[i]
        if (arr[i]<min)
        
        {min=arr[i]}

        if(max<arr[i]){
            max=arr[i]
        }
    }

    return {
        'average': total/arr.length,
        'min': min,
        'max':max,
        'length':arr.length
    }
    

   



}

module.exports = analyzeArray;