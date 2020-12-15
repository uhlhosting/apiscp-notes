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
    "revision": "b28242ca47f2f1b4e29644da8cd9f7bb"
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
    "revision": "0cd4e06c5d6fdcd0342b5265ba6f91db"
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
    "revision": "f8ecc6e34d61784cc6083ccd1046d52d"
  },
  {
    "url": "page-data/apache-tips-and-tricks/page-data.json",
    "revision": "e9d85d8f400de3070b54910652b4a146"
  },
  {
    "url": "page-data/cloning-wp/page-data.json",
    "revision": "1b85fa4d6d8f69f9735f2321a5169831"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "0ace4a9499a29452e4500521f5654d8b"
  },
  {
    "url": "page-data/disable-ipv6/page-data.json",
    "revision": "24c852039e3ab56ce88a1cb08748ca23"
  },
  {
    "url": "page-data/dyndns/page-data.json",
    "revision": "7ab450997e544b8a51ab45a9df0da7bb"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-b5251a8c695b75917e42.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "e463b4872c825d938114ffd901cec5ed"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "0d93d6b6aa1e19ca4b8dc3aae735b42e"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "7f78d52a8b8f17c7fd5dee325df65d80"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "db1735ff0e509d746d3e7013493de92e"
  },
  {
    "url": "page-data/preference-manipulation/page-data.json",
    "revision": "794cca7e086c6dc9508845740fa9f34f"
  },
  {
    "url": "page-data/pulled-back-packages/page-data.json",
    "revision": "26084e70aeae41e9edf65835154c124f"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "c84941132c7e2ee13e2aac2f845f9ad0"
  },
  {
    "url": "page-data/temporary-passwords/page-data.json",
    "revision": "73db9805601ff87ccb0a0a8cc0250b18"
  },
  {
    "url": "page-data/unblock-addresses/page-data.json",
    "revision": "ea5ce191713892a2b507e86ce6c868bc"
  },
  {
    "url": "page-data/xdebug-usage/page-data.json",
    "revision": "96cfee33c382de1e3bbc42824a8a0da9"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-bdb2d2e74ba727fb7d62.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "00b9d80e87da0a3e60fa4ca783dd2d23"
  },
  {
    "url": "page-data/tag/apache/page-data.json",
    "revision": "d9c35c5cbb5406b2b34be4d4aa5624ff"
  },
  {
    "url": "page-data/tag/api/page-data.json",
    "revision": "4b36fe099285cce6706b1bddd478c302"
  },
  {
    "url": "page-data/tag/auth/page-data.json",
    "revision": "3c44fdba1380fe8e33660161316e1170"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "d8a4b79802dccca2216384e7a3b8ada7"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "84fd6ecfec6b7d2989065ab0af60eefa"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "f1e515821889e5d228847848259c7f48"
  },
  {
    "url": "page-data/tag/dns/page-data.json",
    "revision": "f7aa3d9031edd03c4c723536f7e6c63e"
  },
  {
    "url": "page-data/tag/firewall/page-data.json",
    "revision": "d26fcebdb2893aba9f6f1a0ea6fbd4c6"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "92ea7bd26ba5e15ed03698d77977e3a3"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "863c9424c5106025b0a9b7b44bbefc78"
  },
  {
    "url": "page-data/tag/network/page-data.json",
    "revision": "8bd5b1287a02ffe1c22f75fef6c70d52"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "c8d18117d97a2e1900447e20eec874a2"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "d337f8b770145d08c6ae8a071bf0a49c"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "e9490eb256a867d7371162e2b9579f26"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "6248c1fd160fea6de8e5828a58b0118e"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "f546778808641696b685e45e5cfdf69a"
  },
  {
    "url": "page-data/tag/rewriterules/page-data.json",
    "revision": "daf50f580752de931333ab3d7467b631"
  },
  {
    "url": "page-data/tag/user/page-data.json",
    "revision": "2de6006f5247477b33cb4f0b865b68cc"
  },
  {
    "url": "page-data/tag/websockets/page-data.json",
    "revision": "77a8e1e52af3948c753134343bbc9180"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "4480fef0bf5c99641ad5175e9e818ce9"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "125cea76ead1b27365512da6b38119c6"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "e15aa9b43a35198a906032316c2b5bb9"
  },
  {
    "url": "page-data/tag/yum/page-data.json",
    "revision": "a028d6d5cf5fd14981cfe553f70c6bde"
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
