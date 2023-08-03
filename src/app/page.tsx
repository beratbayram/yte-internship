"use client";

import ChildrenExample from "./ChildrenExample";
import ContextExample from "./ContextExample";
import FormExample from "./FormExample";
import UseEffectExample from "./UseEffectExample";
import { ThemeContext } from "./themeContext";

export default function Home() {
  return (
    <main>
      <ThemeContext.Provider value={"light"}>
        <FormExample />
        <hr />
        <hr />
        <ContextExample />
        <hr />
        <ChildrenExample label="Hello World">
          <p>Some content</p>
          <p>Some content</p>
          <UseEffectExample />

        </ChildrenExample>
      </ThemeContext.Provider>
    </main>
  );
}
