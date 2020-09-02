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
    "revision": "a7ac9e00bebec769025954067dcb3973"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "ff637b559b9dc9f586ba5393458290ef"
  },
  {
    "url": "page-data/disable-ipv6/page-data.json",
    "revision": "14b6e925ed4726360aef222ab622b9dd"
  },
  {
    "url": "page-data/dyndns/page-data.json",
    "revision": "d1d59e2df613e4f7b9a16cb9023b7e3f"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-c95dfb19c411084cf8ea.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "b9135b5dec1acc3955bfff32f47af22e"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "57c5575ad257b345ae10b2b16daa603a"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "8840587a3a2fd0afccb816c0e96274fb"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "f31a4a08f7ce5304ab48234dd9f53336"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "48b94cb3a6a5f7451ed76dbb9e91e354"
  },
  {
    "url": "page-data/unblock-addresses/page-data.json",
    "revision": "b857ae71ddf960e00f871dbfbdbbbc12"
  },
  {
    "url": "page-data/xdebug-usage/page-data.json",
    "revision": "342eb7f867036b139074d14c1a510ace"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-6d70bdab74e3e84d2adb.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "799d8f4e0c4ea4ab63bc94bb7d60b3df"
  },
  {
    "url": "page-data/tag/api/page-data.json",
    "revision": "0326b847b04f5623bb1f7978f68c30f3"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "336942d246b35d3c366abcbea0982114"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "dfe950f073803e9d26a071eee6b79dae"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "60b1410c877e4ff616587665c446d70f"
  },
  {
    "url": "page-data/tag/dns/page-data.json",
    "revision": "c213865d9bb2f2ce5144b0c9b2c43c9c"
  },
  {
    "url": "page-data/tag/firewall/page-data.json",
    "revision": "48528ef18342796ed302b06b14c8e5d5"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "06cb4e69813562b294831ea24e468f5c"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "ff5526964f0be1f0205320ebe208b14a"
  },
  {
    "url": "page-data/tag/network/page-data.json",
    "revision": "0a3f62a94030bde6797e825d7ab0d63f"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "ca3a62a8e28341e348736fb31a41df7a"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "b9b0c7c7d4902de10b4b966acdb9db0f"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "5016dcec4f36345782ae0cedb7988974"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "f5491b943ce8000ffd19ffe31ff67667"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "1424f2b507f4d1c1f03b1b1b26a40e70"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "e7bf91c686f72e6a747921635cfe11a1"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "ba9ebff506591e7c8be1eaab051690ca"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "b4805b1c3d6a2556998882a86a6da8dd"
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
