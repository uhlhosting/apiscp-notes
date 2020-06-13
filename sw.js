/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-87d41f13f963db74c7a6.js"
  },
  {
    "url": "framework-20335242239071f73386.js"
  },
  {
    "url": "29107295-9ea4360ea8ec8d33e511.js"
  },
  {
    "url": "1bfc9850-f297dd4d176532a1baa1.js"
  },
  {
    "url": "app-ef406f74a7abacfc637e.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "39067759b64f94f060128aab542f93b0"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-06e676c3cd7b78941a0b.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "a12115e7f2e2fa1198f16592c990becd"
  },
  {
    "url": "6f89bbd25ed84b02c1c782caf7174e918b7ab15f-418d45585245cc44425a.js"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-pages-404-tsx-cca164f851d04e0d9e05.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "9f7e23dffed634bade188874f7c02852"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "097a0308fc1b1a1fc37e774650450f9f"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-note-js-f80ebd36d827eeda99a6.js"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "151d0b2a4215ab71c91d37a49d2c1e27"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-b3520037b68af7768459.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "0f282ada519897ed483413c5248ce7c5"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "44c0b67ad239b26614b82db64f92ed91"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "3585f003de9485721e48c2e97b2d1cfd"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "64d9768c84256cd86eb5172c719706b4"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-75fe09e4bcc3843df529.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "20864963b38ea0c035ce6ca82210af88"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "9fc95476be18e0e2b832c45f71e3ebd9"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "3039a534712dffa94840d981804cd1fd"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "88649f1d6612debac04754db1e89df74"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "23bc0f4849c4c5bf783cae25d6ca3e37"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "295035acaa0c7936d92738aaedc1cdc9"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "bdbd7ada35b53a853ac76738a2bf7d7b"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "b34c4db0de8e25b0df1e8d382ddc9308"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "3b5204dabe7236c79dee824e58a68252"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "a6ab5135d3fe61bec55a2b2acde02899"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "23b43e45011c8e45bd1af19030f3f983"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "18b6d417d9ba723af804f262fc0c0a35"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "41061610b5e94ca529cf842700bd64cc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/apiscp-notes`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/apiscp-notes/app-ef406f74a7abacfc637e.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/apiscp-notes/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
