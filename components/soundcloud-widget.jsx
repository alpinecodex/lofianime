"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SoundcloudWidget() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Dynamically load the SoundCloud API script
    const script = document.createElement("script");
    script.src = "https://w.soundcloud.com/player/api.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      // Initialize the SoundCloud Widget after script is loaded
      const widgetIframe = document.getElementById("sc-widget");
      const widget = window.SC.Widget(widgetIframe);

      widget.bind(window.SC.Widget.Events.READY, () => {
        widget.bind(window.SC.Widget.Events.PLAY, () => {
          widget.getCurrentSound((currentSound) => {
            console.log(`sound ${currentSound} began to play`);
          });
        });

        widget.getVolume((volume) => {
          console.log(`current volume value is ${volume}`);
        });

        widget.play();
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <button onClick={() => setHidden(!hidden)}>
        <Image
          src="soundcloud.svg"
          alt="Soundcloud logo"
          height={0}
          width={0}
          className="h-8 w-8"
        />
      </button>
      <div>
        <iframe
          id="sc-widget"
          src="https://w.soundcloud.com/player/?url=https://soundcloud.com/lofi-hip-hop-music/sets/lofi-hip-hop"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          style={{
            height: hidden ? "0px" : "166px",
            width: hidden ? "0px" : "300px",
            overflow: "hidden",
            visibility: hidden ? "hidden" : "visible",
            position: "fixed",
            bottom: "25px",
            right: "25px",
          }}
        ></iframe>
      </div>
    </>
  );
}
