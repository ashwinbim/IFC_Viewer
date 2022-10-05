import { Color } from "three";
import { IfcViewerAPI } from "web-ifc-viewer";
import { projects } from "./projects.js";

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({container, backgroundColor: new Color(255, 255, 255)});

viewer.axes.setAxes();
viewer.grid.setGrid();

const currentUrl = window.location.href;
const url = new URL(currentUrl);
const currentProjectID = url.searchParams.get('id');

const currentProject = projects.find(project => project.id === currentProjectID);

viewer.IFC.setWasmPath('../');
viewer.IFC.loadIfcUrl(currentProject.url);

// import { Color } from 'three';
// import { IfcViewerAPI } from 'web-ifc-viewer';

// const container = document.getElementById('viewer-container');
// const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
// viewer.grid.setGrid();
// viewer.axes.setAxes();

// async function loadIfc(url) {
//     await viewer.IFC.setWasmPath("../");
//     const model = await viewer.IFC.loadIfcUrl(url);
//     viewer.shadowDropper.renderShadow(model.modelID);
// }

// loadIfc('./ifc/01.ifc');