import axios from "axios";
import { useState } from "react";
import type { FormEvent } from "react";


export default function Subscription() {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<
    "success" | "error" | "loading" | "idle"
  >("idle");
  const [responseMsg, setResponseMsg] = useState<string>("");
  const [statusCode, setStatusCode] = useState<number>();

  async function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await axios.post("/api/subscribe", { email });

      setStatus("success");
      setStatusCode(response.status);
      setEmail("");
      setResponseMsg(response.data.message);
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setStatus("error");
        setStatusCode(err.response?.status);
        setResponseMsg(err.response?.data.error);
      }
    }
  }
  return (
    <div className="mx-12 flex flex-col justify-center lg:mx-36">
      <div className="md:text-footer font-heading text-mobileFooter">
        Want product news and updates? Sign up for our newsletter.
      </div>
      <form
        className="max-w-md rounded pb-4 pt-6 md:mx-auto"
        onSubmit={handleSubscribe}
      >
        <div className="flex flex-col md:flex-row">
          <input
            value={email}
            className="disabled:border-slate-400 mr-1 h-14 grow rounded border border-blue-600 px-4 pr-0.5 caret-blue-700 outline-none transition delay-75 ease-out focus-within:border-2 focus-within:border-blue-600"
            type="email"
            placeholder="What is your email address?"
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus("idle")
            }}
            disabled={status === "loading"}
          />
          <button
            className="focus:shadow-outline disabled:bg-slate-400 mx-auto mt-2 w-fit rounded bg-blue-700 px-4 py-2 font-bold text-white hover:bg-blue-500 focus:outline-none md:mt-0"
            type="submit"
            disabled={status === "loading"}
          >
            <span className="text-sm md:text-lg">Subscribe</span>
          </button>
        </div>
        <div className="server-message pt-4 text-green-600">
          {status === "success" ? (
            <p className="text-green-600">{responseMsg}</p>
          ) : null}
          {status === "error" ? (
            <p className="text-orange-600">{responseMsg}</p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
