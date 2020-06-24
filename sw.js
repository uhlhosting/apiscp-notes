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
    "url": "webpack-runtime-8bb30fd4d26d0e1e24b0.js"
  },
  {
    "url": "framework-9fe058f4359556db0d38.js"
  },
  {
    "url": "d57d79ab-7c8246a08fbe2617b54f.js"
  },
  {
    "url": "c322df3a-ced6e0ccc9168bbf79e6.js"
  },
  {
    "url": "ff39441c-1e7d0a230315c3c69501.js"
  },
  {
    "url": "29107295-9ea4360ea8ec8d33e511.js"
  },
  {
    "url": "1bfc9850-f297dd4d176532a1baa1.js"
  },
  {
    "url": "app-cbc45a3b978b42f9e35c.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "148099730098a22637247839d114eea1"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-3ecdc9640efe42acf30e.js"
  },
  {
    "url": "6f89bbd25ed84b02c1c782caf7174e918b7ab15f-9e2cad50ba05b8933319.js"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-pages-404-tsx-d2eea123e5a5488fb7bc.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "9f7e23dffed634bade188874f7c02852"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "6576e11372cba98b1d148062c39420fe"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "097a0308fc1b1a1fc37e774650450f9f"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-note-js-e905357807508dd4a39f.js"
  },
  {
    "url": "page-data/cloning-wp/page-data.json",
    "revision": "5ac2a93c4fd7d0d1eba7b7b59dd2a2c1"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "45561f18483c1afca48167ced812c34b"
  },
  {
    "url": "page-data/dyndns/page-data.json",
    "revision": "62a3e6d8a5a739451795404e41489c4e"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-bed5441c0313a2e73a8a.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "629b1cdb1cd068fc3e88cd58c5d711d4"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "fd0e011f874a6abdc48b98b997cbfca2"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "8a39364088ce38c13585c37c58fdd5b4"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "0dc621afc815ec105b1e8df120a1702f"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "6f00a394aec89e04c1a306af8a83ab45"
  },
  {
    "url": "page-data/unblock-addresses/page-data.json",
    "revision": "2d45bfbd175c56d105e74d48294e709d"
  },
  {
    "url": "page-data/xdebug-usage/page-data.json",
    "revision": "e6bbf5f58d2929c752dfeb764cae573c"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-1b5064b0b2657d818cc0.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "d19eb8b18c24d9fe04549b0a8199810a"
  },
  {
    "url": "page-data/tag/api/page-data.json",
    "revision": "814008100acd4bfaefd9181a1258c30d"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "96d4781a2df5c08e7642cc0f28a81187"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "c3db6d235a5c2efdb307ed4c5cc3b4d0"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "906136362607e3572505f2f214cddb47"
  },
  {
    "url": "page-data/tag/dns/page-data.json",
    "revision": "bcb71f291204a2e4a218c018a3b64cc6"
  },
  {
    "url": "page-data/tag/firewall/page-data.json",
    "revision": "f0e0412a6a36b29328047933cac215ff"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "c6b881dee5f7ade23cb64de4bd56f5bd"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "401b75df74e6edb42cad40228609f620"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "75468e4d64d70aaec92f96274be4e838"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "62388c938dbe3ee6716dbd8cd423fc8d"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "a7eb3854c36031024f761fbccfa8d14f"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "cbb2135f9ea074dd84eb3e2ef6bf81f9"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "052b1fad232396a492a640405ce8b6cb"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "6d4fe6a503fb669b4e16075cb33859b8"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "ce97b5e0f537cf7c8211674d45a7ebf6"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "78488db96e10f80f33b2407099e7b905"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "5da9e4df7a50784bf767e828754576b6"
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
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-cbc45a3b978b42f9e35c.js`))) {
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
