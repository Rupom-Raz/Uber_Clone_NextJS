import mapboxgl from "mapbox-gl";
import { useEffect } from "react";
import tw from "tailwind-styled-components";

mapboxgl.accessToken =
    "pk.eyJ1IjoicnVwb200NiIsImEiOiJjbGhlY3o5dWkwdmNvM3FyM3JqOWwwZzh0In0.BqbaAVprH_X8PcP9tlA5ag";
const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/rupom46/clheftagv017h01p60m131r6z",
            center: [91.864454, 24.891223],
            zoom: 12.72,
        });
    });
    return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1
`;
