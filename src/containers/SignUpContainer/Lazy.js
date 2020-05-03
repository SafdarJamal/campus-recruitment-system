import { lazy } from 'react';
import pMinDelay from 'p-min-delay';

export default lazy(() => pMinDelay(import('./index'), 200));
