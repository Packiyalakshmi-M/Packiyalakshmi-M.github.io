'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "02c85ca6fa2deb5ebccc84963e1cdefd",
".git/config": "60f65af35fa1b0996c81f3d831035de6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "02f69dd34a8a51cf16942cf77a65c490",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eff63933c752a835b8602e49967db72a",
".git/logs/refs/heads/main": "071929b88a95690483ed477387b4ea86",
".git/logs/refs/remotes/origin/main": "2ab20afda6f6d8c05ecac4499d6914db",
".git/objects/05/bf05e843f143c80454a7d887b83a07975f688a": "332cb1a1dbf904726073f7b489d5bfc2",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0a/bfdc6ca25c5d63a4227438858d766760a441a2": "27f57e750190fab2ce05b775bebf6d92",
".git/objects/0d/0f72d9eac5cc804cf9b9d448923d414c7cf462": "0b30daae3fdd3f77669702b38a673da1",
".git/objects/10/0adc96a46abf9a45bb32522443e9a3ff6a04ed": "ca8990bb5ae4c3b57289a772a5e57490",
".git/objects/18/3171611a24772bc41548b23f3bc6ce3201ec0c": "d0e89298ab80232337589a641878f208",
".git/objects/1b/a7baf8cb494a4be6ba59e5e7d41437dfb7dfab": "e893d147c554f1048fd87fb34320aa09",
".git/objects/1b/fb2d2a15806f05e97f5b3a8bb328121d4237cf": "70fb1e66ad58eb26213bac315012e769",
".git/objects/1e/546c185218f4daa937119e4a7bce9358c1caa7": "87e81bce82f758a91877f27d5f4b7e2c",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/e1b63996b00ba458910ae6a23e9429bfd8b849": "c1c420bdfc8178178fda004a88d9f0e7",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/d51df08575599aa2ba3535d6ddde05f844ea0e": "55693a31aa29910c49a7b0119ef1b212",
".git/objects/2c/0927758e7066f6282b4bb75c4e3f8aa8e7a970": "a6e3dc76b7b408eda2edd2a28d06dc25",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/750059bed156d5b79383aa0478a4197f9aa4ff": "1b2f768807d8689782f9172dc999944d",
".git/objects/33/aa0577284f8260fd2eea9eee4d3a6772cd9527": "9cf94a79b6eb8b14e3808c62058fa3cb",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/f8bb3a2c2c4e415b0f3b7b92526df0f766e0b9": "5004a2ee3c1718da95775f3156d951e5",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/43/2d851a1f97399ab6cf0d6e35cb230d3e2622c0": "7139b68615d7b684e902e7c7c2c00c33",
".git/objects/43/d89d7d178c6cf8515320910479caa66f539368": "65457a7f33474df839141e51e6b05561",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/1c89aedfc103647aba7014be7345745fc2aa78": "b69079c0dfc54b08a35ad665f2e31006",
".git/objects/45/70348947f9e15030aaae907ec18a6549c5a810": "c9e375aa4413f36c557234d93f61e23c",
".git/objects/49/23ab581fe47cbe47ee66e6daa0ecd564096755": "4945e7a8f035491bd8f126eede189ba7",
".git/objects/49/bb60ea77a4cbf16f2d02ecae419df3cd9004bb": "64c02f1a7625b0bd49efe991f46aebe9",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/6b682cb34d113301f0aef7abe3bffe3331c63b": "27a398271885af6c72f709ba9583bb01",
".git/objects/4c/a667487db009acbca8af4a1dc7634f80913402": "ab0656db53e2d5bde460aefaeadd27b5",
".git/objects/4c/e7c4104ecf5efc9b79e17af5a52e58ec9d68df": "a0794204005ead3827ed36824a80d70f",
".git/objects/4e/375567576aee1eee36d19b04b88639cb5a3673": "10dc9db673c8289e8f9d897e601ae126",
".git/objects/55/858f6f32ae8f8a71d54612f1b00c26117cd82b": "17780afe1d72f6022d3b80475df817fd",
".git/objects/57/cf3bc74eaf395c36be440d590217e77085bc6f": "5ee24e499616bb6c436549ffeceab615",
".git/objects/57/e06e3c7c7984c16701eb156e61939c087da08c": "64d97bb56e9596138080021fcb09900b",
".git/objects/59/19e455aecf66a67d4a7aaf04b6f56508d9c544": "98ddefcae17b0dd27492e0061c4346e2",
".git/objects/5b/1e923569c5b140ae5f9fb764b8dae8a56f1dbb": "8cffe975a6a959e771072e17e1f71585",
".git/objects/5f/6310dce2c389dd53e1ac07a7fd02930fefa06c": "7d16026e0c73cca2296eb85dd18d312f",
".git/objects/60/d95fde430b652edd10417e169a4c7d69cc34fd": "8da64d2d1f73dae9c63b28267a0c026b",
".git/objects/63/4358c4184f7b7f0ace4b125f36a6d6c1bc2071": "0adcb0769276115b3068063f20ff4a76",
".git/objects/67/223158e354007ab99868c0a93cff9fe3ab3cf5": "addde9f057013efd3978be429302c0c0",
".git/objects/6b/5e1dd7769d06d668488aa2c04caa50db9e9e5b": "25a6eff527f8ebdb4b0f2be3cddc0625",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/4eaae4ba46392878298d1d44db3483f4cdbc93": "e98bed32f3e4f4b2ae93f7f2464198ff",
".git/objects/6f/4267969355ab438f7cee35c5a98652219c9504": "500e672c9ab1a319a77f31fbab345c56",
".git/objects/73/a6b324ac04fb66edd4b525febcf3cbe4a70e24": "084587f86f4f5a621d2c2922770bc8c6",
".git/objects/76/4b288d61fb2ad022a70740a263f4836100c9a7": "ba446062b11e35e0366dad5e770cee8c",
".git/objects/7a/59e36b2e4a22ae835ffda3360597a75f520225": "dd960d5eaaf8a7555a15b31696be8115",
".git/objects/7b/4c2a01211c5c34ef82ece62c3ce930155ccaa0": "44ec2d1718ac3d9b865b7d684c4200ad",
".git/objects/7b/99ee93284bf6feafee7d49223ab6a0dfdc431c": "0dc32a492674b51c0efea9aa82cb6dd1",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/3ac7f0393fe51f1c62156bdb6dfdf67d9b494e": "1340dc0c8e57b7b2e4f3e7969dca3dbb",
".git/objects/88/7e9e556dcf3c9dadcce4ebf364d1666bd129bf": "42d5fbb72df64f7e2345260eeab9e92a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/2036fdd9d5456c78e1dddb51ada843e6cff970": "c03dd5f68e671dc8bb1e72c98590496e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/8dd942b784eaab2b1e5d5f97817947d45f6241": "9ccfedbaecdbad1c0bc103f888a82362",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/bee32147a6db8285434c73410cefac74d1d4dd": "c19ff6c2ce90aaa80e408f836d101328",
".git/objects/9b/bf0d71394ed5c70db636b2b45660f1045c4c1f": "bb9dbbef3ab562df54efa818a886d8cf",
".git/objects/9d/4f8e99703238eee4d4c1067266e0fb164e0e20": "d41e69186bf3894269bb43ba52f710a7",
".git/objects/9e/dc9fcfbe0c1433838623c84ed075aa2ab28ea7": "cb5fd1430baaccd81622434ad37e3d87",
".git/objects/a1/5c4a0fbe419cc6bd37dbff1bbc516f7e144811": "4eea4f48aff9588fc31a23da3bc936c7",
".git/objects/a1/c1ccfc6dc0135d3cc67de491299d4394e70145": "36cb51e326142ff1e44484f1961cd232",
".git/objects/a4/6092db929d6ce6c04655c277f230e961edf0c1": "f14c2693ff78d16d67032c65339b1e93",
".git/objects/a5/84286ab50ccab162a69a6a6dcb6f2d77878a2f": "5356f6bbeb32a648d9292e9b0f800113",
".git/objects/a7/d3236e41a9247a485c7b877ce6a3d773ffa448": "9e5e90e0bc9cd095ebe05ec521b27349",
".git/objects/a8/535764215a32f07e3eaa1386dc1d72c20ea197": "9df3d4a4fbb8129ff0fed90e6a45b7bd",
".git/objects/ad/eb533ac19cb1e802c4e4440cfe7cea66558197": "035590f36da61841ee128f5afd3d8923",
".git/objects/ae/7fa24b818465dadaea0e532e4936b1adb15b7e": "e4dbbae5daa79e0ad52610ce6998f22e",
".git/objects/af/b9a7adea3a3d366379aaaa2e801829827b066a": "e5f13c43e4fddc03d2c0b97dd166206a",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/f9bb2957dad6f565808b2b043a131125254a7a": "4eeebef0b322796bfbe82671580f023e",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c3/bb23ecb407685e7e9c71862644197bf7772dcd": "11a58ee35606f4dc9bfda59780de16db",
".git/objects/c4/4054b82bfe961c48da778cab106d30b8f2ef7d": "f8e849dad66aa2cee8b1aee580b54313",
".git/objects/cb/31df31a4dfb1b75d75489e5361e755aadf1b33": "6d2b687ab5bee6f420a173ae566bd873",
".git/objects/cd/b7b724048be1a939fedf06b15a146bf514178d": "3d1bee1c704a457f9cb510d693add525",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/b080506e9ec63892d86398203e086f8da99bd1": "ac63b0bf5a6edd2c1eed1931dea6efd8",
".git/objects/d3/20d6c359aea7835e4848514f59ed4fb2057804": "8007e93da5df865313088c05102cd60f",
".git/objects/d3/5927f1eaca0c8e6251c43af5bc7d7f24c354d7": "f24d4871ffaff1524ffb9277722f8d4d",
".git/objects/d4/2c11f79352afe7b179aa89b6a50ae0f4d0ba5f": "5b0742e037591e64ddfae71aa5cd1c3a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/8978e6ff9277f3d75101b7d4abbe09f11dfbe7": "22d47b261b00b98cb7718cd4f4399f77",
".git/objects/e0/6192b2ba0c95a40f72e461abafffd557f831ee": "01d5083e70f31a06eacdcf247632790e",
".git/objects/e2/bb62100841ab0c2ab0a14513e76320e8a2c22c": "e0a72e47c08e53d07f35352a683d2246",
".git/objects/e8/043e0a3b630da9e52f74fe81039d05f66210ef": "ed0810672672dfe68b58e5096e27aca0",
".git/objects/e8/8e54de20bc018313fc5845e782e8a67b32bd7a": "a61f755b502a23ca84128ced0be2f1c0",
".git/objects/e9/bccf0a9cce578b002883d9e82d00dd74b53d45": "337b32b26a83560b4462e2e21b569889",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/61ff859a2bff2726d6fcc4114be23a6dc38982": "d28fe0547b575e76cd1002445ebae1bf",
".git/objects/f6/d6cfc45cc0ca1f8c4ab383d880135a2c42fe95": "a3f9c1973cbcba8a0ea32a90c8e80488",
".git/objects/fb/1955047c47190a556c8c37031bfb821d63d5f1": "472ae73c795937dafaf0041f962f2c82",
".git/objects/fb/27eed760376b5650213a4a0c943c7b3d477502": "ca653c8f9b63f0675c745c9168584ff4",
".git/objects/fe/3ad98de984167e3d414cb6de1b523f4e22588a": "78c3bad5d6cb70f226456afcb7f454be",
".git/refs/heads/main": "22f86b116cd461acf179fe43b907d6df",
".git/refs/remotes/origin/main": "22f86b116cd461acf179fe43b907d6df",
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
"assets/NOTICES": "0931844a761ee9b1c4346610d61933a3",
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
"flutter_bootstrap.js": "7a874bdb12a74d464baf0ca788095d57",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "23d7f43a392a73c3f4f5500f78e191fb",
"/": "23d7f43a392a73c3f4f5500f78e191fb",
"main.dart.js": "0e911be69e9c8872e8ec3195b20ab1d1",
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
