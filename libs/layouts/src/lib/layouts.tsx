import { ReactNode } from 'react';
import { Container } from '@mui/material';
import { TopNavigation, TopNavigationProps } from '@albadri/navigations';

/* eslint-disable-next-line */
export interface LayoutsProps {
  children: ReactNode;
  TopNavigation: TopNavigationProps;
}

export function DefaultLayout(props: LayoutsProps) {
  return (
    <Container>
      <TopNavigation {...props.TopNavigation}/>
      {props.children}
    </Container>
  );
}