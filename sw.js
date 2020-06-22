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
    "url": "webpack-runtime-d8e165771dbcce01c7c3.js"
  },
  {
    "url": "framework-20335242239071f73386.js"
  },
  {
    "url": "29107295-9ea4360ea8ec8d33e511.js"
  },
  {
    "url": "1bfc9850-f297dd4d176532a1baa1.js"
  },
  {
    "url": "app-f140dd2ad58010c015c4.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e99ea7f72278d51b326efe5d08d66156"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-06e676c3cd7b78941a0b.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "6188382daa0ae3b3d44740431d48ba58"
  },
  {
    "url": "6f89bbd25ed84b02c1c782caf7174e918b7ab15f-fb3216f6ee05a0aff9a5.js"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-pages-404-tsx-0776de173bf2cb38972a.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "9f7e23dffed634bade188874f7c02852"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "097a0308fc1b1a1fc37e774650450f9f"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-note-js-4f6329f1541d44a340ad.js"
  },
  {
    "url": "page-data/cloning-wp/page-data.json",
    "revision": "50c70995e3cbae3988a6d876f705eb32"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "2a012f4e682ec58ca164503bc1b88ef7"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-dcd5d8b3ab72e5b2319c.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "c75c07f9b2374dca5dc3d56fd2fedcdf"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "80cfe0a0d0a0d5539c30923392327678"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "2bfc8abad1a604db1ab0bd3ad4e77614"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "20bd0c2cad1daca20350601f5b4ab961"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "d1b722980e4928bab4fbf8cc96ff31dd"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-40721600d03ff81bb43b.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "ed1b48506dbda11a4ba4d1bd55cdd7ca"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "30b40b40a82f3a6ca49c3063630f8766"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "c6a972c5c7a0ccbfe54d43dde413a658"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "3041faa6e7a212bee17eede0d984da65"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "1b55de13895a97d656601d4942ca0bc0"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "9a528b2d738d5acfe5cd3959b1639788"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "e96ae492f63acebb93ae5bb66ae016e5"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "c4563e20ba4bfe1fdf59c8c884c87a9e"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "ec452e888a5b27ec3c89077142d95619"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "053aae75610b4559068653d0134971b4"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "8f4f62f22d53bb37fd4ecc7b4e5bb201"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "ac43a8a763a8a3aaa241914eb1b40ba1"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "65e4b45226732bf3fae12f0f1d8f3bd2"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "a4292993547f7f5d02f0821d301f1bc0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "36ffd53b0dd582276d8b9cab88d5d5cc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

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
  pathname = pathname.replace(new RegExp(`^/apiscp-notes`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/apiscp-notes/app-f140dd2ad58010c015c4.js`))) {
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

  const offlineShell = `/apiscp-notes/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
