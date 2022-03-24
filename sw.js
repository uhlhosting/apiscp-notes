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
    "revision": "ff7557401c154323deb6cbb0418ec532"
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
    "revision": "38f1ed1dcaebc0bb339826cefb9e9fdc"
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
    "revision": "45921842785e856abbf3b156c4f084d4"
  },
  {
    "url": "page-data/apache-tips-and-tricks/page-data.json",
    "revision": "94d4dc0886e2c523e80be71823f07322"
  },
  {
    "url": "page-data/cloning-wp/page-data.json",
    "revision": "35579153dc7602c02da392faa0c57e60"
  },
  {
    "url": "page-data/create-wp-redis-instance/page-data.json",
    "revision": "ef3ed71702c792db55017b03fa22230a"
  },
  {
    "url": "page-data/disable-ipv6/page-data.json",
    "revision": "e1757146747dcd4286bd46cbec74219c"
  },
  {
    "url": "page-data/dyndns/page-data.json",
    "revision": "e9fddbd8e6a1e80769ebeae304a86ab2"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-b5251a8c695b75917e42.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "08b65e1fef7b51e87ea40a9950ff8e25"
  },
  {
    "url": "page-data/install-memcached/page-data.json",
    "revision": "2faf64636f09bb3070124be3768b9ada"
  },
  {
    "url": "page-data/install-php-pecl-modules/page-data.json",
    "revision": "6db9ac24fc4487b9f0697517ca80e02d"
  },
  {
    "url": "page-data/install-podman/page-data.json",
    "revision": "3ce9ea507fd775ce219b980f6a306f50"
  },
  {
    "url": "page-data/install-yarn/page-data.json",
    "revision": "bd4300f1090e9034b7c3d22f1ee5855a"
  },
  {
    "url": "page-data/logging-subjects/page-data.json",
    "revision": "a42c072d700de6329039c16dc3fa8669"
  },
  {
    "url": "page-data/php-user-overrides/page-data.json",
    "revision": "76029b97a0f7278fea2fdd70d8be4e1c"
  },
  {
    "url": "page-data/preference-manipulation/page-data.json",
    "revision": "bf6aae397b2888b2382613c299baae27"
  },
  {
    "url": "page-data/pulled-back-packages/page-data.json",
    "revision": "cb4875fc27d4bee33a636ac142140077"
  },
  {
    "url": "page-data/redirect-cp-hostname/page-data.json",
    "revision": "9baf85fd46121d82952ff67a4bbdd840"
  },
  {
    "url": "page-data/resource-hogs/page-data.json",
    "revision": "07d2bdeffd8ea9d98969955f54ca3f8c"
  },
  {
    "url": "page-data/run-playbook/page-data.json",
    "revision": "a29cbcb2d79ab24878080a13aa265390"
  },
  {
    "url": "page-data/switching-to-edge/page-data.json",
    "revision": "9a4e1c33e4852f5d5657a6dbc489d08d"
  },
  {
    "url": "page-data/temporary-passwords/page-data.json",
    "revision": "7ecae2739ff8843fb953130078b22b6e"
  },
  {
    "url": "page-data/unblock-addresses/page-data.json",
    "revision": "116e8f9b20049d8fa4187a29b078541f"
  },
  {
    "url": "page-data/xdebug-usage/page-data.json",
    "revision": "64b55f5372e16e35308030295fcbc618"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-bdb2d2e74ba727fb7d62.js"
  },
  {
    "url": "page-data/tag/ansible/page-data.json",
    "revision": "8e351e49baac6bd5c8636a2920bb25c9"
  },
  {
    "url": "page-data/tag/apache/page-data.json",
    "revision": "97f8af263bf4a03f43ed3b1e9eb09b1f"
  },
  {
    "url": "page-data/tag/api/page-data.json",
    "revision": "9eb2bb09c7a526833457ea4a4a13b26e"
  },
  {
    "url": "page-data/tag/auth/page-data.json",
    "revision": "870b5fb8401bf1e9a38d339ea5c29868"
  },
  {
    "url": "page-data/tag/bootstrapper/page-data.json",
    "revision": "af7139b1e447abf3916a5f8eb8597521"
  },
  {
    "url": "page-data/tag/cache/page-data.json",
    "revision": "1e2dc438c4f93b2b70f79f15de223857"
  },
  {
    "url": "page-data/tag/cgroups/page-data.json",
    "revision": "96e7d25a94a8f9c8ae1f3c8db7c6b73d"
  },
  {
    "url": "page-data/tag/containers/page-data.json",
    "revision": "83de41816a8d6dbe8dfdc3d95ac270a6"
  },
  {
    "url": "page-data/tag/cpcmd/page-data.json",
    "revision": "b1860965d4baed3f45d2d6d6d2a2f70e"
  },
  {
    "url": "page-data/tag/dns/page-data.json",
    "revision": "b8819157a90836fadcd54a663a2d7635"
  },
  {
    "url": "page-data/tag/docker/page-data.json",
    "revision": "20ef88da97e79f5c6ee9746ba6c1dbe9"
  },
  {
    "url": "page-data/tag/firewall/page-data.json",
    "revision": "66c019a2fcc5d89f9820d4515b8e6d11"
  },
  {
    "url": "page-data/tag/frontend/page-data.json",
    "revision": "767e72ea65648fb1c0eacc15a43c2cb7"
  },
  {
    "url": "page-data/tag/mail/page-data.json",
    "revision": "9b07a77fe5a0e2c79a1c198adfea12bb"
  },
  {
    "url": "page-data/tag/memcached/page-data.json",
    "revision": "95cd47cb446b182ae49e1dccbd8ae054"
  },
  {
    "url": "page-data/tag/memory/page-data.json",
    "revision": "a679b9e7f5cdd8eefa8db83c9d3e6536"
  },
  {
    "url": "page-data/tag/modules/page-data.json",
    "revision": "4bd4d9ba464527cbe498bb0400366496"
  },
  {
    "url": "page-data/tag/network/page-data.json",
    "revision": "6ea0375199f3fcb50f62f1de383e70a2"
  },
  {
    "url": "page-data/tag/nodejs/page-data.json",
    "revision": "45617d526640431dc6f50841542903e0"
  },
  {
    "url": "page-data/tag/optimizations/page-data.json",
    "revision": "430583d66c4ebda9a10e2847c857c8a6"
  },
  {
    "url": "page-data/tag/overrides/page-data.json",
    "revision": "d5ccb9e5786557b7a3359ecc01502d23"
  },
  {
    "url": "page-data/tag/php/page-data.json",
    "revision": "0156813ff4dbae380a78378a7cb520d1"
  },
  {
    "url": "page-data/tag/playbook/page-data.json",
    "revision": "b65ceebf63231955b6b73de506e34c1b"
  },
  {
    "url": "page-data/tag/podman/page-data.json",
    "revision": "9442c55381532876016ff95da03985a7"
  },
  {
    "url": "page-data/tag/postfix/page-data.json",
    "revision": "7a05b979bab03df0402d307f94745807"
  },
  {
    "url": "page-data/tag/redis/page-data.json",
    "revision": "9b952aae017b50b2cfa3baa85cf8c11b"
  },
  {
    "url": "page-data/tag/resources/page-data.json",
    "revision": "2d4758065c9c109aedf673c748f926fb"
  },
  {
    "url": "page-data/tag/rewriterules/page-data.json",
    "revision": "335590796a807b304b8e30db8cbe12fe"
  },
  {
    "url": "page-data/tag/upload/page-data.json",
    "revision": "a620988a2989c50a02b324c08626ac22"
  },
  {
    "url": "page-data/tag/user/page-data.json",
    "revision": "0c9dbf493d055f03b9332ec49ebb2183"
  },
  {
    "url": "page-data/tag/websockets/page-data.json",
    "revision": "7f33e47c36514b18aacdac4ff3c6df2f"
  },
  {
    "url": "page-data/tag/wordpress/page-data.json",
    "revision": "fa6f678ea785fa7a37ed1c5614349054"
  },
  {
    "url": "page-data/tag/wp-cli/page-data.json",
    "revision": "844f9a1c229bcf21113e8fc5cc3c6bc0"
  },
  {
    "url": "page-data/tag/yarn/page-data.json",
    "revision": "1f15a1905b2e3f021acd45a792ec0ed1"
  },
  {
    "url": "page-data/tag/yum/page-data.json",
    "revision": "fa7b9659579b5a80da98f1efdf9ff0f4"
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
