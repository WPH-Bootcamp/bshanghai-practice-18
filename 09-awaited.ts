type Async = Promise<string>;

type ValueAsync = Awaited<Async>; //mengambil tipe dari return sebuah promise

// example

async function fetchingData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data fetch success");
    }, 2000);
  });
}

type FetchingDataValueType = Awaited<ReturnType<typeof fetchingData>>;

async function produceNumber<T>(): Promise<number> {
  return 3;
}

type X = Awaited<ReturnType<typeof produceNumber>>;
