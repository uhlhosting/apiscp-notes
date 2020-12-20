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
    "url": "webpack-runtime-87f76ea735d6a17d9001.js"
  },
  {
    "url": "framework-4f7388a1aba29813794a.js"
  },
  {
    "url": "d57d79ab-642b7b7900e7a64c1326.js"
  },
  {
    "url": "c322df3a-97400b27e541dd22d873.js"
  },
  {
    "url": "ff39441c-00b3eaf0c8225ed1b373.js"
  },
  {
    "url": "7b7ac2bb-aeb8e4323be1e136095c.js"
  },
  {
    "url": "app-01b3f5b1fff7dc473c9c.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "de07f93ecb53ddc6b6ce8b11a84a5c05"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-3ecdc9640efe42acf30e.js"
  },
  {
    "url": "polyfill-fe0721619ea5f6cf52ab.js"
  },
  {
    "url": "6f89bbd25ed84b02c1c782caf7174e918b7ab15f-95b457c284bb8fe1b46b.js"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-pages-404-tsx-8591f6d4154a6c6acbc0.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "e0cffb9efa008148eb43d5a0ca14720a"
  },
  {
    "url": "page-data/sq/d/1437003973.json",
    "revision": "9962b02e9c43a777e7c7fbdfdb55d762"
  },
  {
    "url": "page-data/sq/d/2744905544.json",
    "revision": "6fded333b4ed834f59ae5dc670f8d388"
  },
  {
    "url": "page-data/sq/d/3664657028.json",
    "revision": "c0a22cfc57ceb5071c1914b150be4ccf"
  },
  {
    "url": "page-data/sq/d/467212769.json",
    "revision": "c0ae9727df1564016a1819d0acccb21e"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "2737bd2d50af211824b55483521717ec"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "2bee3dd8ea505b31a38506c5052e0e90"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-note-js-c60d7a569e64dcd6de7b.js"
  },
  {
    "url": "page-data/additional-admins/page-data.json",
    "revision": "c74c1cdfb64b6f0537c49b0de23ad08e"
  },
  {
    "url": "page-data/apache-tips-and-tricks/page-data.json",
    "revision": "7ec463819ababa3824b8f69fe695bd2c"
  },
  {
    "url": "page-data/cloning-wp/page-data.json",
    "revision": "cce31995337596d98230683ed245b006"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "bfb78bf5ac737d8491df7d3522f3fece"
  },
  {
    "url": "page-data/disable-ipv6/page-data.json",
    "revision": "6d37c2c00921968ff44187c4df313145"
  },
  {
    "url": "page-data/dyndns/page-data.json",
    "revision": "e90004d3fb69a4c199917d91fd9769a7"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-b5251a8c695b75917e42.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "b1eac8abca500aff1e300bbf6ca8418b"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "7c2068cf2b5e8a2f2bcccdf39b462613"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "4484554a2cba198fe3e602a3c62a8fc7"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "0b6fb28741ba36844445ea42e9fae3da"
  },
  {
    "url": "page-data/preference-manipulation/page-data.json",
    "revision": "ea79e842c0e60545d0050d924a32d6f0"
  },
  {
    "url": "page-data/pulled-back-packages/page-data.json",
    "revision": "2c1f8fc2602001b956bdaecebbbad40b"
  },
  {
    "url": "page-data/redirect-cp-hostname/page-data.json",
    "revision": "4ad6405678559266bcb9a6b3beed0f31"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "f16ed1d7848a82d8f7e28b401903f7d5"
  },
  {
    "url": "page-data/temporary-passwords/page-data.json",
    "revision": "557275f86a8d50870472cc780e0db594"
  },
  {
    "url": "page-data/unblock-addresses/page-data.json",
    "revision": "3c2d9ed3209d7d2110d9e7eeb69068a7"
  },
  {
    "url": "page-data/xdebug-usage/page-data.json",
    "revision": "e7480b43d6094f87ad131b6111aa9159"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-bdb2d2e74ba727fb7d62.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "66d41d0902a245eaf453b77d95899aa9"
  },
  {
    "url": "page-data/tag/apache/page-data.json",
    "revision": "4490581af33d26939a83963b27330bda"
  },
  {
    "url": "page-data/tag/api/page-data.json",
    "revision": "d9e3eae1c5d116166b40a1466f46806d"
  },
  {
    "url": "page-data/tag/auth/page-data.json",
    "revision": "378c10a25d1d8b852d3988b20494ea8b"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "cda62d05ff462f621fc1f62c5edf304b"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "7f4d81ea71e0aa3800718e48cb8bb6c9"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "f36d3c2c31031ad720567cd13525067f"
  },
  {
    "url": "page-data/tag/dns/page-data.json",
    "revision": "2f5a24c5c9e857a7cb8371925d2799b6"
  },
  {
    "url": "page-data/tag/firewall/page-data.json",
    "revision": "be3747ac583ec11837e16ebc2ef3f116"
  },
  {
    "url": "page-data/tag/frontend/page-data.json",
    "revision": "9bd1984e60f95b532d371af10653f141"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "8d12e95ddc8851e351e84bc427babd13"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "d4b7834d04dda275edce0c4701503a92"
  },
  {
    "url": "page-data/tag/network/page-data.json",
    "revision": "bcb969ab69a523619ad1c9fe318ad4ac"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "ce3f2d23ff89f5cb6dda0f42a3223d10"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "593a1bbf849a1c51f807de1716f700f0"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "ccf15e368b331bcd917a755f5b0b37ea"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "2f995d862217c777e24e5c95253d40be"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "bce0989efec319b1bd35cb05cb638b43"
  },
  {
    "url": "page-data/tag/rewriterules/page-data.json",
    "revision": "29dcf85c5d4043cdd99f265717e8c807"
  },
  {
    "url": "page-data/tag/user/page-data.json",
    "revision": "caf8c4180a703c52f78dc2324adae3aa"
  },
  {
    "url": "page-data/tag/websockets/page-data.json",
    "revision": "b6ffe2db87d225bb4a4bc7620aac1675"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "f99158ebdb028023bdb6916eb767abe9"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "fb5ca6913ba0170d3846cdfbcba5e7ae"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "d736cdde2269378a9dfa98ed6e972197"
  },
  {
    "url": "page-data/tag/yum/page-data.json",
    "revision": "b50fc0caa9d888736bea97dc6515d1ab"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "c39589082ec4e4d67e111ab897bffb65"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
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
  if (!resources || !(await caches.match(`/app-01b3f5b1fff7dc473c9c.js`))) {
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
