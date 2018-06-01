function scores(arr){
    for(var i=0; i<arr.length; i++)
    {
        
        sum = sum + arr[i]
        
    }
    console.log(Math.round(sum/arr.length));
    
}
var sum = 0;

score = [23,45,45,87,56,55]
scores(score);