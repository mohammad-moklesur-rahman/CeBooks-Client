"use client";

import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";

export default function VerifyPage() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [code, setCode] = useState("");

  const handleVerify = async () => {
    if (!isLoaded) return;

    try {
      const result = await signUp.attemptEmailAddressVerification({ code });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        window.location.href = "/";
      }
    } catch (err) {
      alert(err.errors[0].message);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-xl mb-3">Verify Email</h2>
      <input
        className="input input-bordered w-64"
        placeholder="Enter verification code"
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleVerify} className="btn btn-primary mt-3">
        Verify
      </button>
    </div>
  );
}
