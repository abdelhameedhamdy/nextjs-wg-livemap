import { NextPage } from "next";
import { useQuery, withWunderGraph } from "../components/generated/nextjs";
import Map, { Marker } from "react-map-gl";
import maplibregl from "maplibre-gl";
import Pin from "components/pin";
import { useState } from "react";

type Info = {
  feature: {
    time?: string;
    monitoredVehicleJourney?: {
      originShortName?: string;
      bearing?: string;
      speed?: string;
      vehicleLocation?: {
        latitude?: string;
        longitude?: string;
      };
      directionRef?: string;
      operatorRef?: string;
      vehicleRef?: string;
      lineRef?: string;
    };
  };
  x: number;
  y: number;
};

const Home: NextPage = () => {
  const [popupInfo, setPopupInfo] = useState<Info | null>(null);

  const dragons = useQuery({
    operationName: "Location",
    liveQuery: true,
    revalidateOnFocus: false,
    enabled: true,
  });

  return (
    <div>
      <div className="relative max-w-5xl pt-20 mx-auto sm:pt-24 lg:pt-32">
        <div className="flex justify-center">
          <div className="w-50 text-cyan-400 dark:text-white">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 1000 1000"
              enableBackground="new 0 0 1000 1000"
              xmlSpace="preserve"
            >
              <path
                fill="currentColor"
                d="M675.4,473.2l-53.6,91l-68.5-116.7L484.9,564l-118.1-204c42.4-56.8,110.1-93.4,186.5-93.4
	c45.8,0,88.5,13.2,124.6,35.9c-0.7,3.8-1.1,7.6-1.1,11.6c0,34.4,27.9,62.2,62.2,62.2s62.2-27.9,62.2-62.2
	c0-34.4-27.9-62.2-62.2-62.2c-9.3,0-18.2,2.1-26.1,5.8c-45.8-30.2-100.6-47.9-159.6-47.9c-86.5,0-164,37.7-217,97.6L296,237.6
	c7-10.1,11.1-22.2,11.1-35.4c0-34.4-27.9-62.2-62.2-62.2s-62.2,27.9-62.2,62.2s27.9,62.2,62.2,62.2c1.8,0,3.5-0.1,5.3-0.3l52.2,90.3
	c-24.9,42.7-39,92.6-39,145.4c0,80.1,32.4,152.6,84.9,205.1c52.5,52.5,125,84.9,205.1,84.9c151,0,275.4-115.7,288.7-263.5
	c0.8-8.8,1.3-17.5,1.3-26.5v-26.5H675.4z M553.4,733.2c-64.5,0-122.8-26.3-165-68.4c-42.2-42.2-68.5-100.6-68.5-165
	c0-30.5,5.8-59.7,16.7-86.5L484.4,669l69-116.7l68.5,116.5l83.8-142.5H785C772,642.8,673.3,733.2,553.4,733.2z"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-center text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
          WunderGraph & Next.js
        </h1>
        <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-slate-600 dark:text-slate-400">
          Use{" "}
          <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
            <a
              className="text-cyan-400 hover:text-cyan-600"
              target="_blank"
              href="https://wundergraph.com"
            >
              WunderGraph
            </a>
          </code>{" "}
          to make your data-source accessible through JSON-RPC to your Next.js
          app.
        </p>
      </div>
      <div className="relative flex flex-col items-center p-8 overflow-hidden sm:p-12">
        <div className="w-full max-w-xl px-20 py-6 rounded-2xl bg-blue-50">
          <div className="flex flex-col items-center max-w-sm mx-auto">
            <p className="mt-3 mb-8 text-center text-black/80">
              This is the result of your{" "}
              <code className="font-mono font-medium font-bold text-amber-500">
                Location
              </code>{" "}
              operation.
            </p>
            <div className="overflow-hidden border-2 border-amber-500 rounded-2xl">
              <Map
                mapLib={maplibregl}
                initialViewState={{
                  latitude: 61.495304,
                  longitude: 23.770809,
                  zoom: 10,
                }}
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
                mapStyle="https://api.maptiler.com/maps/openstreetmap/style.json?key=UcrAb2Y21ncvJA6R54Hn"
                style={{ width: 500, height: 400 }}
                attributionControl={false}
              >
                {dragons.data &&
                  dragons.data.getVehicleActivity?.body?.map(
                    (location, index) => {
                      const { vehicleLocation, bearing, lineRef } =
                        location.monitoredVehicleJourney!;
                      return (
                        <Marker
                          key={`marker-${index}`}
                          longitude={Number(vehicleLocation?.longitude)}
                          latitude={Number(vehicleLocation?.latitude)}
                          rotation={Number(bearing)}
                        >
                          <Pin
                            onMouseMove={(e) => {
                              // e.stopPropagation();
                              //@ts-ignore
                              const { layerX: x, layerY: y } = e.nativeEvent;

                              setPopupInfo(
                                location && {
                                  feature: location,
                                  x,
                                  y,
                                }
                              );
                            }}
                            onMouseOut={() => setPopupInfo(null)}
                          />
                        </Marker>
                      );
                    }
                  )}
                {popupInfo && (
                  <div
                    className="absolute z-10 p-1 m-2 text-white bg-orange-400 rounded-md shadow-md pointer-events-none"
                    style={{ left: popupInfo.x, top: popupInfo.y }}
                  >
                    <div>
                      <p>
                        speed:{" "}
                        {popupInfo.feature.monitoredVehicleJourney?.speed} km/h
                        - lineRef:{" "}
                        {popupInfo.feature.monitoredVehicleJourney?.lineRef}
                      </p>
                      <p>
                        time:{" "}
                        {new Date(
                          popupInfo.feature?.time!
                        ).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                )}
              </Map>
            </div>
          </div>
        </div>
        <footer className="flex justify-between text-gray-400">
          <p className="pt-3">
            Visit{" "}
            <a
              className="text-cyan-400 hover:text-cyan-600"
              target="_blank"
              href="https://github.com/wundergraph/wundergraph"
            >
              Github
            </a>{" "}
            to learn more about WunderGraph.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default withWunderGraph(Home);
