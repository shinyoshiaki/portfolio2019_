import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Component from ".";

storiesOf("atoms", module).add("button", () => (
  <Component onClick={action("")}>text</Component>
));
