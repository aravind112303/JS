function calculate(arrayRadius , logic) {
    let result =[];
    for(let r of arrayRadius) {
        result.push(logic(r));
    }
   
    console.log(result);
    
}

function circle(r) {
    return 3.14*r*r;
}

arr = [2,3,4,5];
calculate(arr, circle);