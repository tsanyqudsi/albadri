import { AppBar, Container, Link, Stack, Toolbar, useScrollTrigger } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import type { NavigationProps } from './types';
import React from 'react';

export interface TopNavigationProps {
  links: NavigationProps[],
  logo?: LogoProps,
  background?: string
}

interface LogoProps {
  fileName: string,
  alt: string,
}

// const ElevationScroll  = () =>{
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// }

const links = (props: NavigationProps[]) => {
  return props.map((value, index) => {
    return <Link component={RouterLink} key={`topNavigation-${index}`} to={value.url}>{value.label}</Link>
  })
}

const Logo = (props: LogoProps) => {
  return <img src={props.fileName} alt={props.alt}/>
}

export const TopNavigation = (props: TopNavigationProps) => {
  return (
      <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {props.logo && <Logo {...props.logo}/>}
          <Stack direction="row" justifyContent={'space-around'}>
            {links(props.links)}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopNavigation;
