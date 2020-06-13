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
    "url": "webpack-runtime-c6ddbd8359c15a6b0bb0.js"
  },
  {
    "url": "framework-75da9754c2a76bbaf08a.js"
  },
  {
    "url": "1bfc9850-f297dd4d176532a1baa1.js"
  },
  {
    "url": "app-dc8f9e207d17aab0bab6.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "660467659313045d87e4b642134fe73e"
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
    "revision": "68fb4d9e87b3937f6f0508ad8b4ee20a"
  },
  {
    "url": "6f89bbd25ed84b02c1c782caf7174e918b7ab15f-827376c7670a374c8f8e.js"
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
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-041d1560830ff86a7a3c.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "53425a74d7a4e30c112c894e2fc3a0e8"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-note-js-d542ffe08210a02628ba.js"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "711f166d20a104da5716fb84e2ae54cf"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "c72497f56e34da3c44c57ef801925af3"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "7df1dbe4cbcb3e04a70221a630b40327"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-f56aeeb1835e62f266c0.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "5ed31fb75712de90c5015e98a1e4aebb"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "4ab18db5aa05df0b354b609b6787991f"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "adc1b1595e7d361ebbf1c97bc6f09879"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "62973afa35ff769e2d8e66378d036039"
  },
  {
    "url": "page-data/tag/node/page-data.json",
    "revision": "2bba7a7ce83160f74f2bc11b4f99243e"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "73b4dcf21f6257d32f766712764e77f4"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "d4bd2010282d3a29892c975effa4faa8"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "3cb8b21a79f272a1a3428e09fde1fde9"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "7663c428d45f84be38a5bdacc22b63ab"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "b409dbc5e1d97179d1d933137ac23722"
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
  if (!resources || !(await caches.match(`/apiscp-notes/app-dc8f9e207d17aab0bab6.js`))) {
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
