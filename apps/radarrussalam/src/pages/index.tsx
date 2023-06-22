import { DefaultLayout } from '@albadri/layouts';
import topNavigation from '../assets/navigations/top.yaml';

export default () => {
  return (
    <DefaultLayout TopNavigation={topNavigation.nav}>
      <div>a</div>
    </DefaultLayout>
  )  
}