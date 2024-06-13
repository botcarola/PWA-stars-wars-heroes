import { registerRoute, Route } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { NetworkFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { precacheAndRoute } from 'workbox-precaching';

declare let self: ServiceWorkerGlobalScope

// Precache resources defined in self.__WB_MANIFEST
precacheAndRoute(self.__WB_MANIFEST)
self.__WB_MANIFEST

// Handle scripts:
const scriptsRoute = new Route(({ request }) => {
  return request.destination === 'script'
}, new CacheFirst({
  cacheName: 'scripts'
}))

// Handle styles:
const stylesRoute = new Route(({ request }) => {
  return request.destination === 'style'
}, new CacheFirst({
  cacheName: 'styles'
}))

const apiRoute = new Route(
  ({ request }) => request.url.startsWith('/api/'), // Match requests starting with /api/
  new NetworkFirst({
    cacheName: 'api-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200, 201], // Cache successful responses (OK, Created)
      }),
    ],
  })
)

// Register routes
registerRoute(scriptsRoute)
registerRoute(stylesRoute)
registerRoute(apiRoute)


