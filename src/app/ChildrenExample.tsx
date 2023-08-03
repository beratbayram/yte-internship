"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  label: string;
  myCustomProp?: string;
}

export default function ChildrenExample({ children, label, myCustomProp= ""}: Props) {
  
  return (
    <main>
      <h1>{label}</h1>
      <button>{children}</button>
    </main>
  );
}
