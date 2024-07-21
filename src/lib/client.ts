// import { TriplitClient } from '@triplit/client';
// import { schema } from '../../triplit/schema.js';
 
// export const triplit = new TriplitClient({
//   schema,
//   serverUrl: import.meta.env.VITE_TRIPLIT_SERVER_URL,
//   token: import.meta.env.VITE_TRIPLIT_TOKEN,
// });

import { TriplitClient } from '@triplit/client';
import { browser } from '$app/environment';
import { schema } from '../../triplit/schema'
 
export const client = new TriplitClient({
  schema: schema,
  serverUrl: import.meta.env.VITE_TRIPLIT_SERVER_URL,
  token: import.meta.env.VITE_TRIPLIT_TOKEN,
  autoConnect: browser,
});