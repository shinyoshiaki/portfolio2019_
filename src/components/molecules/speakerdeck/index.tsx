import { FC } from "react";
import styled from "styled-components";

const Speakerdeck: FC<{ url: string }> = ({ url }) => {
  return (
    <div style={{ zIndex: -1 }}>
      <Base>
        <Iframe
          src={url + "?wmode=transparent"}
          scrolling="no"
          allow="autoplay; encrypted-media"
          title={url}
        />
      </Base>
    </div>
  );
};

const Base = styled.div`
  left: 0;
  width: 100%;
  height: 0;
  position: relative;
  padding-bottom: 56.1987%;
`;

const Iframe = styled.iframe`
  border: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
`;

export default Speakerdeck;
