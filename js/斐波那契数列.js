

/**
 * 斐波那契数列
 * Sn = S(n-1) + S(n-2)
 */

/**
 * 递归求值
 * @param  n 
 * @returns 
 */
function feibo(n) {
    if (n < 2) {
        return n;
    }

    return feibo(n - 1) + feibo(n - 2)
}

console.log("n = 0返回值：", feibo(0))
console.log("n = 1返回值：", feibo(1))
console.log("n = 2返回值：", feibo(2))
console.log("n = 10返回值：", feibo(10))

/**
 * 循环求值
 */
function forFeibo(n) {
    if (n < 2) {
        return n;
    }

    let a = 0, b = 1,temp;
    //先确认n=0,1 时候的最初2个值，0,1；
    //再将新出现的值依次赋值给前一个； b -> a; temp -> b;
    for (let i = 2; i <= n; i++) { 
        temp = a + b
        a = b;
        b = temp
    }

    return temp
}


console.log("n = 0 forFeibo返回值：", forFeibo(0))
console.log("n = 1 forFeibo返回值：", forFeibo(1))
console.log("n = 2 forFeibo返回值：", forFeibo(2))
console.log("n = 10 forFeibo返回值：", forFeibo(10))



console.log(0.1+0.3);
console.log(0.3+0.4);