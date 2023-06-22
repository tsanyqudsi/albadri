import { ReactNode } from 'react';
import { Container } from '@mui/material';
import { NavigationProps, TopNavigation } from '@albadri/navigations';

/* eslint-disable-next-line */
export interface LayoutsProps {
  children: ReactNode;
  TopNavigation: NavigationProps[];
}

export function DefaultLayout(props: LayoutsProps) {
  return (
    <Container>
      <TopNavigation data={props.TopNavigation}/>
      {props.children}
    </Container>
  );
}