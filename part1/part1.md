# Part 1a
1. Line 9 prints: `values added: 20`
2. Line 13 prints: `final result: 20`
3. Line 9 prints: `values added: 20`
4. Line 13 returns an error because we initialized `result` with the `let` keyword, meaning that `result` can only be accessed in the block that it was defined within. On Line 13, the function attempts to access `result` within a block that the variable was not defined in. Therefore, the code will return an error.
5. The code returns an error before it reaches Line 9, because on Line 7, the function attempts to reassign `result`, which is not possible since `result` was initializd with the `const` keyword.
6. The code returns an error before it reaches Line 13, because on Line 7, the function attempts to reassign `result`, which is not possible since `result` was initializd with the `const` keyword.

# Part 1b
1. Line 12 prints: `3`. This is because `i` was initialized with the `var` keyword, and thus has function scope. Since the code breaks out of the for loop from Line 6 to Line 10 when `i >= prices.length`, `prices.length =  3`, and `i` is initialized to 0 and increases by 1 after every iteration of the for loop, `i = 3` after the for loop ends. Therefore, `i = 3` on Line 13. 
2. Line 13 prints: `150`. This is because `discountedPrice` was initialized with the `var` keyword, and thus has function scope. During the final iteration of the for loop from Line 6 to Line 10, `discountedPrice` is reassigned to: `prices[i] * (1 - discount)`. Since `i = 2`  during the last iteration of the for loop, we have that `prices[i] * (1 - discount) = prices[2] * (1 - discount) = 300 * 0.5 = 150`. Therefore, `discountedPrice = 150` on Line 13.
3. Line 14 prints `150`. This is because `finalPrice` was initialized with the `var` keyword, and thus has function scope. During the final iteration of the for loop from Line 6 to Line 10, `finalPrice` is reassigned to `Math.round(discountedPrice * 100) / 100`. As shown in the previous question, `discountedPrice = 150` after its value is reassigned during the final iteration of the for loop. Therefore, `Math.round(discountedPrice * 100) / 100 = 15000 / 100 =  150`. Therefore, `finalPrice = 150` on Line 14.
4. This function will return `[50, 100, 150]`. This is because, with every iteration of the for loop, we set `discountedPrice` to be half the current price. Since each of the original prices are even, `finalPrice` will be set equal to `discountedPrice` on Line 8. Finally, we push `finalPrice` to `discounted` on Line 9, and so on Line 16, `discounted = [50, 100, 150]`.
5. An error will occur at Line 12, because the variable `i` was initialized with the `let` keyword, and therefore can't be accessed outside the block in which it was defined.
6. An error will occur at Line 13, because the variable `discountedPrice` was initialized with the `let` keyword, and therefore can't be accessed outside the block in which it was defined.
7. Line 14 prints `150`. As explained previously, `finalPrice` is equal to 150 after the final iteration of the for loop. Since `finalPrice` was initialized within the same block as the function call on Line 14, we can access `finalPrice` even though it was initialized using the `let` keyword.
8. This function will return `[50, 100, 150]`. This is because, with every iteration of the for loop, we set `discountedPrice` to be half the current price. Since each of the original prices are even, `finalPrice` will be set equal to `discountedPrice` on Line 8. Finally, we push `finalPrice` to `discounted` on Line 9, and so on Line 16, `discounted = [50, 100, 150]`.
9. An error will occur at Line 11, because the variable `i` was initialized with the `let` keyword, and therefore can't be accessed outside the block in which it was defined.
10. Line 12 prints `3`. On Line 4, `length` is initialized with the `const` keyword and set equal to `prices.length`, which is equal to 3. Since it is initialized with `const`, its value will never change, and so `3` is printed out on Line 12. 
11. This function will return `[50, 100, 150]`. This is because, with every iteration of the for loop, we set `discountedPrice` to be half the current price. Since each of the original prices are even, `finalPrice` will be set equal to `discountedPrice` on Line 8. Finally, we push `finalPrice` to `discounted` on Line 9, and so on Line 16, `discounted = [50, 100, 150]`. Even though we initiallized `discounted` with the `const` keyword, we can still add/remove elements to/from the array; we just can't reassign the array itself.
12. A. `student.name`\
    B. `student['Grad Year']`
    C. `student.greeting()`
    D. `student['Favorite Teacher'].name`
    E. `student.courseload[0]`
13. A. `'3' + 2 = 32`, because integers map to their exact string representation.
    B. `'3' - 2 = 1`, because strings map to their numeric representation.
    C. `3 + null = 3`, because `null` maps to the integer `0`.
    D. `'3' + null = '3null'`, because `null` maps to the string `'null'`.
    E. `true + 3 = 4`, because `true` maps to the intger `1`.
    F. `false + null = 0`, because `false` and `null` both map to the integer `0`.
    G. `'3' + undefined = '3undefined'`, because `undefined` maps to the string `'undefined'`.
    H. `3 - undefined = NaN`, because `undefined` maps to the integer `NaN`.
14. A. `true`, since `'2'` maps to the integer `2`, which is greater than `1`.
    B. `false`, since the string `'2'` comes after the string `'12'` lexographically.
    C. `true`, since the string `'2'` maps to the integer `2`.
    D. `false`, since the string `'2'` and the integer `2` are of different types.
    E. `false`, since `true` maps to the integer `1`.
    F. `true`, since `Boolean(2) = true`.
15. The `==` operator compares two values only after attempting to convert them into a common type, while the `===` operator does not attempt to convert either of the values, and therefore always returns false if the two values are of different types.
16. See `part1b-question16.js`.
17. The function will return `[2, 4, 6]`. The `modifyArray` function creates a new array `newArr`, calls its input `callback` function on each element of its input `array` and adds the return value of the `callback` function to `newArr`, one at a time. Since the input `callback` function is `doSomething`, which simply takes a number and multiplies it by 2 and returns the result, `newArr` will simply be the original input `array` with each element multiplied by 2.
18. See `part1b-question18.js`.
19. `1`\
    `4`\
    `3`\
    `2`