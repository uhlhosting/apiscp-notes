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
    "url": "webpack-runtime-fbb5220caef607c16421.js"
  },
  {
    "url": "framework-75da9754c2a76bbaf08a.js"
  },
  {
    "url": "1bfc9850-f297dd4d176532a1baa1.js"
  },
  {
    "url": "app-9cef45c013493346b90d.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "df8051943197689c9f38e283d8316cf9"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-c25716df4fbb2532700a.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "680ab8c22e15ec027f2f20a0e145a631"
  },
  {
    "url": "6f89bbd25ed84b02c1c782caf7174e918b7ab15f-90b4a45c035fecc326a5.js"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-pages-404-tsx-8982e1a10749c85b6a7e.js"
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
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-note-js-d542ffe08210a02628ba.js"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "151d0b2a4215ab71c91d37a49d2c1e27"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-041d1560830ff86a7a3c.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "95c8679be1c1ca17f5d9b5da5b628e6a"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "32935f20b6118a997f631e019e68ddbd"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "fab14653700cb71c49afcba27a9c8cd3"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "b30b9b4f0ad6cef915b23163ab46a346"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-f56aeeb1835e62f266c0.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "93950addc5f9e0a716b4416c26328b8e"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "fbbbdf0844df495b2c7d2df7a985440a"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "12e987640a2e396064e5acd31aeb6a8c"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "2ebc2a282b84e0d4338134cee5a9af77"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "c30ff064504d90b2df45204981b41fc4"
  },
  {
    "url": "page-data/tag/node/page-data.json",
    "revision": "1bf1d337ff5162535a7f22dd6f3c2044"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "303dede0caca6dbaff95f915164a8085"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "98796df055b1ce44dc193ea0af2ae40b"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "a3ac7dd5d17f9f5e024a38993075aee2"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "2483e754a1e2b7f45318feb092380d57"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "fa3023e723484b8cb4de57086fb8195e"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "11cf555d7b3d41ef8d273e19fbce5500"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "6fc7d77c9d205b153d291d77191966d6"
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
  if (!resources || !(await caches.match(`/apiscp-notes/app-9cef45c013493346b90d.js`))) {
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
