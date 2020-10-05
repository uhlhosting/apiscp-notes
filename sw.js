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
    "revision": "075a8b688f1f1bc0a31d9dfc07e690b3"
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
    "revision": "8c0f0fab6c7ebc75be7bd75485ca2ce9"
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
    "revision": "661afc4d61a79e7511c53e9aae490ade"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "1735980afe4133dd7e30ff66ce04216a"
  },
  {
    "url": "page-data/disable-ipv6/page-data.json",
    "revision": "6b28e2d5719de40e2c2a023af1998abc"
  },
  {
    "url": "page-data/dyndns/page-data.json",
    "revision": "e8085bb1711ae0e8866008269fe025e7"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-b5251a8c695b75917e42.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "4662773f0112747a32c18ca710a0abe0"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "39fe671d2cebbe289679006677a97d1f"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "f6286768eb2ef2875c5ebcc81a21aa24"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "5be6764171c96aa96f5c9eadf94d9d35"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "35df46013862d2b836028577fff691ac"
  },
  {
    "url": "page-data/temporary-passwords/page-data.json",
    "revision": "eff8ca17ce760e987875a06a8766dde0"
  },
  {
    "url": "page-data/unblock-addresses/page-data.json",
    "revision": "9eeba7cf53ff86c5e1a2909d56d7eb0c"
  },
  {
    "url": "page-data/xdebug-usage/page-data.json",
    "revision": "414cc35b6009a7d066e9f9cf9cfaa216"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-bdb2d2e74ba727fb7d62.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "ea4ea7f35a6f8f39596bff735ca470cb"
  },
  {
    "url": "page-data/tag/api/page-data.json",
    "revision": "252c427c2afe36a30230ab3511c0653a"
  },
  {
    "url": "page-data/tag/auth/page-data.json",
    "revision": "aa9e102ad1f42b21c773daa1bb2e6422"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "4c54a73fcf30f3daf81a2f7be8ecc097"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "4f5238dde282f93767663736aa5e14ee"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "0f2181e1834424378ffb5650f096754e"
  },
  {
    "url": "page-data/tag/dns/page-data.json",
    "revision": "8f72da521f435852a872820daf3bde73"
  },
  {
    "url": "page-data/tag/firewall/page-data.json",
    "revision": "59919853b1bffe785ffe8cff0f907bb9"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "4f02f65d3abe3d58a0c57c00cdba9183"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "303d1f7dd2c611c2e5acb1fb186e4dc9"
  },
  {
    "url": "page-data/tag/network/page-data.json",
    "revision": "425fec927f13cc7bf8edd578b2d7cce0"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "8dd250531db04806f760e502231c2108"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "6e89226618f26c0667f17a3cd6c496be"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "b7428755c17ece92b98a794bb38cc34f"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "803612b1dd34572edad0c75b9f4e7b6a"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "52acc728f2afeeddff9bc68edd81b8db"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "176ad0173d0e1611db313e09e261c79f"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "a84f028ab128447034b6a77b2d73364e"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "7da30c525a3ce95818ad6b3ad2b36479"
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
