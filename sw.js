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
    "url": "webpack-runtime-6a6105ede5061dfb9eff.js"
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
    "url": "app-c4b99638928c865173c4.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e90154b65bec0416e16d81c61a499afb"
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
    "revision": "5513e5e2fa8b407c7022454ff1a4dc67"
  },
  {
    "url": "6f89bbd25ed84b02c1c782caf7174e918b7ab15f-48114360303fbb3aa350.js"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-pages-404-tsx-cca164f851d04e0d9e05.js"
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
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-note-js-f80ebd36d827eeda99a6.js"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "a091c05c2a13e74922ba23716ab74b55"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-b3520037b68af7768459.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "274ec10775cab10e32aa739bb1150249"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "4c92a02ab5d7aec53a81faeb33eb8189"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "91bb2da2c02c986240670eee841cf6d0"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "dfe756c32086aad1bf49f2e4627d5c97"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "b264e42a842326071746d07509496ddf"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-75fe09e4bcc3843df529.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "32be97f5937e6d95c96401a7f617f3b8"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "901c903c75526531974c82f216e1d2a8"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "7c70d52beb310ad0bf410cbaf558a217"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "64fc7414c1b2749763f8bf17745e842f"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "fd0ac6dd264f6d808946062a58a444f6"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "4d4a82061bdb1a42331ad7cf142f3462"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "a74456f924358e855f1ea51817bcd32f"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "07d57329bf14a761e04eef58526a3318"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "46252886b804ee65d606459af494ac38"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "205d3ab107d98f993217da0355c02685"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "11594be717f004f57588dcc30e3ee192"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "3863f0017232625a014d517b3c315a3d"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "f73dae52d86ab542a8ab360bc03f14f2"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "454116450cb285fadf99272bff111fea"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "41061610b5e94ca529cf842700bd64cc"
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
  if (!resources || !(await caches.match(`/apiscp-notes/app-c4b99638928c865173c4.js`))) {
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
