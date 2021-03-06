import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { PropTypes } from "prop-types";
import { ROOT_URL } from "../../config";

const FooterMap = props => {
  const mapStyles = {
    width: "100%",
    height: "100%"
  };

  return (
    <Map
      google={props.google}
      zoom={10}
      style={mapStyles}
      initialCenter={{ lat: props.latitude, lng: props.longitude }}
    >
      <Marker
        position={{ lat: props.latitude, lng: props.longitude }}
        icon={{
          url: `${ROOT_URL + "/assets/img/icon-img/2.png"}`
        }}
        // animation={props.google.maps.Animation.BOUNCE}
      />
    </Map>
  );
};

FooterMap.propTypes = {
  google: PropTypes.object,
  latitude: PropTypes.string,
  longitude: PropTypes.string
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBZs3l-reWPxC5eSb7p1tfILZ7EK7XaGz4"
})(FooterMap);
