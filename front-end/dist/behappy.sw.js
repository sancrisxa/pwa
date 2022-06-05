
var identificador = 'behappy.sw';
var versao = 1;
var idAtual = identificador + '-' + versao;
var idAnterior = identificador + '-' + (versao - 1);

var ulrs = [
    '/',
    'bundle.js',
    'style.css',
    'img/avatars.png',
    'img/botoes.png',
    'img/favicon.icon',
    'img/logo.png'
];

function ativarServiceWorker() {
    caches.open(idAtual).then(cache => {
        console.log('Cache Storage ' + idAtual + 'foi ativado com sucesso!');

        cache.addAll(ulrs)
            .then(function() {
                caches.delete(idAnterior);
                console.log('Cache Storage ' + idAnterior + ' foi excluído!');
            });
    })
}

self.addEventListener("actovate", ativarServiceWorker);



function buscarArquivos(event) {
    event.respondWith(
        caches.match(event.request).then(function(arquivoCache) {
            return arquivoCache ? arquivoCache : fetch(event.request)
        })
    );
}

self.addEventListener("fetch", buscarArquivos);