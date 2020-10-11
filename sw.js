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
    "url": "app-4203684c94e98bfcb03c.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "42935017eee14236396708e413fcd730"
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
    "revision": "7b30cb65ab9ecf1eaf772b8cbf69c214"
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
    "revision": "c2944cbd1498a2aa64a1cf3b2cd5e491"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "65a7551ce90751101818a652da6c439d"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "2bee3dd8ea505b31a38506c5052e0e90"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-note-js-c60d7a569e64dcd6de7b.js"
  },
  {
    "url": "page-data/cloning-wp/page-data.json",
    "revision": "0b3e817608be125f4cf2415ad1e0de4f"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "2079c3e0131bfc8666be82c791b3c6f5"
  },
  {
    "url": "page-data/disable-ipv6/page-data.json",
    "revision": "a5fb185be3ca0f051d67ee593fecc77b"
  },
  {
    "url": "page-data/dyndns/page-data.json",
    "revision": "a2fe838916308118decddd68fa4d1474"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-b5251a8c695b75917e42.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "89e23ffcef411608ecd80e665ffed195"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "93af31ec144f0ee9e60eeb1769d7e984"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "6126fe049d8a44bebf8abbd5925572fa"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "8e6b18bd02dfc8c1dc72297d387742ea"
  },
  {
    "url": "page-data/preference-manipulation/page-data.json",
    "revision": "4dc05bf5c9bbffffb264a561c7465c98"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "c54e83555868f9488185638443c24e33"
  },
  {
    "url": "page-data/temporary-passwords/page-data.json",
    "revision": "1fa14a21a31c5a402eab178e74070fa0"
  },
  {
    "url": "page-data/unblock-addresses/page-data.json",
    "revision": "366e887f880c069f2f11a38221bed851"
  },
  {
    "url": "page-data/xdebug-usage/page-data.json",
    "revision": "dc58f85d7d041bb9927c396073949840"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-bdb2d2e74ba727fb7d62.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "9bbb00a26c30d27ad4726db398343662"
  },
  {
    "url": "page-data/tag/api/page-data.json",
    "revision": "0e9541fba2c4364cd7b970ebc1824483"
  },
  {
    "url": "page-data/tag/auth/page-data.json",
    "revision": "14121e6fdaf54ae45c274ce2cf4d67a6"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "997b01e1891377acd776c41ee744d0a2"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "21531ebd0673e143f1341bcb632c0ceb"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "fd1f222a9551283a4ab1171c57af1916"
  },
  {
    "url": "page-data/tag/dns/page-data.json",
    "revision": "90364bab319eeb3fa527385908903f5e"
  },
  {
    "url": "page-data/tag/firewall/page-data.json",
    "revision": "be9eff21e6f61b901c283bd2606e7e55"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "9b5321fb5039e83edf70daf48e1d0722"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "00a9b2173fb66fe3a1a168af45542db7"
  },
  {
    "url": "page-data/tag/network/page-data.json",
    "revision": "f18ebd3bc2675167ffccc5cd6113ab6a"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "a4090a4625c519143eec916acd06d661"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "4577fada0c256900c6e85afa4a5f28f8"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "cb870a0302aecd3083a320ec77939677"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "d7332d93dbd49716d4d79e9c69005b7f"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "d434338d8cb0d660f1733bebb99e807b"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "f761171c98307b6bbdd7a8c63795c8aa"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "7b0b11c37a1c16608be097c4258b13c5"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "449a92c8ce2dc622785599dd8393ba91"
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
  if (!resources || !(await caches.match(`/app-4203684c94e98bfcb03c.js`))) {
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
