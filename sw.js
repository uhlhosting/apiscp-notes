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
    "url": "webpack-runtime-d4aa3beac6b95f5690fc.js"
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
    "url": "app-58dc154adf3acbf297fa.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "74ade51c53f67de15981def5cc177578"
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
    "revision": "17bb37e9fb391dbe2c9d2687998d8ad0"
  },
  {
    "url": "6f89bbd25ed84b02c1c782caf7174e918b7ab15f-8fe38229a9a2dec0d3df.js"
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
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-note-js-791afeae18a12a5318d4.js"
  },
  {
    "url": "page-data/cloning-wp/page-data.json",
    "revision": "ac62c63facf44f0e2b0cc6b041d7f784"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "67ae1544d3ac4940c9253cdf44109c1f"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-b3520037b68af7768459.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "d740f9b3ffa5522b67eb90448119b0c8"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "c4e5d72ba8537ee02ecc06ca41e8e561"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "a57b3c0dc53f24a0ad8c724dba8712e2"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "47c67002882bbac1d5e34a4a524266b0"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "34a3c01333edfc5b1441b1b08747a4ee"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-75fe09e4bcc3843df529.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "517d13dae8bd1547a1f492f4e844e32f"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "4113c3813c59ac8b7c12859027c20fb2"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "ccece0fee688e3e4b946ddf3f8da5587"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "c68176467f19ddaacbc2fb61f16e1720"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "5146250c9616ee948a957b16a64b1416"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "93721f2ddb36ebd6abe59de349a1985e"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "c67ed828e043ac399f4e95681c82a13a"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "eb470bbc53740feb9f336bddf19c47fe"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "ff31866905c7d313b9db3a58602da537"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "254ab21ca15f6acb2485fa9216fc1900"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "5721ab66091eacc2d49702501825cdda"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "7337b448667af459027e8855ffcc75ce"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "c5b7342469144f7c495416e1a2f48435"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "0ea9b3cbf85bd11e78221ca106265b5b"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "36ffd53b0dd582276d8b9cab88d5d5cc"
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
  pathname = pathname.replace(new RegExp(`^/apiscp-notes`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/apiscp-notes/app-58dc154adf3acbf297fa.js`))) {
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
