/*
== loose equality
=== strict equality
!= loose inequality
!== strict inequality
> greater than
< smaller than
>= greater than or equal to
<= less than or equal to
*/
console.log(5 === '5') // false
console.log(5 == '5') // true
console.log(true == undefined) //false
console.log(null == undefined) //true
console.log(null === undefined) //false
console.log("1,2" == [1, 2]) //true

//always use strict equality (===) and strict inequality (!==) to avoid unexpected type coercion