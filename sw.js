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
    "revision": "e38d06becb39ae1512aa4837d289e857"
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
    "revision": "a4c7ed00b36eafda73026cb821d2658f"
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
    "url": "page-data/apache-tips-and-tricks/page-data.json",
    "revision": "ffc02250f0a7f6a2949fd8b1bfe2925e"
  },
  {
    "url": "page-data/cloning-wp/page-data.json",
    "revision": "18021c66ab270227b961dba5ea44d542"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "d6c51efe6abcea03f9ecd426681b7047"
  },
  {
    "url": "page-data/disable-ipv6/page-data.json",
    "revision": "dcffc17e16ef4422da8a5d34b8cf4db6"
  },
  {
    "url": "page-data/dyndns/page-data.json",
    "revision": "9c958d997af331c54a3ab5621c5748cb"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-b5251a8c695b75917e42.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "1ddddc00306a7d4be65c4d9758dbafd5"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "206f0d2efbe6ec6e1c3b9baa6cc0cc4c"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "101082730a88408809c4d6d26c1a8f6a"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "034024e23e4dd13e99f61671b1ee6123"
  },
  {
    "url": "page-data/preference-manipulation/page-data.json",
    "revision": "daf2358c32427c440031df575dd2f37c"
  },
  {
    "url": "page-data/pulled-back-packages/page-data.json",
    "revision": "c236bcfd42419c5bbfea806afb18576d"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "196f464ccecd89295b4a1b34e5bb3417"
  },
  {
    "url": "page-data/temporary-passwords/page-data.json",
    "revision": "0d207a817e50bdf860c17bc619e7f35d"
  },
  {
    "url": "page-data/unblock-addresses/page-data.json",
    "revision": "226ec63f4a6f6b9870524e3f16c752bd"
  },
  {
    "url": "page-data/xdebug-usage/page-data.json",
    "revision": "02b1b775c4d8e6c69686ea0813f7a576"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-bdb2d2e74ba727fb7d62.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "d48a4f1a6b70a064c86bd2d7d08b0745"
  },
  {
    "url": "page-data/tag/apache/page-data.json",
    "revision": "280784d55207bea588156f0f4c232497"
  },
  {
    "url": "page-data/tag/api/page-data.json",
    "revision": "5dd0c1e25ff45e1a78c14d967a9fc147"
  },
  {
    "url": "page-data/tag/auth/page-data.json",
    "revision": "dc78f9f0c8eb6efc60fe10cadf33ad9e"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "470410b52877f17adb6e9a51d562bb97"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "e183e91ed00d4bb6d8487cc5a8d17e74"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "558b9b8ddf911f127c285b9d08372d05"
  },
  {
    "url": "page-data/tag/dns/page-data.json",
    "revision": "73b18297072ddffdead3a113b3a9bf09"
  },
  {
    "url": "page-data/tag/firewall/page-data.json",
    "revision": "3abaeb50607cd812c223ff300e63fbbd"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "43ae8a248a94bd740ade153e46b345a7"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "b125fccdc4535db36c42bafae73c047c"
  },
  {
    "url": "page-data/tag/network/page-data.json",
    "revision": "52c8efed70f1cc30750e9ec4d2779407"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "eac7216da4cb517d6b3eab14da44a1b5"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "f1e340fda500a3c2274762839b8268c1"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "6f5239eb1dce10c027ad1f5a99a39dff"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "b6dbfd7c4e541a2b2714fbee03517007"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "fc3402df8825bb588e62fbb7d40ebb8f"
  },
  {
    "url": "page-data/tag/rewriterules/page-data.json",
    "revision": "2cf6872a3f2899f9862e1425d9749251"
  },
  {
    "url": "page-data/tag/websockets/page-data.json",
    "revision": "467a7888b5f20041f3abd74c9cb9006c"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "e1494d7b75e83693b7d89c4b33278b8a"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "b2ed365b557556a59df505ed4b3cb244"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "ec97f6a61a51896f133c75c3848d0936"
  },
  {
    "url": "page-data/tag/yum/page-data.json",
    "revision": "4001119450fa7e91eb359b334a0c3c2e"
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
