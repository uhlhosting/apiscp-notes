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
    "url": "app-b71994c52ebfc7207bb1.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2ad36a8b3c73a203d01abf5171b8ecd6"
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
    "revision": "208384c8bbc8b6ca330c0b32ebdfa5c8"
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
    "revision": "bc230df5739bb6f3d4e1ecf482ddf8d1"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-041d1560830ff86a7a3c.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "be455a070267776697ea83fa11e575cd"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "c14b7d627bbed3ecfd8a69baddec85ae"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "59e17a75804298121434e397ff50fb1b"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "f688332524ec8b49c9255014d5708ca9"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-f56aeeb1835e62f266c0.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "8c94a60bd641c4a1033d12df0cfea287"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "092e02d626a7d8c592ed5d9ced425965"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "06fe40ce402c7786917147467d4c8fcf"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "779126edef911c65537b2e5f51b2646e"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "ee449409d4b365639e5abf4778cf53b5"
  },
  {
    "url": "page-data/tag/node/page-data.json",
    "revision": "9b36dd555da9341e68425583c0e73fb1"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "bc1a65d5dce12f24823d863e3cd93781"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "89fbfdd3609a0e9cec7d79af1fd4d78f"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "578b4b7f21c23a00fa77afbc7418429e"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "0cb9ede9ac9ae2ac00318b2dd76ab3ec"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "358fa0ee1b34cad3f0878ab5c220b377"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "183b7a2467246709485c81e738c07bf9"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "47bf04e6ec8068f56935842735549317"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "0744f474c0e63df473a40f984698dfd2"
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
  if (!resources || !(await caches.match(`/apiscp-notes/app-b71994c52ebfc7207bb1.js`))) {
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
