function iniciarMap(){
    var coord = {lat:-86.2602995 ,lng: -86.2639886};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}