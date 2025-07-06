function mergeSort(arr){
    //base case
    if (arr.length <= 1){

        return arr 
    }

    let mid = Math.floor(arr.length/2)
    
    let left = mergeSort(arr.slice(0,mid)) 
    let right = mergeSort(arr.slice(mid,arr.length))

    return merge(left,right);
    

}


function merge(left ,right){

    let i=0;
    let j=0;
    let sorted=[]
    while (i<left.length && j<right.length){

        if(left[i]<right[j]){

            sorted.push(left[i])
            i+=1 

        }
        else{
            sorted.push(right[j])
            j+=1
        }

    }

    //push leftovers from both array

    
    while (i<left.length){

        sorted.push(left[i])
        i+=1
    }

    while (j<right.length){
        sorted.push(right[j])
        j+=1
    }


    return sorted;

}