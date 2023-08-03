"use client";

import { useEffect, useState } from "react";

export default function UseEffectExample() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setTitle(json.title))
  }, [])

  return <div>{title}</div>;
}
