import * as React from "react";

import Measure from "react-measure";
import { Center } from "../components/atoms/styled";

export default class Fit extends React.Component<
  { target: (size: { width: number; height: number }) => any },
  { width: number; height: number }
> {
  constructor(props: any) {
    super(props);
    this.state = { width: 0, height: 0 };
  }

  render() {
    const { width, height } = this.state;
    return (
      <Measure
        bounds
        onResize={contentRect => {
          if (!contentRect.bounds) return;
          this.setState({ ...contentRect.bounds });
        }}
      >
        {({ measureRef }) => (
          <div ref={measureRef} style={{ width: "100%", height: "100%" }}>
            <Center>{this.props.target({ width, height })}</Center>
          </div>
        )}
      </Measure>
    );
  }
}
