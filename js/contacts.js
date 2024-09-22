// Яндекс-карта
function init(){
    let map = new ymaps.Map('map', {
        center: [55.13448606957747, 60.14732849999993],
        zoom: 8,
        controls: ['geolocationControl', 'routeButtonControl', 'fullscreenControl']
    }, {
        geolocationControlFloat: 'right',
        routeButtonControlFloat: 'right'
    });
    map.controls.get('routeButtonControl').routePanel.state.set({
        to: "проспект Октября, 72, Миасс, Челябинская область, 456318"
    });
    map.controls.add('zoomControl', {
        size: 'small',
        position: {
            top: '140px',
            right: '10px'
        }
    });
    let placemark = new ymaps.Placemark([55.13448606957747, 60.14732849999993], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/contacts_placemark.svg'
    });
    map.geoObjects.add(placemark)
}

ymaps.ready(init);