// const url = "https://chitchat-backendapi.herokuapp.com";
const url = "http://locahost:5000";
type User = {
  name: string;
  email: string;
  password: string;
  profile_avatar: string;
  confirmPassword?: string;
};
export const registerReq = async (payload: User) => {
  await fetch(`${url}/auth/user/register`, {
    method: "POST",
    body: JSON.stringify({
      usernanme: payload.name,
      email: payload.email,
      password: payload.password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
};
