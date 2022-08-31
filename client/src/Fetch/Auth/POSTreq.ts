import { toast } from "react-toastify";

const url = "https://chitchat-backendapi.herokuapp.com";
// const url = "http://locahost:5000";
type User = {
  name: string;
  email: string;
  password: string;
  profile_avatar: string;
  confirmPassword?: string;
};
export const registerReq = async (payload: User, router: any) => {
  payload.profile_avatar = payload.profile_avatar
    ? payload.profile_avatar
    : "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg";
  console.log(payload);
  await fetch(`${url}/auth/user/register`, {
    method: "POST",
    body: JSON.stringify({
      username: payload.name,
      password: payload.password,
      email: payload.email,
      profile_avatar_url: payload.profile_avatar,
      isAdmin: false,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.message !== "Successfully Registered") {
        toast.error(res.message);
        return;
      }
      localStorage.setItem("auth", res.message);
      router.push("/home");
    });
};
