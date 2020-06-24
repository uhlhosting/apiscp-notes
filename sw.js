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
    "url": "webpack-runtime-8de0ae948ed94940f72b.js"
  },
  {
    "url": "framework-9fe058f4359556db0d38.js"
  },
  {
    "url": "d57d79ab-4243d0eccb30f9bc167f.js"
  },
  {
    "url": "c322df3a-ced6e0ccc9168bbf79e6.js"
  },
  {
    "url": "ff39441c-1e7d0a230315c3c69501.js"
  },
  {
    "url": "29107295-8bcee9bdde434b61f4ab.js"
  },
  {
    "url": "1bfc9850-f297dd4d176532a1baa1.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "6cd8dcc59f4ba0ac5e447cd27750d1e1"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-3ecdc9640efe42acf30e.js"
  },
  {
    "url": "6f89bbd25ed84b02c1c782caf7174e918b7ab15f-a1db964a34932b9ca4d3.js"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-pages-404-tsx-8591f6d4154a6c6acbc0.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "9f7e23dffed634bade188874f7c02852"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "f8a2012fbebc27fa2ecbeefe92bf7985"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "097a0308fc1b1a1fc37e774650450f9f"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-note-js-283f4fe298b1ec725286.js"
  },
  {
    "url": "page-data/cloning-wp/page-data.json",
    "revision": "527da7bdba722585e922c2b497848bc2"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "9daac014e5dc3f2eb7a46a7ea0c03814"
  },
  {
    "url": "page-data/dyndns/page-data.json",
    "revision": "657129c313aea54482f01e4fc32840aa"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-d0ca65d67679da87953b.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "1c94401fb1479a2be3d945ff419f7b88"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "b771991580c1ae0c605689268df80be0"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "f9886e84cbd05bc39dbb7a7283232544"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "1e9c97471dcc09468252196bc1a1249c"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "48225f40e5d13f6a6838d6aa0556e3d8"
  },
  {
    "url": "page-data/unblock-addresses/page-data.json",
    "revision": "312975944791a39a3f17e2421354a7e2"
  },
  {
    "url": "page-data/xdebug-usage/page-data.json",
    "revision": "5e02ebc6bb92f362b3e791d605ab18c5"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-91033ac48f0ff912f6e9.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "cc2be7f16034a2312a30eae714f9f524"
  },
  {
    "url": "page-data/tag/api/page-data.json",
    "revision": "2f27df71a8109b692fe1fca71395b5ad"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "91ca7f2c3f059c223bada172442aee31"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "4c0c56419f4d9942500cc741d2f28351"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "c7055e204a116fe502c5f0bda3785a6b"
  },
  {
    "url": "page-data/tag/dns/page-data.json",
    "revision": "7ba0c6158c9dbc98a23b4c5dc39727bf"
  },
  {
    "url": "page-data/tag/firewall/page-data.json",
    "revision": "25f883557b0bedae6fa2c0d4aec73129"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "b307037eef578f70ad404594d77ed08f"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "94433067cc7fc6d7840900c3097c33e9"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "e68f44911294ecda0d3904ffc013d480"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "1f68dd33ac54aabed150f45210b6b840"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "06b1743820cf4dba28c07ca3b80856d7"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "f38286d6ac73afdea67af6e7a47de209"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "a6c8debb0daa3a06508b41c30de9d730"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "27aa7596c2247c64272e9f25e2640fba"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "e9da15e46fb4910e276e66e2500efa46"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "c2ec5211c42cb423213f9bdfa78470a5"
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
  if (!resources || !(await caches.match(`/app-d2fb273c941a7b585302.js`))) {
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
