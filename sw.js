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
    "revision": "7a05bbc6d77d0f0f3e31eb4fc29d8872"
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
    "revision": "92335933ddefe75a988528c24d813ca7"
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
    "revision": "ec29e3247fb90afa6bf74425eb2b7dd9"
  },
  {
    "url": "page-data/apache-tips-and-tricks/page-data.json",
    "revision": "1f9f9f3e0bac1fcfa5281c9676156a03"
  },
  {
    "url": "page-data/cloning-wp/page-data.json",
    "revision": "29515f482de0ccc07a909e932ab98556"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "f713531f7ef2db6479c8384106bd01b5"
  },
  {
    "url": "page-data/disable-ipv6/page-data.json",
    "revision": "5a5f28e1c1a5c7ddd6fd815345d0e2ce"
  },
  {
    "url": "page-data/dyndns/page-data.json",
    "revision": "cb58817fe1e75e5f558fae621a03bdf9"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-b5251a8c695b75917e42.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "5848423efe5f57374de0efbfcee68d1e"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "0757d4c6805b479f2465a404ca6f668c"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "e91d2b1f5887dc0a377e717658ad6ed9"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "32beaac84d46c507179296f4ea7fd0de"
  },
  {
    "url": "page-data/logging-subjects/page-data.json",
    "revision": "a3543a27dcb4015b20df1976ffa0d2b9"
  },
  {
    "url": "page-data/preference-manipulation/page-data.json",
    "revision": "e79919eebcb482df6ea003f88a42a330"
  },
  {
    "url": "page-data/pulled-back-packages/page-data.json",
    "revision": "53e310499e8b8d5acc323732865600fd"
  },
  {
    "url": "page-data/redirect-cp-hostname/page-data.json",
    "revision": "3c724c5af309e58520a6b301d5651cd4"
  },
  {
    "url": "page-data/resource-hogs/page-data.json",
    "revision": "afcac2a743c96949b59ca1395f8d2f26"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "c78911a88e4c34dc667e6ab9576c21d6"
  },
  {
    "url": "page-data/temporary-passwords/page-data.json",
    "revision": "cfc3ec2afdf75f8d1b5e81fa3aafd81f"
  },
  {
    "url": "page-data/unblock-addresses/page-data.json",
    "revision": "be98819cebf2a7359fdb8b6a1cfff462"
  },
  {
    "url": "page-data/xdebug-usage/page-data.json",
    "revision": "bdc92f8ae4ca05f3fbd3ce9b3948c065"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-bdb2d2e74ba727fb7d62.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "8c3381f3bd11dbae4bce89e4cd33b0f9"
  },
  {
    "url": "page-data/tag/apache/page-data.json",
    "revision": "6dfda35683024c8c73a0f0192c588fbd"
  },
  {
    "url": "page-data/tag/api/page-data.json",
    "revision": "f6046f7e0d74a87a396471985d59fb16"
  },
  {
    "url": "page-data/tag/auth/page-data.json",
    "revision": "622ff795667437d25e75d24d37cdc788"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "822827ff08052b8c289ce5dd7fecd1b6"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "7fe3c92a42eef23c19b1fc6087fc48c0"
  },
  {
    "url": "page-data/tag/cgroups/page-data.json",
    "revision": "b11ba3674a30cb77f3e4389b8e310873"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "40f698fda43866a658dacdf8d4d77d02"
  },
  {
    "url": "page-data/tag/dns/page-data.json",
    "revision": "9cf079d954a35f8fd42c32e5624fb922"
  },
  {
    "url": "page-data/tag/firewall/page-data.json",
    "revision": "998a725d85979f9485aeb83b9faf36aa"
  },
  {
    "url": "page-data/tag/frontend/page-data.json",
    "revision": "7a12fa853c7e13d7fa89b654d2e07d4c"
  },
  {
    "url": "page-data/tag/mail/page-data.json",
    "revision": "fc9d28a4d535fcf4e9eb24412a63adf9"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "d236d43c75e98623873551d64bbfa861"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "93c491a9d2b8dbf92d63c3a735fd412d"
  },
  {
    "url": "page-data/tag/network/page-data.json",
    "revision": "cd4efb832b34001d405941dd4d418fa0"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "74d5d7653c515e57b6e074006a704b94"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "da722ea9071f00017ebb1dc5dadacd41"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "be2d01103ba6a24392a2fb36dc1aaaaf"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "f2590ddaf14e77bea4fafbbcc9d0fc1a"
  },
  {
    "url": "page-data/tag/postfix/page-data.json",
    "revision": "dbde4766b967a3549dddc5754c2f67a8"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "1ffc4e41e26c0a241711b4f4394ffc67"
  },
  {
    "url": "page-data/tag/resources/page-data.json",
    "revision": "e8ba0b372f8083e80b5b4be5f2cbf609"
  },
  {
    "url": "page-data/tag/rewriterules/page-data.json",
    "revision": "0ff3c12b07b5f4b3832553dd4f03c116"
  },
  {
    "url": "page-data/tag/user/page-data.json",
    "revision": "90f2dc4381729fad2f65346e5e59bb7a"
  },
  {
    "url": "page-data/tag/websockets/page-data.json",
    "revision": "e5f001bd769c2059938ba7f8f2a53c0f"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "339453b07b5e557fd52877888220d811"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "83cbf4868d121ba1768f2461bbd16854"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "34c68e33abea83522145d1c4d38dc479"
  },
  {
    "url": "page-data/tag/yum/page-data.json",
    "revision": "c6911b832d0395d7d820ee1a8d8416f1"
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
