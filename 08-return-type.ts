// return type and parameters

// return type
function checkLength(a: string): number {
  return a.length;
}

type checkLengthReturnType = ReturnType<typeof checkLength>; //mengambil tipe data dari return sebuah function

// parameters

function sum(a: number, b: number) {
  return a + b;
}

type SumParametersType = Parameters<typeof sum>; //mengambil tipe data dari parameter sebuah function
type FirstParamSum = Parameters<typeof sum>[0];
