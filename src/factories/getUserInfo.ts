import axios from "axios";

export const getUserInfo = async (accessToken: string) => {
  const request: any = {
    url: `${process.env.NEXT_PUBLIC_OP_SERVER}/jans-auth/restv1/userinfo`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const response: any = await axios(request).catch((error) => {
    console.log(error);
  });

  console.log(response);
  return response;
};
