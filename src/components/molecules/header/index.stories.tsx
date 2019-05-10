import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Component from ".";

storiesOf("molecules", module).add("header", () => (
  <div style={{ width: "100vw" }}>
    <Component
      contents={[...Array(5)].map((_, i) => {
        return { label: i.toString(), onClick: action("") };
      })}
    />
  </div>
));
