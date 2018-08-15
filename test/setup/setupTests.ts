// tslint:disable
import * as Enzyme from "enzyme";
import { raf } from "./tempPolyfills";
import toJson from "enzyme-to-json";
const Adapter = require("enzyme-adapter-react-16");

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
declare var global: any;
global.shallow = Enzyme.shallow;
global.render = Enzyme.render;
global.mount = Enzyme.mount;
global.toJson = toJson;
