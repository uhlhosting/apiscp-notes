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
    "url": "webpack-runtime-8de0ae948ed94940f72b.js"
  },
  {
    "url": "framework-9fe058f4359556db0d38.js"
  },
  {
    "url": "d57d79ab-4243d0eccb30f9bc167f.js"
  },
  {
    "url": "c322df3a-ced6e0ccc9168bbf79e6.js"
  },
  {
    "url": "ff39441c-1e7d0a230315c3c69501.js"
  },
  {
    "url": "29107295-8bcee9bdde434b61f4ab.js"
  },
  {
    "url": "1bfc9850-f297dd4d176532a1baa1.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "08dc5afb8f7adb3bd863af4f81a63002"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-3ecdc9640efe42acf30e.js"
  },
  {
    "url": "6f89bbd25ed84b02c1c782caf7174e918b7ab15f-a1db964a34932b9ca4d3.js"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-pages-404-tsx-8591f6d4154a6c6acbc0.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "9f7e23dffed634bade188874f7c02852"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "fda70cd786fc027b5a1800dfaeb180c1"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "097a0308fc1b1a1fc37e774650450f9f"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-note-js-283f4fe298b1ec725286.js"
  },
  {
    "url": "page-data/cloning-wp/page-data.json",
    "revision": "d45988c9b8617364ca2dee6c083d484d"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "f34b605ecb7887a94deba2040bc4423a"
  },
  {
    "url": "page-data/dyndns/page-data.json",
    "revision": "b8c0905feff04355bd67eba37eed06b8"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-d0ca65d67679da87953b.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "0ce2489e47db908b6d053c38c2411758"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "08ed1ca9b50af061c0b17576f5d77ef6"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "4dc326c8b7122616562e67a975d4da9a"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "19be20f7e7ee4f3453dd20c8354649e0"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "9ae71eadcdff37177fff41f4715b11e7"
  },
  {
    "url": "page-data/unblock-addresses/page-data.json",
    "revision": "5b9cecfbbe932612c668912e388543a4"
  },
  {
    "url": "page-data/xdebug-usage/page-data.json",
    "revision": "25440a7a997e0d72290e5d7d3d97d9f1"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-91033ac48f0ff912f6e9.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "d1348922109fc7a3086a37f4852472bd"
  },
  {
    "url": "page-data/tag/api/page-data.json",
    "revision": "a3b73877e9d239aa888aea06e3733f34"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "7cc33e5dda90ae9cfc9c2ee3afa2b34b"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "be87931c723299e9602e7c4a8eed0589"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "4d2dd438b59584f5d3d72837bf03c952"
  },
  {
    "url": "page-data/tag/dns/page-data.json",
    "revision": "131b146a32187a545ae5f8e885b91e25"
  },
  {
    "url": "page-data/tag/firewall/page-data.json",
    "revision": "28e0f243f12365ac2df1d3a7526fb550"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "9d9e91546950e6c6ab3facf68cae4a26"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "ac314437e2166dd8395d11f9edb728d2"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "a78855837de754509cf4ee5daedb1c7c"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "05403a4b609772184d2c68fa13680f1a"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "5b799ee0dda68334903def0ace84aa8b"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "ab453f15b88d504024eb731cce0a38fd"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "fe3a01904789f2fe1897415c5bf0563f"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "a11a104fae16038e07f603af1c0aed23"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "c277ba8ff45d0443ed6155be26ff2ccd"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "186766e9cba6791d4aae55519dc5605e"
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
  if (!resources || !(await caches.match(`/app-efa6153994fa903d1985.js`))) {
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
