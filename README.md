# JavaScript Type Coercion Bug
This repository demonstrates a subtle bug in JavaScript related to type coercion and null values when performing addition. The bug occurs when the function attempts to add numbers but encounters null values, leading to unexpected null returns instead of appropriate error handling or type conversion.

## Bug Description
The `foo` function is designed to add two numbers. However, it returns `null` if either input is `null`. This behavior may be undesirable, especially if the function is expected to handle various input types or gracefully manage null or undefined values.

## Solution
The solution provided in `bugSolution.js` addresses the bug by adding more robust checks and handling of null and undefined values. This enhances the function's reliability and provides more predictable behavior in diverse scenarios.