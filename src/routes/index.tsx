import { createFileRoute } from "@tanstack/react-router";
import MapView from "#/components/map";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div className="">
			<div className="h-screen w-full">
				<MapView activeLayers={["wanderland", "veloland"]} />
			</div>
		</div>
	);
}
