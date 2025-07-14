"use client";

import { useState } from "react";
import TipForm from "@/components/tip-form";
import TipDisplay from "@/components/tip-display";

export default function Home() {
  const [subject, setSubject] = useState("");
  const [tip, setTip] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchTip = async () => {
    if (!subject.trim()) return;
    setLoading(true);
    setTip("");
    try {
      const res = await fetch("/api/tip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject }),
      });
      const data = await res.json();
      setTip(data.tip);
    } catch (error) {
      console.error(error);
      setTip("שגיאה בקבלת הטיפ. נסה שוב.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full space-y-4">
      <TipForm
        subject={subject}
        setSubject={setSubject}
        onSubmit={fetchTip}
        loading={loading}
      />
      <TipDisplay tip={tip} />
    </div>
  );
}
