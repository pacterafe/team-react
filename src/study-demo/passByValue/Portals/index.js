import React from 'react'
function Hello(){
    (function(){
        let obj = {c:4,f:6,h:2,a:1}
        let arr = []
        for(let item in obj){
            console.log(item)
            arr.push({[item]:obj[item]})
        }
        console.log(arr)
    })()
    return(
        <h2>hello</h2>
    )
}
export default Hello