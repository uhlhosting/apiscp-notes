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
    "url": "webpack-runtime-3761b1fd4e3e9ba096e5.js"
  },
  {
    "url": "framework-9fe058f4359556db0d38.js"
  },
  {
    "url": "d57d79ab-7c8246a08fbe2617b54f.js"
  },
  {
    "url": "c322df3a-ced6e0ccc9168bbf79e6.js"
  },
  {
    "url": "ff39441c-1e7d0a230315c3c69501.js"
  },
  {
    "url": "29107295-9ea4360ea8ec8d33e511.js"
  },
  {
    "url": "1bfc9850-f297dd4d176532a1baa1.js"
  },
  {
    "url": "app-f8655d633824b43c5265.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "774e429e8d3daba6ac7767e291b11ed8"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-3ecdc9640efe42acf30e.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "9e30e860809d26077505f8c670098e52"
  },
  {
    "url": "6f89bbd25ed84b02c1c782caf7174e918b7ab15f-30b92da70ce0bfb7bdce.js"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-pages-404-tsx-d2eea123e5a5488fb7bc.js"
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
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-note-js-e905357807508dd4a39f.js"
  },
  {
    "url": "page-data/cloning-wp/page-data.json",
    "revision": "8bb6bdb50b396a2a00cb5c9b5d781229"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "ab6a87a025389bc3b8e3417648d391b5"
  },
  {
    "url": "page-data/dyndns/page-data.json",
    "revision": "ab847413f8d06e321182584235a3908f"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-bed5441c0313a2e73a8a.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "487dfafe412c7aad2fc6fb5487974cb7"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "ef223d044c706522b6474b7560d19b46"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "3d3613d285e54ec4191e36bf0ec5fb09"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "cfcbeeb7e1357a5efd15cbb883cdc84d"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "57dc5f17927d2761beddd3a2d8e083ab"
  },
  {
    "url": "page-data/unblock-addresses/page-data.json",
    "revision": "5d4658d0f24999e6ca08e3955510bcca"
  },
  {
    "url": "page-data/xdebug-usage/page-data.json",
    "revision": "2f23d01bd4a3501090ad4d83b26470ca"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-1b5064b0b2657d818cc0.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "097ae53232621eb01075d708ece3353a"
  },
  {
    "url": "page-data/tag/api/page-data.json",
    "revision": "7e401ee2a3edcb000abb64c607cbc79f"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "8d847aca908cd63ab466aa6c9b608ba7"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "69993377d3bdc5172c9c5f51bb65a50e"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "00d02184cf45824f49c83b5773dfdae3"
  },
  {
    "url": "page-data/tag/dns/page-data.json",
    "revision": "2449e7a4ef31838908cd559782e3f71e"
  },
  {
    "url": "page-data/tag/firewall/page-data.json",
    "revision": "d5ecf9b4c8d593683c0ce981ee7b5739"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "2652776f3ec23a1c831f30ae9b0f4f0b"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "a0d4efe4f39f0a6640d688c27f093159"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "88fc8a36a6a9dd7b0add36032844b5b3"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "c2fffa4c6cf9468fab9efca79f6f6faa"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "b09c0e228c6b69a8f4bc626763ccfb88"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "e2dd9950c7009bbbd1a4762f103eedd4"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "6e1871facea031db946d1167ffbdc869"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "1255c5082f42bb5ce4b0b3396cf1b1c5"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "6fb9a1026bcb16338a3ee1da5ba8cb85"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "8bb2fc450b710782d3e28070d3ebccda"
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
  if (!resources || !(await caches.match(`/apiscp-notes/app-f8655d633824b43c5265.js`))) {
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
