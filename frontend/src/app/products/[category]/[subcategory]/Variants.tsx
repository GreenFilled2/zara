import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// import Sonnet from '../../components/Sonnet';

interface variants {
    variants: string[],
}

function Variants({ variants }: variants) {
    return (
        <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3 flex w-full justify-center"
        >
            <Tab eventKey="home" title="Home">
                {/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="profile" title="Profile">
                {/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
                {/* <Sonnet /> */}
            </Tab>
        </Tabs>
    );
}

export default Variants;