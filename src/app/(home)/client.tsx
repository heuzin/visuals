"use client";

import { trpc } from "@/trpc/client";
import React from "react";

const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({
    text: "Matheus",
  });

  return <div>client page says {data.greeting}</div>;
};

export default PageClient;
