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
    "revision": "607f7665f249c5d9c28ebaf280c4e9fd"
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
    "revision": "5d148fb1cf0e6563b2e763db7f38a894"
  },
  {
    "url": "page-data/apache-tips-and-tricks/page-data.json",
    "revision": "0bf5b6c9367b0136451f29585dbdb338"
  },
  {
    "url": "page-data/cloning-wp/page-data.json",
    "revision": "967ecb22b5f9580bd822cc967a4c7155"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "3ba87effb1ea60a2bf0a1dac1dbfa106"
  },
  {
    "url": "page-data/disable-ipv6/page-data.json",
    "revision": "ecc455087dbccb66553f4f81a18359a9"
  },
  {
    "url": "page-data/dyndns/page-data.json",
    "revision": "f96ee847440af54a7e00c166d5301eea"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-b5251a8c695b75917e42.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "fdd95fc97fd7edf5926de7969efc3a03"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "74ab84546f8355730aa41489e252e7e1"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "10416a9dcf3abc00de1473f1035e1450"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "c6da45958cc068f1bfadafcd985496bb"
  },
  {
    "url": "page-data/preference-manipulation/page-data.json",
    "revision": "985e440e394e90d40f74599bd5905452"
  },
  {
    "url": "page-data/pulled-back-packages/page-data.json",
    "revision": "60de386190cda413a9efcd361ac5f7cb"
  },
  {
    "url": "page-data/redirect-cp-hostname/page-data.json",
    "revision": "cf9d8737fb1b84355bcbf23538ead4b1"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "5462989c6935e9a4a7daac98553ad8b0"
  },
  {
    "url": "page-data/temporary-passwords/page-data.json",
    "revision": "36d8cd92e632b543b085c4301e160526"
  },
  {
    "url": "page-data/unblock-addresses/page-data.json",
    "revision": "9b72e478a404563a02b806e4e1319a51"
  },
  {
    "url": "page-data/xdebug-usage/page-data.json",
    "revision": "0daa88870f4445ae69ef678526dde3bc"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-bdb2d2e74ba727fb7d62.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "30b07bce348ebb9113083737a8479a16"
  },
  {
    "url": "page-data/tag/apache/page-data.json",
    "revision": "1f8176af61b28562235ccdd22ebf626d"
  },
  {
    "url": "page-data/tag/api/page-data.json",
    "revision": "e14305a8c8987615f700ac19c68e307d"
  },
  {
    "url": "page-data/tag/auth/page-data.json",
    "revision": "1f587955cf8c1d2d2d5ecba2974f111e"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "14ce486305cc12a5a7551d00cf81c1f7"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "f4df23cb4198ce112980f82560779a99"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "716b9907d94eb35210d0bd582de55e2d"
  },
  {
    "url": "page-data/tag/dns/page-data.json",
    "revision": "5b2b4f8e0f7df6763a122757dc675765"
  },
  {
    "url": "page-data/tag/firewall/page-data.json",
    "revision": "b8c2627af73de3d978ab8d98d82264a5"
  },
  {
    "url": "page-data/tag/frontend/page-data.json",
    "revision": "4a1f26631115045b5c32ef7cbb727c68"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "80edb3342f866a43d08354c2a96ca7d9"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "956c9e25fb35c4653c93fb7e47eb506e"
  },
  {
    "url": "page-data/tag/network/page-data.json",
    "revision": "844d468c86c58fd980d9199989e6d4dc"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "78ccd8711ed67b1c52e09ad3828c9a2c"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "17cc4dfe869ab94c1688a84e1028b46e"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "3aa3dff89436533ede2fe00facf01ea7"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "0302a3c78db166112156a5b8a27d3629"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "b45b10960029707dd5d955cac3d5f3b9"
  },
  {
    "url": "page-data/tag/rewriterules/page-data.json",
    "revision": "abd454d48c631f1c3898d259e228a88b"
  },
  {
    "url": "page-data/tag/user/page-data.json",
    "revision": "aeebcdd1d1851e077fffedd62b2a9a1e"
  },
  {
    "url": "page-data/tag/websockets/page-data.json",
    "revision": "08ed8ebf93898928693864d71105f5b9"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "557f468217d15ed657eeafea6cbf6b77"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "dfa06bb137790a0ead1836a44e54a422"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "26133f94feafeb4239ef3aa58fe2001c"
  },
  {
    "url": "page-data/tag/yum/page-data.json",
    "revision": "9d256e25418248b93260ed049f97aa1c"
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
