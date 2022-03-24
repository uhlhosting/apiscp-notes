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
    "revision": "79bb6546f8de424186560d83b598d373"
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
    "revision": "45921842785e856abbf3b156c4f084d4"
  },
  {
    "url": "page-data/apache-tips-and-tricks/page-data.json",
    "revision": "94d4dc0886e2c523e80be71823f07322"
  },
  {
    "url": "page-data/cloning-wp/page-data.json",
    "revision": "35579153dc7602c02da392faa0c57e60"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "ef3ed71702c792db55017b03fa22230a"
  },
  {
    "url": "page-data/disable-ipv6/page-data.json",
    "revision": "e1757146747dcd4286bd46cbec74219c"
  },
  {
    "url": "page-data/dyndns/page-data.json",
    "revision": "e9fddbd8e6a1e80769ebeae304a86ab2"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-b5251a8c695b75917e42.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "2c9262261a787176fb1d4268a40e5fcc"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "2faf64636f09bb3070124be3768b9ada"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "d4d997eefed7777e5d31ffe7bedce908"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "6e0c99e350329ddbb52a93b803e2665c"
  },
  {
    "url": "page-data/logging-subjects/page-data.json",
    "revision": "a42c072d700de6329039c16dc3fa8669"
  },
  {
    "url": "page-data/php-user-overrides/page-data.json",
    "revision": "76029b97a0f7278fea2fdd70d8be4e1c"
  },
  {
    "url": "page-data/preference-manipulation/page-data.json",
    "revision": "bf6aae397b2888b2382613c299baae27"
  },
  {
    "url": "page-data/pulled-back-packages/page-data.json",
    "revision": "cb4875fc27d4bee33a636ac142140077"
  },
  {
    "url": "page-data/redirect-cp-hostname/page-data.json",
    "revision": "9baf85fd46121d82952ff67a4bbdd840"
  },
  {
    "url": "page-data/resource-hogs/page-data.json",
    "revision": "07d2bdeffd8ea9d98969955f54ca3f8c"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "a29cbcb2d79ab24878080a13aa265390"
  },
  {
    "url": "page-data/switching-to-edge/page-data.json",
    "revision": "9a4e1c33e4852f5d5657a6dbc489d08d"
  },
  {
    "url": "page-data/temporary-passwords/page-data.json",
    "revision": "7ecae2739ff8843fb953130078b22b6e"
  },
  {
    "url": "page-data/unblock-addresses/page-data.json",
    "revision": "116e8f9b20049d8fa4187a29b078541f"
  },
  {
    "url": "page-data/xdebug-usage/page-data.json",
    "revision": "64b55f5372e16e35308030295fcbc618"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-bdb2d2e74ba727fb7d62.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "c89dda0c5b5089eedafb5e1df270ec5c"
  },
  {
    "url": "page-data/tag/apache/page-data.json",
    "revision": "5dd9fb74f8adaca5d0dfe59dc7ddfcb5"
  },
  {
    "url": "page-data/tag/api/page-data.json",
    "revision": "8c3f26169aede8e67ca589e81c47020e"
  },
  {
    "url": "page-data/tag/auth/page-data.json",
    "revision": "eb892d4245b2e15ba3be65b39744f7fb"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "04c9e9dbe31a4491903b35913c1975e2"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "90ba1b86a0560df74b507ad28cbe2fe1"
  },
  {
    "url": "page-data/tag/cgroups/page-data.json",
    "revision": "1cdbc5467a02188552fa9af475209114"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "3c77f6c0933295b850020cb6a494016e"
  },
  {
    "url": "page-data/tag/dns/page-data.json",
    "revision": "d5ec55d78983edb508e0a9c7ca470a33"
  },
  {
    "url": "page-data/tag/firewall/page-data.json",
    "revision": "ebe338e460231b2e5a3dc545084c053e"
  },
  {
    "url": "page-data/tag/frontend/page-data.json",
    "revision": "ebee510d86c85d9f11808bdedc1d4e9b"
  },
  {
    "url": "page-data/tag/mail/page-data.json",
    "revision": "4462b3a5627c4cad98edbbdffe6919ec"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "10c44207d52a6aba2171699ea11c1fae"
  },
  {
    "url": "page-data/tag/memory/page-data.json",
    "revision": "a8ba8b09f8d7c6b98e1dc3b4309bf4b6"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "d8eb5785c2d1eba31189b28bc707383a"
  },
  {
    "url": "page-data/tag/network/page-data.json",
    "revision": "7be37746caba77062fd810e6bd0e0361"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "6f73330e509a1dfe6e0b27fc0b22a189"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "698e2963ef22e66ba458d57ac2b40f22"
  },
  {
    "url": "page-data/tag/overrides/page-data.json",
    "revision": "37e74a26069b8b774d9e486003f49aba"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "1f577c613fbbfc7bed591c260bae1b31"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "c6d7e30758e11444f72d49895938a3d3"
  },
  {
    "url": "page-data/tag/postfix/page-data.json",
    "revision": "a8a598b9f68e54374966589199de01a0"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "c719ee2460e90c9a09097da327c197e6"
  },
  {
    "url": "page-data/tag/resources/page-data.json",
    "revision": "ce91304f7bf645c274df307c325345ca"
  },
  {
    "url": "page-data/tag/rewriterules/page-data.json",
    "revision": "1147f6e54b6644804832937729ce7730"
  },
  {
    "url": "page-data/tag/upload/page-data.json",
    "revision": "3a515ef437b4a357f96524c90133826b"
  },
  {
    "url": "page-data/tag/user/page-data.json",
    "revision": "39f039dba4f63900be962f105c8f219c"
  },
  {
    "url": "page-data/tag/websockets/page-data.json",
    "revision": "e1a1210cfd686515635cf05e84008186"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "72b1e9dcf179ff573647be8bd2030b83"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "3f479ce71b38d6f3e575c63ce0681f63"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "484fbe5721a8325dddeb2c71442747e2"
  },
  {
    "url": "page-data/tag/yum/page-data.json",
    "revision": "f17cee8c46d7068b58bee1174d3d2ee2"
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
