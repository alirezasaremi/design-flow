export function getPercentageBetweenTwoNumbers (num1, num2){
    if (num1 < 0 || num2 < 0) return 0;
    const w = (((((num1 - num2) / num1) * 100) - 100) * -1 );
    return w;
}