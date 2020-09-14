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
    "url": "webpack-runtime-46678df651e286a41c80.js"
  },
  {
    "url": "framework-5ac5fe15e446442d2191.js"
  },
  {
    "url": "d57d79ab-23a1ec8ab763ae01d490.js"
  },
  {
    "url": "c322df3a-5f632ef7941949fb2955.js"
  },
  {
    "url": "ff39441c-bc9d3b40941c8833a14f.js"
  },
  {
    "url": "1bfc9850-6d3c4bc9bc5a0bcc4bb2.js"
  },
  {
    "url": "29107295-ae5053c355cedfa6cf61.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "4491aa7ba72b1374a71f5dac0c9980d1"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-e8e7fbb006d57d32ed40.js"
  },
  {
    "url": "polyfill-c7657d5a7354cc137327.js"
  },
  {
    "url": "6f89bbd25ed84b02c1c782caf7174e918b7ab15f-b049269422541e408c2f.js"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-pages-404-tsx-f207f2df0df27f9819b9.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "e0cffb9efa008148eb43d5a0ca14720a"
  },
  {
    "url": "static/d/1437003973.json"
  },
  {
    "url": "static/d/2744905544.json"
  },
  {
    "url": "static/d/3664657028.json"
  },
  {
    "url": "static/d/467212769.json"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "b06c54bf71f979f65c4f1e98711c57f6"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "2bee3dd8ea505b31a38506c5052e0e90"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-note-js-2468805542e9f1379586.js"
  },
  {
    "url": "page-data/cloning-wp/page-data.json",
    "revision": "5c6253aa1ef9d5faf5cd913ca23012ae"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "415ab984ca180c7e165c2c88d15bf971"
  },
  {
    "url": "page-data/disable-ipv6/page-data.json",
    "revision": "f7368f8ebd3d8477f36e220b33efd6c2"
  },
  {
    "url": "page-data/dyndns/page-data.json",
    "revision": "7013e8c8f3acd5221df21fbfca50d413"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-c95dfb19c411084cf8ea.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "c6b8655e5a3472d400e44f247c163969"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "11227b2f208d357c857f66e362deea38"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "5a7b454ba1645e12a8c2251a686e1d69"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "081441da64e32b708d7b7722c214dd38"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "9f49a411bcf3a8361030747741f26210"
  },
  {
    "url": "page-data/unblock-addresses/page-data.json",
    "revision": "76a0c8f676e1d95f348a6a2aa04b2411"
  },
  {
    "url": "page-data/xdebug-usage/page-data.json",
    "revision": "57f0c13eb9bb6d1ef3d911af9523f4ea"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-6d70bdab74e3e84d2adb.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "fa856f1c181ed008da42e9250d0d8bcf"
  },
  {
    "url": "page-data/tag/api/page-data.json",
    "revision": "c3ce5fa493b5a704289097fe8f09c920"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "295b42b6e896f682a2b56d80775df907"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "cc1c008742d3c9e12f07316a4dc4069e"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "1e58f62a007e2aa6abdda4e6de5e802e"
  },
  {
    "url": "page-data/tag/dns/page-data.json",
    "revision": "c6cd3b30388c9cfc1c1199e334121da7"
  },
  {
    "url": "page-data/tag/firewall/page-data.json",
    "revision": "40496db8fc95c4b80f11841ebfb9b9c0"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "5c2162bd2c435c620f1fd7d76f5e768b"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "c7cc46ef7cace3a42630d5711d8d5720"
  },
  {
    "url": "page-data/tag/network/page-data.json",
    "revision": "f9acc32bb96bd6a314dbbeae298863f8"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "8464eaf1e050f8a32320b88f9a2fd5e6"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "d7e200aa5dccc62ec985241f96f86c57"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "19bfbea8c35299e52cce460ea91030b0"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "bfbb66981e22be1ace56bc271652d1be"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "742453fa2533409f45d58bde31ee589d"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "02bb9f6937e6b90b36bc52837850992d"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "e65cbbc85cb012b008bc3ea57b1b7d32"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "1a0b4bb91340783444d4736145035929"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "c39589082ec4e4d67e111ab897bffb65"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/app-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

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
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-c00dee8351b89bacf9dd.js`))) {
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

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
