"use client";

import { KeyboardEvent, useEffect, useState } from "react";
import type { AboutData } from "../_utils/types";

interface TabsProps
{
    data: AboutData[]
};
export default function Tabs(props: TabsProps)
{
    const [currentTab, setCurrentTab] = useState(1);

    useEffect(() => {
        const tab = document.querySelector<HTMLLIElement>("li[aria-selected='true']");
        tab!.focus();
    }, [currentTab]);

    function switchTabs(e: KeyboardEvent): void
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
                props.data.map((tab: AboutData) => (
                    <li
                        key={tab.id}
                        className="w-full py-2 text-center border-b border-gray-200 cursor-pointer"
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
                props.data.map((tab: AboutData) => (
                    <p
                        key={tab.id}
                        className="hidden text-center"
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