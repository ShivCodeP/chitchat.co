import axios, { AxiosResponse } from "axios";
import Router, { NextRouter } from "next/dist/shared/lib/router/router";
import { toast } from "react-toastify";

const url = "https://chitchat-backendapi.herokuapp.com";
type User = {
  name: string;
  email: string;
  password: string;
  profile_avatar?: string;
  confirmPassword?: string;
};
type Body = {
  username: string;
  password: string;
  email: string;
};
interface CustomRes extends AxiosResponse {
  message: string;
  status: number;
}
export const registerReq = async (payload: User, setShowRegister: Function) => {
  payload.profile_avatar = payload.profile_avatar
    ? payload.profile_avatar
    : "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg";
  console.log("payload", payload);

  let data = await axios.post(
    `${url}/auth/user/register`,
    {
      username: payload.name,
      password: payload.password,
      email: payload.email,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(data);
  // .then((res) => {
  //   if (res.status !== 200 ) {
  //     toast.error(res.message);
  //     console.log(res);
  //     return;
  //   }
  //   setShowRegister(false);
  //   toast.success(res.message);
  // })
  // .catch((error) => {
  //   console.log("error", error);
  //   toast.error(error.message);
  // });
};

type LoginUser = {
  email: string;
  password: string;
};

export const loginReq = async (payload: LoginUser, router: NextRouter) => {
  await fetch(`${url}/auth/user/login`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.token) {
      }
    });
};
