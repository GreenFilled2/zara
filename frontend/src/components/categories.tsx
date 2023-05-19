'use client';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Categories() {
    return (
        <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3 mt-20 flex w-36 justify-center"
        >
            <Tab eventKey="men" className='sidebar-cat' title="MEN">
            </Tab>
            <Tab eventKey="women" className='sidebar-cat' title="WOMEN">
            </Tab>
            <Tab eventKey="kids" className='sidebar-cat' title="KIDS">
            </Tab>
        </Tabs>
    );
}