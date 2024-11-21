'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f1d6057ef6ce9614bbb9030641ee3089",
"assets/AssetManifest.bin.json": "bf83efe0d3abdd906011b4a5c38d9892",
"assets/AssetManifest.json": "73cddeddca303c0d2468a5c292055ca3",
"assets/FontManifest.json": "e1a4c941430f3e76a96558a10803594d",
"assets/fonts/MaterialIcons-Regular.otf": "6868dc3da952b0225d23745025c075dc",
"assets/lib/Resources/Fonts/IBMPlexSerif-Bold.ttf": "e369c18f87ecbae7de5bf36c3d44a5eb",
"assets/lib/Resources/Fonts/IBMPlexSerif-BoldItalic.ttf": "e21194c80cbb81dd8db7abea48fc60d6",
"assets/lib/Resources/Fonts/IBMPlexSerif-ExtraLight.ttf": "b116a0475234b3394b4d4af104cf8c54",
"assets/lib/Resources/Fonts/IBMPlexSerif-Italic.ttf": "ffb4fc82595d7cf7c77cc20b118a88b1",
"assets/lib/Resources/Fonts/IBMPlexSerif-Light.ttf": "52a9694d0c61c8fc80a67aecf03f41d7",
"assets/lib/Resources/Fonts/IBMPlexSerif-Medium.ttf": "25138c9bcd8d4977087fe884b841126f",
"assets/lib/Resources/Fonts/IBMPlexSerif-Regular.ttf": "377f8314d273f8cdac3c910a78c04bc4",
"assets/lib/Resources/Fonts/IBMPlexSerif-SemiBold.ttf": "9160bb54c4d2e223e7446b08eab4fe43",
"assets/lib/Resources/Fonts/IBMPlexSerif-SemiBoldItalic.ttf": "a9b749a1bb484850af632301a0ab31a9",
"assets/lib/Resources/Images/AppLogo.png": "fdc17cfa09c811fd5fc4ba586053eff5",
"assets/lib/Resources/Images/AvasoftLogo.jpeg": "4d6c6bb2bd439cb6443d3dc65a70c79f",
"assets/lib/Resources/Images/Banner1.png": "cc84cecc60e4aa2759ecdeaf874c3ccf",
"assets/lib/Resources/Images/Dialer.svg": "eec0c69326a84d20ff6c04f3cda4496a",
"assets/lib/Resources/Images/Email.svg": "af6af187b2eba1e2fb6c7cf237a4f5a6",
"assets/lib/Resources/Images/LocationIcon.svg": "f326fce19742bd2cd3f401d5400ef076",
"assets/lib/Resources/Images/NameBG.svg": "1fa4aac40291ce1d3fc6a7dcfa8e325f",
"assets/lib/Resources/Images/OpenSiteArrow.svg": "6cb2fa8f6f257cb7bfb0d377c0586a9a",
"assets/lib/Resources/Images/Packiya.jpeg": "bc638cc9410d860d549da5615ff6005b",
"assets/lib/Resources/Images/Packiyalakshmi.png": "92ed078520728f1c662e215807069708",
"assets/lib/Resources/Images/ProfileBG.svg": "161758b7b158f0f40702444807f7f4ac",
"assets/lib/Resources/Images/ProfileIcon.svg": "45f9af45bbac8a2dd0f4b6231380b1c5",
"assets/lib/Resources/Images/ProjectBanner.svg": "19c8ba6430ab093d2c3a36d9980a40ed",
"assets/lib/Resources/Images/ProjectImages/AppStore.png": "e938736ce41d44ca19efa5f55ac7f160",
"assets/lib/Resources/Images/ProjectImages/PlayStore.png": "c1852044abf7a16f0b138e4a6f0ffe98",
"assets/lib/Resources/Images/ProjectImages/Website.png": "4fe9f2a19dfca09842c9d158f27f4e10",
"assets/lib/Resources/Images/SkillsImages/AndroidStudio.png": "a77f8f193fe64ee587c7782b9e5f931b",
"assets/lib/Resources/Images/SkillsImages/C%2523.png": "e3f00cf310c4e17f68f873dcc00887a8",
"assets/lib/Resources/Images/SkillsImages/DotNet.png": "d0084d3c1cc34f4175a201467d48d40d",
"assets/lib/Resources/Images/SkillsImages/Firebase.png": "04aec5a53cd16f26a855e61aa5cd35b5",
"assets/lib/Resources/Images/SkillsImages/Flutter.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/lib/Resources/Images/SkillsImages/GitHub.png": "6e2ea0a8b1a8f2e13739dc5c3a306218",
"assets/lib/Resources/Images/SkillsImages/MAUI.png": "eef7e39f7438b7661a59e4c575560068",
"assets/lib/Resources/Images/SkillsImages/MongoDB.png": "99830feda321b762a5dff7e6eaae7aa6",
"assets/lib/Resources/Images/SkillsImages/MySql.png": "4c6ce57441b1180c1b25aa0112cd5d3c",
"assets/lib/Resources/Images/SkillsImages/NodeJS.png": "2c57431d4f3f3886f5f45e24b16ab00e",
"assets/lib/Resources/Images/SkillsImages/PHP.png": "eca74200f27725d37ee7f316d34b9029",
"assets/lib/Resources/Images/SkillsImages/Postman.png": "f57c7567db8e7afcf1cdcdf6819be1db",
"assets/lib/Resources/Images/SkillsImages/TFS.png": "9670ff81f0f608ea8176861627d14656",
"assets/lib/Resources/Images/SkillsImages/VisualStudio.png": "b31f8ae9b617942c18e6a95733c682fd",
"assets/lib/Resources/Images/SkillsImages/VSCode.png": "85014c6adae3d8a703fea54cb037b431",
"assets/lib/Resources/Images/SkillsImages/WordPress.png": "e88222d2e7c2e046000871f57fc860ee",
"assets/lib/Resources/Images/SkillsImages/Xamarin.png": "8a490359233fcfb8a65b6783dc529e2f",
"assets/lib/Resources/Images/SkillsImages/Xcode.png": "2f93ab3093eb58fe4eae64831104bba5",
"assets/NOTICES": "7118138fa8b41d917a920286d8124e36",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "ded9d19087a56ff3e1d6448c8b98d04b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "23d7f43a392a73c3f4f5500f78e191fb",
"/": "23d7f43a392a73c3f4f5500f78e191fb",
"main.dart.js": "6b762220200e93ed71395e562e181e4d",
"manifest.json": "1ee75b39d1d70b01fc77219c2b0326b1",
"version.json": "a59ec646a069c6788b7cbe738d06db00"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
