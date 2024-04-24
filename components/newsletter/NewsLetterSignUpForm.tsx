"use client";
import { useRef, FormEvent } from "react";

export default function NewsLetterSignUpForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  const subscribeUser = async (e: FormEvent) => {
    e.preventDefault();

    // this is where your mailchimp request is made
    await fetch("/api/subscribeUser.ts", {
      body: JSON.stringify({
        email: inputRef.current?.value,
      }),

      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    });
  };

  return (
    <form onSubmit={subscribeUser}>
      <label htmlFor="email-input">Your Best Email</label>

      <input
        type="email"
        id="email-input"
        name="email"
        placeholder="your best email"
        ref={inputRef}
        required
        autoCapitalize="off"
        autoCorrect="off"
      />

      <button type="submit" value="" name="subscribe">
        Subscribe
      </button>
    </form>
  );
}
