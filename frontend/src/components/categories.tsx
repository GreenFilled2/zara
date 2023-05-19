'use client';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Categories() {
    return (
        <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3 mt-12 flex w-full justify-center"
        >
            <Tab eventKey="men" title="MEN">
                {/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="women" title="WOMEN">
                {/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="kids" title="KIDS">
                {/* <Sonnet /> */}
            </Tab>
        </Tabs>
    );
}