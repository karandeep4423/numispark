"use client";
import { useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push("/")}>Français</button>
      <button onClick={() => router.push("/en")}>English</button>
      <button onClick={() => router.push("/de")}>Deutsch</button>
    </div>
  );
}
