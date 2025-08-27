type UserApiResponse = {
  status: "success" | "error";
  data?: { id: string; name: string };
  errorMessage?: string;
};

function handleResponse1(res: UserApiResponse) {
  if (res.status === "success") {
    // console.log(res.data.name);
  } else {
    // console.log(res.errorMessage.length);
  }
}

// solution

type SuccessResponse = {
  status: "success";
  data: { id: string; name: string };
};

type ErrorResponse2 = {
  status: "error";
  errorMessage: string;
};

type ApiResponse = SuccessResponse | ErrorResponse2;

function handleResponse2(res: ApiResponse) {
  if (res.status === "success") {
    console.log(res.data.name);
  }
}
// kesalahan umum
type WrongSuccessResponse = {
  status: string; // Tidak literal
  data: { id: string; name: string };
};

type WrongErrorResponse = {
  status: number; // Tidak literal
  errorMessage: string;
};

type WrongApiResponse = WrongSuccessResponse | WrongErrorResponse;

function handleResponse3(res: WrongApiResponse) {
  if (typeof res.status === "string") {
    // console.log(res.data.name); // Error, TypeScript tidak bisa mempersempit tipe dengan benar
  } else {
    // console.log(res.errorMessage.length); // Error, TypeScript tidak bisa mempersempit tipe dengan benar
  }
}
