import * as React from "react";
import Link from "next/link";
import Button from "../../atoms/button";

const Header: React.FC<{
  contents: {
    label: string;
    target: string;
    selected?: boolean;
  }[];
}> = ({ contents }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        background: "#103380",
        padding: 10
      }}
    >
      {contents.map((v, i) => (
        <div style={{ margin: 1 }} key={i}>
          <Link prefetch href={{ pathname: "/" + v.target }}>
            <ul style={{ textDecoration: "none", margin: 0, padding: 0 }}>
              <Button
                onClick={() => {}}
                style={{ color: v.selected ? "#f196c4" : "" }}
              >
                {v.label}
              </Button>
            </ul>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Header;
