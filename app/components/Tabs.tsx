"use client";

import { KeyboardEvent, useEffect, useState } from "react";

interface AboutData
{
    id: number,
    title: string,
    content: string
};
interface TabsProps
{
    data: AboutData[]
};
export default function Tabs(props: TabsProps)
{
    const [currentTab, setCurrentTab] = useState(1);

    useEffect(() => {
        document.querySelector<HTMLLIElement>("li[aria-selected='true']")!.focus();
    }, [currentTab]);

    function switchTabs(e: KeyboardEvent)
    {
        switch(e.key)
        {
            case "ArrowLeft":
                setCurrentTab((currentTab) => currentTab - 1 > 0 ? currentTab - 1 : props.data.length);
                break;
            case "ArrowRight":
                setCurrentTab((currentTab) => currentTab + 1 <= props.data.length ? currentTab + 1 : 1);
                break;
            default:
                break;
        }
    }

    return (
        <div className="tabs md:mx-16 lg:mx-32">
            <ul
                className="my-4 flex flex-col sm:flex-row justify-around items-center"
                role="tablist"
                onKeyDown={switchTabs}
            >
            {
                props.data.map((tab) => (
                    <li
                        key={tab.id}
                        className="w-full py-2 text-center border-b border-gray-200 cursor-pointer outline-none"
                        role="tab"
                        tabIndex={currentTab === tab.id ? 0 : -1}
                        aria-selected={currentTab === tab.id}
                        onClick={() => setCurrentTab(tab.id)}
                    >
                        {tab.title}
                    </li>
                ))
            }
            </ul>
            {
                props.data.map((tab) => (
                    <p
                        key={tab.id}
                        className="hidden text-center outline-none"
                        role="tabpanel"
                        tabIndex={0}
                        aria-selected={currentTab === tab.id}
                    >
                        {tab.content}
                    </p>
                ))
            }
        </div>
    );
}