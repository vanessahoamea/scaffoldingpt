"use client";

import { KeyboardEvent, useEffect, useState } from "react";
import type { AboutData } from "@/utils/types";

interface TabsProps
{
    data: AboutData[]
};
export default function Tabs(props: TabsProps)
{
    const [currentTab, setCurrentTab] = useState(0);

    useEffect(() => {
        const tab = document.querySelector<HTMLLIElement>("li[aria-selected='true']");
        tab!.focus();
    }, [currentTab]);

    function switchTabs(e: KeyboardEvent): void
    {
        switch(e.key)
        {
            case "ArrowLeft":
                setCurrentTab((currentTab) => currentTab - 1 >= 0 ? currentTab - 1 : props.data.length - 1);
                break;
            case "ArrowRight":
                setCurrentTab((currentTab) => currentTab + 1 < props.data.length ? currentTab + 1 : 0);
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
                props.data.map((tab: AboutData, index) => (
                    <li
                        key={index}
                        className="w-full py-2 text-center border-b border-gray-200 cursor-pointer"
                        role="tab"
                        tabIndex={currentTab === index ? 0 : -1}
                        aria-selected={currentTab === index}
                        onClick={() => setCurrentTab(index)}
                    >
                        {tab.title}
                    </li>
                ))
            }
            </ul>
            {
                props.data.map((tab: AboutData, index) => (
                    <p
                        key={index}
                        className="hidden text-center"
                        role="tabpanel"
                        tabIndex={0}
                        aria-selected={currentTab === index}
                    >
                        {tab.content}
                    </p>
                ))
            }
        </div>
    );
}