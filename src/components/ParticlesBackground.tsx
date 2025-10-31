import { useEffect } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { tsParticles } from "@tsparticles/engine";

const ParticlesBackground = () => {
  useEffect(() => {
    loadFull(tsParticles);
  }, []);

  return (
	<div className="absolute inset-0 z-0">
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: false },
          detectRetina: true,
          background: { color: "transparent" },
          particles: {
            number: {
              value: 40,
            },
            color: { value: "#9ca3af" },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.4, max: 0.7 },
            },
            size: {
              value: { min: 1, max: 4 },
            },
            links: {
              enable: true,
              distance: 150,
              color: "#9ca3af",
              opacity: 0.25,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: "none",
              outModes: { default: "out" },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 4 },
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
