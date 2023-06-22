// eslint-disable-next-line @typescript-eslint/no-unused-vars
import routes from '~react-pages';
import { Suspense } from 'react';
import {
  useRoutes,
} from 'react-router-dom';

export const App = () => {

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  );
}

export default App;
