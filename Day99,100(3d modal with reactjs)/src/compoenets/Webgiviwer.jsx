import React, {
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressiePlugin,
  // TonemapPlugin,
  // SSRPlugin,
  // SSRPlugin,
  // SSAOPlugin,
  BloomPlugin,
  GammaCorrextionPlugin,
  addBasePlugins,
  mobileAndTableCheck,
  CanvasSnipperPlugin,
} from "webgi";
const Webgiviwer = () => {
  const canvasRef = useRef(null);
  const setupViewer = useCallback(async () => {
    const viewer = new ViewerApp({
      canvas: canvasRef.cuurent,
    });
    const manager = await viewer.addPlugin(AssetManagerPlugin);
    await addBasePlugins(viewer);
    await viewer.addPlugin(CanvasSnipperPlugin);
    viewer.renderer.refreshPipline();
    await manager.addFromPath("scene-black.glb");
  }, []);
  return (
    <div id="webgi-canvas-container">
      <canvas id="webgi-canvas" ref={canvasRef} />
    </div>
  );
};

export default Webgiviwer;
