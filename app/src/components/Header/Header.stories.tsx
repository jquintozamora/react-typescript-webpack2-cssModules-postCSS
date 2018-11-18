import * as React from "react";

import { storiesOf } from "@storybook/react";
import Header from "./Header";

const stories = storiesOf("Header", module);

stories.add("test", () => <Header title={"Jose"} />);
