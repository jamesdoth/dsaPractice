// // o(n**2) looping through everything multiple times
// function inefficientCommon(arr1, arr2) {
//     for(let i = 0; i < arr1.length; i++) {
//         for(let j = 0; j < arr2.length; j++) {
//             if(arr1[i] === arr2[j]) {
//                 return true
//             }
//         }
//     }
//     return false
// }
// // o(n) loops through everything, once
// function efficientCommon(arr1, arr2) {
//     let obj = {}
//     for(let i = 0; i < arr1.length; i++) {
//         obj[arr1[i]] = true
//     }   
//     for(let j = 0; j < arr2.length; j++) {
//         if(obj[arr2[j]]) {
//             return true
//         }
//     }
//     return false
// }

// let array1 = [1,3,5]
// let array2 = [2,4,5]

// console.log(inefficientCommon(array1,array2))
// console.log(efficientCommon(array1,array2))

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    let node = null
    const carry = arguments[2]
    if (l1 || l2) {
        const val1 = l1 ? l1.val : 0
        const val2 = l2 ? l2.val : 0
        const next1 = l1 ? l1.next : null
        const next2 = l2 ? l2.next : null
        const val = carry ? val1 + val2 + 1 : val1 + val2
        node = new ListNode(val % 10)
        node.next = addTwoNumbers(next1, next2, val >= 10)  
    } else if (carry) {
        node = new ListNode(1)
        node.next = null
    }
    return node
};

let l1 = [2,4,3]
let l2 = [5,6,4]

console.log(addTwoNumbers(l1,l2))