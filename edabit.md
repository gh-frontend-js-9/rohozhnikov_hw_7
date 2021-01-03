### a. Conditions  
##### I. Challenge 1
1. URL: https://edabit.com/challenge/PTiLYyb4A69KZtBCg
2. Solution: https://ru.files.fm/u/dnj9qcgw
##### II. Challenge 2 
1. URL: https://edabit.com/challenge/Q2j5FTFtsk7PdzrQk
2. Solution: https://ru.files.fm/u/nuwmkdn4
##### III. Challenge 3
1. URL: https://edabit.com/challenge/8q54MKnRrm89pSLmW
2. Solution: https://ru.files.fm/u/s8uj5nnm
##### IV. Challenge 4
1. URL: https://edabit.com/challenge/ks3vMrqdnW3CQ3F4i
2. Solution: https://ru.files.fm/u/4d73kug9
##### v. Challenge 5
1. URL: https://edabit.com/challenge/6AnQqiEjkJdZrWhPS
2. Solution: https://ru.files.fm/u/rnjrq547#sign_up
### b. Arrays
##### I. Challenge 1
1. URL: https://edabit.com/challenge/Q3n42rEWanZSTmsJm
2. Solution: https://ru.files.fm/u/fva7skn8
##### II. Challenge 2
1. URL: https://edabit.com/challenge/NAQhEoxbofPidLxm9
2. Solution:  https://ru.files.fm/u/67gbks5g
##### III. Challenge 3
1. URL: https://edabit.com/challenge/QaApgtePE6QrCZ64o
2. Solution: https://ru.files.fm/u/95pszzaf
##### IV. Challenge 4
1. URL: https://edabit.com/challenge/8Qg78sf5SNDEANKti
2. Solution: https://ru.files.fm/u/4qddzwwe
##### v. Challenge 5
1. URL: https://edabit.com/challenge/ghbHrRnRiDz9fvQNF
2. Solution: https://ru.files.fm/u/unu89mun
### c. Loops
##### I. Challenge 1
1. URL: https://edabit.com/challenge/Ju7AK9rAGjz86hjxo
2. Solution: https://ru.files.fm/u/qkc3jn35
##### II. Challenge 2
1. URL: https://edabit.com/challenge/Qbi3GuXjwW5fsoKRn
2. Solution: https://ru.files.fm/u/akp6qhxm
##### III. Challenge 3
1. URL: https://edabit.com/challenge/EzbfiquDoAc2Zc9FL
2. Solution: https://ru.files.fm/u/7n9uaue6
##### IV. Challenge 4
1. URL: https://edabit.com/challenge/yHGowWucg3k2kJdZ4
2. Solution: https://ru.files.fm/u/yp8r6kze
##### v. Challenge 5
1. URL: https://edabit.com/challenge/JesaFi5ntBEbGT8bu
2. Solution: https://ru.files.fm/f/hhcxgwx6
### d. Functional Programming
##### I. Challenge 1
1. URL: https://edabit.com/challenge/hzxN9bAebBPNqdQto
2. Solution:  https://ru.files.fm/u/afhh2nuf
##### II. Challenge 2
1. URL: https://edabit.com/challenge/ARr5tA458o2tC9FTN
2. Solution: https://ru.files.fm/u/afhh2nuf
##### III. Challenge 3
1. URL: https://edabit.com/challenge/iBQYbSHZGhpktLRdn
2. Solution: https://ru.files.fm/u/5f4wzsw3
##### IV. Challenge 4
1. URL: https://edabit.com/challenge/3CaszbdZYGN4otQD8
2. Solution: https://ru.files.fm/u/cph4fcvh
##### v. Challenge 5
1. URL: https://edabit.com/challenge/kJQYTCCWSnzhXG9dn
2. Solution: https://ru.files.fm/u/zy5zq42q
### e. Scope
##### I. Challenge 1
1. URL: https://edabit.com/challenge/wTQpSEZPpPdyLtK9k 
2. Solution: https://ru.files.fm/u/e2dzhj546
##### II. Challenge 2
1. URL: https://edabit.com/challenge/pPNAs5PvB3WvnDwDM
2. Code:
```javascript
function toArray(obj) {
    return Object.entries(obj)
}
```
##### III. Challenge 3
1. URL: https://edabit.com/challenge/NHfYRHg2tDtcZyykB
2. Code:
```javascript
function possibleBonus(a, b) {
    return b - a <= 6 && b - a > 0
}
```
##### IV. Challenge 4
1. URL:
2. Code:
```javascript
function reversibleInclusiveList(start, end) {
    let arr = []
    let min = Math.min(start, end)
    let max = Math.max(start, end)
    for(; min <= max; min++) arr.push(min)
    return start <= end ? arr : arr.reverse()
}
```
##### v. Challenge 5
1. URL: https://edabit.com/challenge/erFxBbqzZPSegMwnc
2. Code:
```javascript
function changeEnough(change, amountDue) {
    let sum = change[0] * 0.25 + change[1] * 0.1 + change[2] * 0.05 + change[3] * 0.01;
    return sum >= amountDue;
}
```
### f. Objects
##### I. Challenge 1
1. URL: https://edabit.com/challenge/i6YqzHcSiPiEQKjeX
2. Solution:  https://ru.files.fm/u/b8hpexxq
##### II. Challenge 2
1. URL: https://edabit.com/challenge/CzPEsTuXfE8J8vknX
2. Solution: https://ru.files.fm/u/z8n7caeh
##### III. Challenge 3
1. URL: https://edabit.com/challenge/6kdGMdd78jpZ45ujo
2. Solution: https://ru.files.fm/u/b8dc6ak5
##### IV. Challenge 4
1. URL: https://edabit.com/challenge/3LpBLgNRyaHMvNb4j
2. Solution: https://ru.files.fm/u/y4x4r58d
##### V. Challenge 5
1. URL: https://edabit.com/challenge/RxsaajpPai3CB9G9e
2. Code: 
```javascript
function determineLever(arr) {
    return arr[1] == 'f' ? 'first class lever' : 
        arr[2] == 'f' ? 'second class lever' : 
        'third class lever';
}
```
### g. Classes
##### I. Challenge 1
1. URL: https://edabit.com/challenge/ZngT4zDckDugt2JGY
2. Code:
```javascript
class Player {
    constructor(name, age, height, weight) {
        this.name = name
        this.age = age
        this.height = height
        this.weight = weight
    }
    
    getAge() {
        return `${this.name} is age ${this.age}`
    }
    
    getHeight() {
        return `${this.name} is ${this.height}cm`
    }
    
    getWeight() {
        return `${this.name} weighs ${this.weight}kg`
    }
}
```
##### II. Challenge 2
1. URL: https://edabit.com/challenge/yxKoCKemzacK6PECM
2. Code:
```javascript
class Calculator {
    add(x, y) {
        return x + y
    }
    
    subtract(x, y) {
        return x - y
    }
    
    multiply(x, y) {
        return x * y
    }
    
    divide(x, y) {
        return x / y
    }
}
```
##### III. Challenge 3
1. URL: https://edabit.com/challenge/SrCTGbhwPRyHZSAGu
2. Code:
```javascript
class BasicPlan {
    static canStream = true;
    static canDownload = true;
    static numOfDevices = 1;
    static hasSD = true;
    static hasHD = false;
    static hasUHD = false;
    static price = '$8.99';
}

class StandardPlan extends BasicPlan {
    static numOfDevices = 2;
    static hasHD = true;
    static price = '$12.99';
}

class PremiumPlan extends StandardPlan {
    static numOfDevices = 4;
    static hasUHD = true;
    static price = '$15.99'; 
}
```
##### IV. Challenge 4
1. URL: https://edabit.com/challenge/kGLhgwGaLJsCMS7wS
2. Code:
```javascript
class Employee {
    constructor (firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
        this.fullname = `${firstname} ${lastname}`
        this.email = (firstname +'.'+ lastname + '@company.com').toLowerCase()
    }
}
```
##### IV. Challenge 5
1. URL: https://edabit.com/challenge/iwdZiFucR5wkQsFHu
2. Code:
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    compareAge(other) {
        if(this.age < other.age) {
            return `${other.name} is older than me.`;
        } else if (this.age == other.age) {
            return `${other.name} is the same age as me.`; 
        } else {
            return `${other.name} is younger than me.`; 
        }
    }
}
```
