import { AppBar, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import type { NavigationProps } from './types';

export interface TopNavigationProps {
  data: NavigationProps[]
}

const links = (props: NavigationProps[]) => {
  return props.map((value, index) => {
    return <Link component={RouterLink} key={`topNavigation-${index}`} to={value.url}>{value.label}</Link>
  })
}

export const TopNavigation = (props: TopNavigationProps) => {
  return (
    <AppBar>
      {links(props.data)}
    </AppBar>
  );
}

export default TopNavigation;
