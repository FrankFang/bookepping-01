import Nav from './Nav';
import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;
type Props = {
  className?: string;
  scrollTop?: number;
}
const Layout: React.FC<Props> = (props: any) => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (!mainRef.current) {return;}
      mainRef.current.scrollTop = props.scrollTop!;
    }, 3000);
  }, [props.scrollTop]);
  return (
    <Wrapper>
      <Main ref={mainRef} className={props.className} data-x={'frank'}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};
Layout.defaultProps = {
  scrollTop: 0
};

export default Layout;