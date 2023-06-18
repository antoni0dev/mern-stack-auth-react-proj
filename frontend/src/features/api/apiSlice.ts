import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/* fetchBaseQuery is a utility function from RTK Query that allows you to create a base query function with common settings, such as the base URL. */
const baseQuery = fetchBaseQuery({ baseUrl: '' });

// API Configuration: RTK Query allows you to define an API slice where you can specify the base URL and endpoints for your API, similar to creating an Axios instance with a default configuration. The fetchBaseQuery function in RTK Query can be used to define this configuration.
export const apiSlice = createApi({ baseQuery, tagTypes: ['User'], endpoints: () => ({}) });
