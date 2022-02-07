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
    "revision": "bcf9204341652794e277284b8081fba5"
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
    "revision": "0ae05cd9cfef3a44b2ba746368f3241e"
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
    "revision": "7eb8fec766d822b879093f87ee81b99d"
  },
  {
    "url": "page-data/apache-tips-and-tricks/page-data.json",
    "revision": "a2acdf9fb18fa819514ea6ff884ab216"
  },
  {
    "url": "page-data/cloning-wp/page-data.json",
    "revision": "e1a03a89fa458ca685e368011f77b11e"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "beca5f241850252949162bf6c50d1bc5"
  },
  {
    "url": "page-data/disable-ipv6/page-data.json",
    "revision": "6174f2da4548e15b4599717eacefaf3b"
  },
  {
    "url": "page-data/dyndns/page-data.json",
    "revision": "4895283726c64f29722ee02e5a31cde3"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-b5251a8c695b75917e42.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "215f255cdb3b4750e6f00536e5b2136c"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "dcc25ccd4b22d4374b0739c8fbd43e3f"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "a97c6c6830fc1da4bd97f5d152bc3e4f"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "e78653cf3dd6a596c1f2fadb8f98139c"
  },
  {
    "url": "page-data/logging-subjects/page-data.json",
    "revision": "698c2f5234ad5a30645544a41b8eea65"
  },
  {
    "url": "page-data/php-user-overrides/page-data.json",
    "revision": "944fc31c1b6e0f281fe9b40352538daf"
  },
  {
    "url": "page-data/preference-manipulation/page-data.json",
    "revision": "bc900531d6269baf8036a0a77bd9c407"
  },
  {
    "url": "page-data/pulled-back-packages/page-data.json",
    "revision": "68d4314e5d02eacea85866acee40b377"
  },
  {
    "url": "page-data/redirect-cp-hostname/page-data.json",
    "revision": "59f3f99029b1eaaeaa3afdff96e39192"
  },
  {
    "url": "page-data/resource-hogs/page-data.json",
    "revision": "13b9835eecd47bf28610a71f056160c1"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "bbe257c28cd6e5704d37aded883b8945"
  },
  {
    "url": "page-data/switching-to-edge/page-data.json",
    "revision": "27d0332e0880f922be498a344c48f238"
  },
  {
    "url": "page-data/temporary-passwords/page-data.json",
    "revision": "8e7d7c9c3ffe9e376f6188b9bf89b865"
  },
  {
    "url": "page-data/unblock-addresses/page-data.json",
    "revision": "122a4ee47afc8e509a600f501eab7520"
  },
  {
    "url": "page-data/xdebug-usage/page-data.json",
    "revision": "7b04bc07961f8b2af4c36d8209da0f9a"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-bdb2d2e74ba727fb7d62.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "1cc43ee7b467a560c485f281737ec7a2"
  },
  {
    "url": "page-data/tag/apache/page-data.json",
    "revision": "e417f50c290f35bfa0af2be9d9630c9a"
  },
  {
    "url": "page-data/tag/api/page-data.json",
    "revision": "8042a57ce6ac52813c8b4d4cf599bfa3"
  },
  {
    "url": "page-data/tag/auth/page-data.json",
    "revision": "156ab17284de18d934c4b58fc9bbd1c3"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "a7443a7d19fd19c59134bb5cd52c5849"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "60e46d3ffe83265b2f025fedf7695b62"
  },
  {
    "url": "page-data/tag/cgroups/page-data.json",
    "revision": "8145d7d429a04a4aa0a39297107ead27"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "de6ccd2a1a2fdc3609e9a5518856a16c"
  },
  {
    "url": "page-data/tag/dns/page-data.json",
    "revision": "93b36ecd0b01c771201692b79b9b2651"
  },
  {
    "url": "page-data/tag/firewall/page-data.json",
    "revision": "82249c5ebb9a3cf21dbd9682ea6aee79"
  },
  {
    "url": "page-data/tag/frontend/page-data.json",
    "revision": "0e6f1464e4d1f823a96c180a8198d65c"
  },
  {
    "url": "page-data/tag/mail/page-data.json",
    "revision": "8cbe0e9fb013d73b48ccd219994a4d28"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "247fc7b312f025e8e27bdd76b630a75f"
  },
  {
    "url": "page-data/tag/memory/page-data.json",
    "revision": "b950d873c3990c71d4d5494a691ecc48"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "9f1f46cb84b8f0038a13a94a7ec35230"
  },
  {
    "url": "page-data/tag/network/page-data.json",
    "revision": "abe73a8eff7b350286ad8807d7d1aea8"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "fe96a92f9b4fd9a15ea512783953fa63"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "eca5e3b961b1fa5b28d383d66cf60881"
  },
  {
    "url": "page-data/tag/overrides/page-data.json",
    "revision": "6578814c828f65153c468ac7276f5402"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "646e14968861c65cee6ae5d721a8f0d4"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "a3bd88f4ae6ba6c2b75ddf684aa90837"
  },
  {
    "url": "page-data/tag/postfix/page-data.json",
    "revision": "0a5285739477c45c5edf39f7c0fde07a"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "84da60787552d583b0787e9da34a476b"
  },
  {
    "url": "page-data/tag/resources/page-data.json",
    "revision": "d34d3355e3a19a10f7769bacdba724e8"
  },
  {
    "url": "page-data/tag/rewriterules/page-data.json",
    "revision": "4ee7fda1970e6a5caf3b8603917ef0b1"
  },
  {
    "url": "page-data/tag/upload/page-data.json",
    "revision": "2a68c5fab3a1bd8e86a039afa7f185d2"
  },
  {
    "url": "page-data/tag/user/page-data.json",
    "revision": "d3075fea6ab2c3ec1c9823205288d485"
  },
  {
    "url": "page-data/tag/websockets/page-data.json",
    "revision": "722dcbe2ed4f42c9726f97ca25b6d647"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "39fa6ac2e2456a880ecc24560e164fa1"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "c4187d10454b5eb9a112c30d7f2e8e71"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "e89d4b592e95f7d9e674064a8331eb24"
  },
  {
    "url": "page-data/tag/yum/page-data.json",
    "revision": "c6e6e1d85a01ffee76395f248e8de5b4"
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
