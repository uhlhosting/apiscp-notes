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
    "url": "webpack-runtime-46678df651e286a41c80.js"
  },
  {
    "url": "framework-5ac5fe15e446442d2191.js"
  },
  {
    "url": "d57d79ab-0382d98ab85fb7deed54.js"
  },
  {
    "url": "c322df3a-5f632ef7941949fb2955.js"
  },
  {
    "url": "ff39441c-bc9d3b40941c8833a14f.js"
  },
  {
    "url": "7b7ac2bb-2e087f6e871fe265d813.js"
  },
  {
    "url": "29107295-d794be6fa9134a630cd5.js"
  },
  {
    "url": "app-892455282bd3417c911b.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c0ef786c1542f97543b64da94a08e656"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-e8e7fbb006d57d32ed40.js"
  },
  {
    "url": "polyfill-7036f4991e8cc7b15bf2.js"
  },
  {
    "url": "6f89bbd25ed84b02c1c782caf7174e918b7ab15f-b049269422541e408c2f.js"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-pages-404-tsx-f207f2df0df27f9819b9.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "e0cffb9efa008148eb43d5a0ca14720a"
  },
  {
    "url": "page-data/sq/d/1437003973.json",
    "revision": "8f54787d57389379d7e636a1982e952a"
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
    "revision": "917ea62291403a81f4a9ab1b8e2afb36"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "7565875eb6c3366de1542f2bffb6d09e"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "2bee3dd8ea505b31a38506c5052e0e90"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-note-js-2468805542e9f1379586.js"
  },
  {
    "url": "page-data/cloning-wp/page-data.json",
    "revision": "d2b0d64f56416099dff0576648bba00f"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "ab0f2e563ec2662b94474b848e5c954f"
  },
  {
    "url": "page-data/disable-ipv6/page-data.json",
    "revision": "2f91e793052f64ded064bccaceb71bfb"
  },
  {
    "url": "page-data/dyndns/page-data.json",
    "revision": "274c710be42083fe37530ee0458c7c66"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-c95dfb19c411084cf8ea.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "e2dc7e3bf5ecf752deb5acae51a2316f"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "d45fa9f0b475491a4f29bd144739f0de"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "e941a25fbf2ee4dcd6e7de0ecafe5b22"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "36933974d2515df68eb40ed940333d8f"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "e15b25c928b30f0b8ee620060dc02c47"
  },
  {
    "url": "page-data/unblock-addresses/page-data.json",
    "revision": "71f0327bc91ace3a9b90eabde76b6e40"
  },
  {
    "url": "page-data/xdebug-usage/page-data.json",
    "revision": "f24356202fd2b772e57bd4608d70418c"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-6d70bdab74e3e84d2adb.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "0bcae0631cfc61ea5868429fe2d61913"
  },
  {
    "url": "page-data/tag/api/page-data.json",
    "revision": "b3bbcd91b49cceb2441978329d9e0442"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "dc169a8edff14cadee21fa6c7d78ecd1"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "fa8dd9244b888f933d9712d009b83ec8"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "418cb3ccb2e9556c148c2d40b5ec3f88"
  },
  {
    "url": "page-data/tag/dns/page-data.json",
    "revision": "d757ced0b2066b6db0f90ba22ca6ab13"
  },
  {
    "url": "page-data/tag/firewall/page-data.json",
    "revision": "53ad1ca7bd981f803780e72b37a505bf"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "1f7259699842baa63132f37457e3f62a"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "5aea2446c0e9440dbcfb066dbd8c8024"
  },
  {
    "url": "page-data/tag/network/page-data.json",
    "revision": "4cda01f246865e6c48a5dc881f1fc2dd"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "72380e99aaca1b7228e54cfe936272b5"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "5a372cf67aeb654683b5e11a5a024522"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "d3fc8da1f67c0eea2253d320451ccaaf"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "9593358fb4d1b1949f8954825c96e97c"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "e612a49579c39c797b7d435c712d0646"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "f85ba848af6353dc2ed79ab555e475d4"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "04bfef504f23e276f66572e4c3e5fc29"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "40c05c2cd6b8f3bb5dd7641b0c1d94d1"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "c39589082ec4e4d67e111ab897bffb65"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/app-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
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
  if (!resources || !(await caches.match(`/app-892455282bd3417c911b.js`))) {
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
