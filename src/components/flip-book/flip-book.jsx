import { useEffect } from 'react'
import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import '@react-pdf-viewer/full-screen/lib/styles/index.css';

const Book = ({ pdf }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [
      defaultTabs[0],
    ],
    setInitialTab: () => Promise.resolve(0),
  });

  useEffect(() => {
    setTimeout(() => {
      const toolbar = document.querySelectorAll(".rpv-toolbar__right")
      if (toolbar.length && toolbar[0].childNodes) {
        toolbar[0].childNodes[1].remove()
        toolbar[0].childNodes[1].remove()
      }
    }, 3000);
  }, [])

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js">
      <div style={{ height: "100%", width: '100%', overflow: "hidden" }}>
        <Viewer
          fileUrl=
          {`/pdf/files/${pdf}`}
          plugins={[defaultLayoutPluginInstance]}
          theme={{
            theme: "dark",
          }}
          defaultScale={SpecialZoomLevel.PageWidth}
        />
      </div>
    </Worker>
  );
};

export default Book;
