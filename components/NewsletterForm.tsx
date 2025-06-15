"use client";
import { cn } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";
import { FC, FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
export type NewsletterFormProps = { className?: string };
export const NewsletterForm: FC<NewsletterFormProps> = ({ className }) => {
  const [state, setState] = useState<"active" | "loading" | "error">("active");
  const [subscriptionState, setSubscriptionState] = useState<
    "active" | "cancelled" | "inactive"
  >();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscriptionState(undefined);
    const formData = new FormData(e.currentTarget);
    formData.append("api_key", process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY);
    setState("loading");
    const res = await fetch(
      `https://api.convertkit.com/v3/forms/${process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: "POST",
        body: formData,
      },
    )
      .then((res) => {
        setState("active");
        if (res.status !== 200) setState("error");
        return res.json();
      })
      .catch(() => {
        setState("error");
      });
    setSubscriptionState(res.subscription.state);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("m-1 flex flex-col gap-1", className)}
    >
      <h6 className="text-xl">Subscribe to my newsletter</h6>
      <div className="grid grid-cols-3">
        <Input
          required
          placeholder="First Name"
          name="first_name"
          className="rounded-r-none"
        />
        <Input
          required
          type="email"
          placeholder="Your Email"
          name="email"
          className="rounded-none"
        />
        <Button type="submit" className="rounded-l-none">
          Subscribe{" "}
          {state === "loading" && <Loader2Icon className="ms-1 animate-spin" />}
        </Button>
      </div>
      <p
        className={cn(
          subscriptionState && "ps-2 pt-2 text-lg",
          state == "error" && "text-red-400 ",
        )}
      >
        {subscriptionState === "cancelled" &&
          "Succeed! Please check your inbox to confirm subscription."}
        {subscriptionState === "inactive" &&
          "Succeed! Please check your inbox to confirm subscription."}
        {subscriptionState === "active" && "Already subscribed!"}
        {state === "error" && "Something went wrong, please try again!"}
      </p>
    </form>
  );
};
