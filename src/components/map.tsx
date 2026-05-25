import "maplibre-gl/dist/maplibre-gl.css";
import MapLibre, {
	NavigationControl,
	ScaleControl,
} from "react-map-gl/maplibre";

const STYLES = {
	basemap:
		"https://vectortiles.geo.admin.ch/styles/ch.swisstopo.basemap.vt/style.json",
	lightbasemap:
		"https://vectortiles.geo.admin.ch/styles/ch.swisstopo.lightbasemap.vt/style.json",
	imagerybasemap:
		"https://vectortiles.geo.admin.ch/styles/ch.swisstopo.imagerybasemap.vt/style.json",
	basemapWinter:
		"https://vectortiles.geo.admin.ch/styles/ch.swisstopo.basemap-winter.vt/style.json",
} as const;

type StyleKey = keyof typeof STYLES;

interface MapViewProps {
	style?: StyleKey;
}

export default function MapView({
	style = "basemap",
}: MapViewProps) {
	return (
		<MapLibre
			initialViewState={{
				longitude: 7.74526,
				latitude: 47.02747,
				zoom: 15,
			}}
			style={{ width: "100%", height: "100%" }}
			mapStyle={STYLES[style]}
		>
			<NavigationControl position="top-right" />
			<ScaleControl unit="metric" position="bottom-left" />
		</MapLibre>
	);
}
