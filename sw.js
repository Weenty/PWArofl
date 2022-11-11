

const staticAsseets = [
    '.',
    'index.html',
    'images/icon-128x128.png',
    'images/icon-192x192.png',
    'images/03f08527927e3d6161179c3a58458963_xl.js',
    'css/bootstrap.min.css',
    'js/bootstrap.bundle.min.js'
]

const staticChaceName = 'site-static-v1'

//install, load cach
self.addEventListener('install', async evt=>{
    const cache = await caches.open(staticChaceName)
    await cache.addAll(staticAsseets)
    console.log('install')
})

//activate
self.addEventListener('activate', evt=>{
    console.log('activate')
})

//fetch
self.addEventListener('fetch', evt=>{
    evt.respondWith(caches.match(evt.request).then(cachedResponce =>{
        return cachedResponce || fetch(evt.request)
    }))
    console.log('fetch')
})
