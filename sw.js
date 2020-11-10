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
    "revision": "8d714860feb32e569475de8a8e0854d7"
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
    "revision": "4a5db78fd59b937931a52af7866f7609"
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
    "url": "page-data/apache2-tips-and-tricks/page-data.json",
    "revision": "c3c38afd0dc3e3ce6bc42fe3ed014850"
  },
  {
    "url": "page-data/cloning-wp/page-data.json",
    "revision": "341c0a487cf79acc75d324ee25174ac4"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "00ffe14af88950ce1e243f51ad439bc8"
  },
  {
    "url": "page-data/disable-ipv6/page-data.json",
    "revision": "dcffc17e16ef4422da8a5d34b8cf4db6"
  },
  {
    "url": "page-data/dyndns/page-data.json",
    "revision": "9c958d997af331c54a3ab5621c5748cb"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-b5251a8c695b75917e42.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "f3ed8d744de0b499592dc36452d03360"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "206f0d2efbe6ec6e1c3b9baa6cc0cc4c"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "101082730a88408809c4d6d26c1a8f6a"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "034024e23e4dd13e99f61671b1ee6123"
  },
  {
    "url": "page-data/preference-manipulation/page-data.json",
    "revision": "daf2358c32427c440031df575dd2f37c"
  },
  {
    "url": "page-data/pulled-back-packages/page-data.json",
    "revision": "c236bcfd42419c5bbfea806afb18576d"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "196f464ccecd89295b4a1b34e5bb3417"
  },
  {
    "url": "page-data/temporary-passwords/page-data.json",
    "revision": "0d207a817e50bdf860c17bc619e7f35d"
  },
  {
    "url": "page-data/unblock-addresses/page-data.json",
    "revision": "226ec63f4a6f6b9870524e3f16c752bd"
  },
  {
    "url": "page-data/xdebug-usage/page-data.json",
    "revision": "02b1b775c4d8e6c69686ea0813f7a576"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-bdb2d2e74ba727fb7d62.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "1ab7a7f8d9586cdd043413e5d434722e"
  },
  {
    "url": "page-data/tag/apache2/page-data.json",
    "revision": "64f5c7c5fc6e5780420f4e18cc2a4031"
  },
  {
    "url": "page-data/tag/api/page-data.json",
    "revision": "0a56ed6418ea71a8c4f3c8163e883bfb"
  },
  {
    "url": "page-data/tag/auth/page-data.json",
    "revision": "dae751b9667db9a809f7bd781b3f306a"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "eb32d64b08d1df2d1395f20b1db5b939"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "6f006eeddb258e0309d2cdd17f747e51"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "9df5c4132ef87f36b022134cab8f3b67"
  },
  {
    "url": "page-data/tag/dns/page-data.json",
    "revision": "2c85f46536f9b47c700c14cf3f9c3fca"
  },
  {
    "url": "page-data/tag/firewall/page-data.json",
    "revision": "ba2ebf35227d0156b6d0ce88f24efc0a"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "2d63d00fdd346d523d7fac110945731f"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "53e06528d251f9d61ce0adbf6cc1e209"
  },
  {
    "url": "page-data/tag/network/page-data.json",
    "revision": "5ce9d2a10af79a24a9fdf37b3f64186f"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "ae0ac9f2fa643a3faffb5264e9ad0fbd"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "8cdb57e05f4524b4563848d9f753b836"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "8a5cbfbfb314f70e8fbcb290fc207b97"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "8014ae7a50d5787bd46c55a7ebe3410a"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "355f7248b14fee83f1c9e18201cd05fd"
  },
  {
    "url": "page-data/tag/websockets/page-data.json",
    "revision": "164b08ef688cfb2df19675de0b166b7d"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "f6bed33ce8f2f073a245c43a92c8a352"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "711409b7972ba564b634540fd6448e18"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "0f0fca13e265441a50c2acd8bb5c529e"
  },
  {
    "url": "page-data/tag/yum/page-data.json",
    "revision": "1cbbef8aa5d6cc9a279798a8ce109c60"
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
