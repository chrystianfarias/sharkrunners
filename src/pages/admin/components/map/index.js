import { MapContainer, TileLayer,  Marker, useMapEvents} from 'react-leaflet'

const LocationFinderDummy = ({onClick}) => {
    useMapEvents({
        click(e) {
            if (e.latlng)
                onClick(e.latlng.lat, e.latlng.lng);
        },
    });
    return null;
};

function Map({lat, lon, onClick}) {
    return (
        <MapContainer center={[lat, lon]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution=''
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lon]}/>
            <LocationFinderDummy onClick={onClick}/>
        </MapContainer>
    );
}
export default Map;