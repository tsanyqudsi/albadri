import { DefaultLayout } from '@albadri/layouts';
import topNavigation from '../assets/navigations.yaml';

export default () => {
  console.log(topNavigation.top)
  return (
    <DefaultLayout TopNavigation={topNavigation.top}>
      <div>a</div>
    </DefaultLayout>
  )  
}