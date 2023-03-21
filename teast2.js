// Given an array of Numbers return all possible permutations.
// Input: [1,2,3]                                  output: [
//  						[1,2,3]  
//  						[1,3,2]  
//  						[2,1,3]
//  						[2,3,1]  
//  						[3,1,2]  
//  						[3,2,1]    
// 					       ]



// const num = [1,2,3];
// const permutation = permute(num);
// console.log(permutation);

function permute(num) {
    const result =[];
    
    
    function generate (current, remaing) {
        if (remaing.length === 0){
            result.push(current);
            return;
        }
        for (let i=0; i < remaing.length; i++){
            const newCurrent = [...current, remaing[i]];
            const newRemaining = [...remaing.slice(0,1), ...remaing.slice(i+1)];
            generate(newCurrent,newRemaining);
        }
    }
    
    generate([],num);
    return result;
}

    
    
  
