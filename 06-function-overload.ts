// example 1

// overload signatures
function calculateArea(radius: number): number;
function calculateArea(length: number, width: number): number;

// implementation signature
function calculateArea(arg1: number, arg2?: number): number {
  if (arg2 === undefined) {
    return Math.PI * arg1 ** 2;
  }
  return arg1 * arg2;
}

// usage
const circleArea = calculateArea(5);
const rectangleArea = calculateArea(10, 20);
