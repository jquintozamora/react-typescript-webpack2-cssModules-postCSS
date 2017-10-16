import { raf } from './tempPolyfills'
import * as Enzyme from 'enzyme'
const Adapter = require('enzyme-adapter-react-16')
import toJson from 'enzyme-to-json'

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })

// Make Enzyme functions available in all test files without importing
declare var global: any
global.shallow = Enzyme.shallow
global.render = Enzyme.render
global.mount = Enzyme.mount
global.toJson = toJson

// Fail tests on any warning
console.error = (message: string) => {
    throw new Error(message)
}
