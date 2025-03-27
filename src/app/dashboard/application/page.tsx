"use client";

import { accountAtom } from "@/factories/atoms";
import { makeUserAuthentication } from "@/factories/makeUserAuthentication";
import { useCedarling } from "@/factories/useCedarling";
import { AuthorizeResult } from "@janssenproject/cedarling_wasm";
import { useAtom } from "jotai";

export default function ProjectsPage() {
  const [user] = useAtom(accountAtom);
  const { authorize, isLoading, error } = useCedarling();
  const userAuthentication = makeUserAuthentication();

  const cedarlingRequest = async (action: string) => {
    const idToken = await userAuthentication.getIdToken();
    const accessToken = await userAuthentication.getAccessToken();

    const request = {
      tokens: {
        access_token: accessToken,
        id_token: idToken,
      },
      action: `Jans::Action::"${action}"`,
      resource: {
        type: "Jans::Application",
        id: "App",
        app_id: "App",
        name: "App",
        url: {
          host: "jans.test",
          path: "/protected-endpoint",
          protocol: "http",
        },
      },
      context: {},
    };

    const result: AuthorizeResult = await authorize(request);
    return result;
  };

  const handleRead = async () => {
    try {
      const result = await cedarlingRequest("Read");
      console.log(result);
      console.log(result.decision);
    } catch (e) {
      console.log(e);
    }
  };

  const handleWrite = async () => {
    try {
      const result = await cedarlingRequest("Write");
      console.log(result);
      console.log(result.decision);
    } catch (e) {
      console.log(e);
    }
  };

  const handleShare = async () => {
    try {
      const result = await cedarlingRequest("Share");
      console.log(result);
      console.log(result.decision);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="p-4">
      <h1>Application</h1>
      <h3>Check Permissions</h3>
      <button className="btn btn-primary mb-3" onClick={handleRead}>
        Read
      </button>
      &nbsp;
      <button className="btn btn-success mb-3" onClick={handleWrite}>
        Write
      </button>
      &nbsp;
      <button className="btn btn-primary mb-3" onClick={handleShare}>
        Share
      </button>
    </div>
  );
}
