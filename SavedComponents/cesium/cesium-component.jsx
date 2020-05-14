import React from 'react';

import Cesium from "cesium";

export const Viewer = new Cesium.Viewer();

Viewer.entities.add({
  name: "tokyo",
  description: "test",
  position: Cartesian3.fromDegrees(139.767052, 35.681167, 100),
  point: { pixelSize: 10 }
});