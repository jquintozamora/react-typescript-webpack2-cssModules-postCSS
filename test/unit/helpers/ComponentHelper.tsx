import { shallow, mount, render } from 'enzyme'
import * as React from 'react'

const renderComponentHelper = (Component: any, mountOptions = {}) => {

    return ({ children = null, ...props } = {}) => {
        const wrapper = shallow(
            <Component {...props} > {children} </Component>,
            { ...mountOptions }
        )

        const component = {
            wrapper,
            instance: wrapper.instance(),
            // requires "snapshotSerializers": ["enzyme-to-json/serializer"] in jest config to extract just the html
            getHtml: () => wrapper
        }

        return {
            ...component,
        }
    }
}

export default renderComponentHelper
