'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f2739182bf503471b520b9fa9b90a309",
".git/config": "60f65af35fa1b0996c81f3d831035de6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e3bc95bae694a4af4390ebd35bbb7f88",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cb200d059caccfc8adc549ac50fe37f6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f2be40511157891c12740811e686a8cc",
".git/logs/refs/heads/main": "22f1d5c8a170442d9660b5a496634677",
".git/logs/refs/heads/master": "199f4ff4b885a319df26ccdbe9741e8e",
".git/logs/refs/remotes/origin/main": "750f34d8ee5bc48f9b594b5e140ef099",
".git/objects/2c/0927758e7066f6282b4bb75c4e3f8aa8e7a970": "a6e3dc76b7b408eda2edd2a28d06dc25",
".git/objects/3c/5d54432b33ff79df3c22ce84acb8a9151ac3d9": "11c65a193eb7e83cd5cc04fccd394a0f",
".git/objects/45/e83362bd42e399d8a271c5d57665c56d8c7eb4": "9fb8e4c626fe0f2898b293cc5516d987",
".git/objects/78/f523ab8931b655780d4ecdd7ed56e03d37ee44": "c40660407c6cbafa6c8bd8820ebfc002",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/bf61606caa781fd864554836d6d1e602c10720": "ca9849660257cada86a5eea15ccc6e55",
".git/objects/98/f227816b9c331d6879a7dc7b907f5b0b84b274": "3b1c38602a0fe6b5e442f1a197b6ecc1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/pack/pack-ed7d834dc348edfe71d119951ef0bbce2441881b.idx": "15291e198b25a4a0446fbb65f28e7e75",
".git/objects/pack/pack-ed7d834dc348edfe71d119951ef0bbce2441881b.pack": "4dc5176c8c45d15a724715d352d92c72",
".git/objects/pack/pack-ed7d834dc348edfe71d119951ef0bbce2441881b.rev": "000a3cfabd5edb40c43e6b83507b3208",
".git/ORIG_HEAD": "d21bc8ef66e5e0d43ea9c992575f1395",
".git/refs/heads/main": "d21bc8ef66e5e0d43ea9c992575f1395",
".git/refs/heads/master": "f886c306750bb32a67054d31f9864e24",
".git/refs/remotes/origin/main": "d21bc8ef66e5e0d43ea9c992575f1395",
"assets/AssetManifest.bin": "64293ec91dbc35cdd2086a8d6530d8f5",
"assets/AssetManifest.bin.json": "ef4b7fcc0739d2001de84690e98205ac",
"assets/AssetManifest.json": "6506626b87014475cae79bdc997e9ef7",
"assets/FontManifest.json": "a42bf9130e5ec7d70921160ae433482c",
"assets/fonts/MaterialIcons-Regular.otf": "6868dc3da952b0225d23745025c075dc",
"assets/lib/Resources/Fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/lib/Resources/Fonts/Poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/lib/Resources/Fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/lib/Resources/Fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/lib/Resources/Fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/lib/Resources/Fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/lib/Resources/Fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/lib/Resources/Fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/lib/Resources/Fonts/Poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/lib/Resources/Gifs/ProfileGIF.gif": "fe2663cc3dc571ada7f4ac4117583fe4",
"assets/lib/Resources/Images/AppLogo.png": "fdc17cfa09c811fd5fc4ba586053eff5",
"assets/lib/Resources/Images/ArrowBlack.png": "a614bfedac0a12e0c6e55506b9764f54",
"assets/lib/Resources/Images/ArrowWhite.png": "c871ff1009073ed1f4a4405fa9e85aed",
"assets/lib/Resources/Images/AvasoftLogo.jpeg": "4d6c6bb2bd439cb6443d3dc65a70c79f",
"assets/lib/Resources/Images/Banner1.png": "cc84cecc60e4aa2759ecdeaf874c3ccf",
"assets/lib/Resources/Images/Dialer.svg": "eec0c69326a84d20ff6c04f3cda4496a",
"assets/lib/Resources/Images/Email.svg": "af6af187b2eba1e2fb6c7cf237a4f5a6",
"assets/lib/Resources/Images/LocationIcon.svg": "f326fce19742bd2cd3f401d5400ef076",
"assets/lib/Resources/Images/ProfileIcon.svg": "45f9af45bbac8a2dd0f4b6231380b1c5",
"assets/lib/Resources/Images/ProjectImages/AppStore.png": "e938736ce41d44ca19efa5f55ac7f160",
"assets/lib/Resources/Images/ProjectImages/PlayStore.png": "c1852044abf7a16f0b138e4a6f0ffe98",
"assets/lib/Resources/Images/ProjectImages/Website.png": "4fe9f2a19dfca09842c9d158f27f4e10",
"assets/lib/Resources/Images/SkillsImages/AndroidStudio.png": "a77f8f193fe64ee587c7782b9e5f931b",
"assets/lib/Resources/Images/SkillsImages/C%2523.png": "c8848e47a10fac0c1503755b29a5b2ef",
"assets/lib/Resources/Images/SkillsImages/DotNet.png": "d0084d3c1cc34f4175a201467d48d40d",
"assets/lib/Resources/Images/SkillsImages/Firebase.png": "04aec5a53cd16f26a855e61aa5cd35b5",
"assets/lib/Resources/Images/SkillsImages/Flutter.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/lib/Resources/Images/SkillsImages/GitHub.png": "efe67784fdf655f1503f6b0bd3b06882",
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
"assets/NOTICES": "1a049535b06f0f922fb911b2821035f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "9bb2aaa0f9a9213b623947fa682efa76",
"canvaskit/canvaskit.js": "4a9bf79219d86ed807ac1ea2c30e01dd",
"canvaskit/canvaskit.js.symbols": "7591a27e90a9f47b73104b5beea5f732",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "067d1b778b913719f905e9eba6d9f2d4",
"canvaskit/chromium/canvaskit.js.symbols": "5e3724af47d205af948bfc9946c80dc4",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9e94c7112288ea6e16844d9879ce08dc",
"canvaskit/skwasm.js.symbols": "601a3adb24ac6b21b8e89735a27416f3",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "b31cd002f2ed6e6d27aed1fa7658efae",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "cba20c120ae4ddb4032083938b14d54a",
"flutter_bootstrap.js": "01295833b484af79d483ca4bbafea6b9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "23d7f43a392a73c3f4f5500f78e191fb",
"/": "23d7f43a392a73c3f4f5500f78e191fb",
"main.dart.js": "749c9c4e593418ad35782b0133c1f732",
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
