import Tabs from "./tabs";
import "./tabs.css";

function RandomComponent({ tab }) {
    if (tab === 1) {
        return <h1>Hey there it's me !</h1>;
    } else if (tab === 2) {
        return <h2>I love to learn react</h2>;
    } else {
        return <h3>Welcome to my learning page</h3>;
    }
}

export default function TabTest() {
    const tabs = [
        {
            label: "Tab 1",
            content: <RandomComponent tab={1} />,
        },
        {
            label: "Tab 2",
            content: <RandomComponent tab={2} />,
        },
        {
            label: "Tab 3",
            content: <RandomComponent tab={3} />,
        },
    ];

    function handleChange(currentTabIndex) {
        console.log(currentTabIndex);
    }

    return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
