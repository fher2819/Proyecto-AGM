function iniciarMap(){
    var coord = {lat:11.927673076392947 ,lng: -85.94623835495277};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 13,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
