'use client';

import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SubCategory from './subcategories';

export default function Categories() {
    const [tab1, setTab1] = useState(true)
    const [tab2, setTab2] = useState(false)
    const [tab3, setTab3] = useState(false)
    return (
        <div id="sidebar" className='flex flex-col w-[40vw] h-[118vh] mt-96 bg-white overflow-auto'>
            <ul
                className="mb-4 mt-52 w-full h-12 flex list-none flex-row flex-wrap border-b-0 pl-0"
                id="tabs-tab3"
                role="tablist"
                data-te-nav-ref>
                <li role="presentation">
                    <p
                        className={`my-2 block border-x-0 border-b-2 border-t-0 border-transparent ${tab1 ? 'text-black' : 'text-gray-400'} px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 hover:cursor-pointer`}
                        id="tabs-home-tab3"
                        data-te-toggle="pill"
                        data-te-target="#tabs-home3"
                        data-te-nav-active
                        role="tab"
                        aria-controls="tabs-home3"
                        aria-selected="true"
                        onClick={() => {
                            setTab1(true)
                            setTab2(false)
                            setTab3(false)
                        }}
                    >WOMEN</p>
                </li>
                <li role="presentation">
                    <p
                        className={`focus:border-transparent ${tab2 ? 'text-black' : 'text-gray-400'} my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 hover:cursor-pointer`}
                        id="tabs-profile-tab3"
                        data-te-toggle="pill"
                        data-te-target="#tabs-profile3"
                        role="tab"
                        aria-controls="tabs-profile3"
                        aria-selected="false"
                        onClick={() => {
                            setTab1(false)
                            setTab2(true)
                            setTab3(false)
                        }}
                    >MEN</p>
                </li>
                <li role="presentation">
                    <p
                        className="focus:border-transparent text-black my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                        id="tabs-messages-tab3"
                        data-te-toggle="pill"
                        data-te-target="#tabs-messages3"
                        role="tab"
                        aria-controls="tabs-messages3"
                        aria-selected="false"
                        onClick={() => {
                            setTab1(false)
                            setTab2(false)
                            setTab3(true)
                        }}
                    >KIDS</p>
                </li>
            </ul>

            <div id="categories" className="mb-6 flex flex-col flex-nowrap">
                {tab1 && <div
                    className={`${tab1 ? 'hidden' : ''} transition-opacity duration-150 ease-linear data-[te-tab-active]:block`}
                    id="tabs-home"
                    role="tabpanel"
                    aria-labelledby="tabs-home-tab"
                    data-te-tab-active={tab1}
                >
                    <SubCategory subCat='woman' />
                </div>}
                {tab2 && <div
                    className={`hidden ${tab2 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 ease-linear data-[te-tab-active]:block`}
                    id="tabs-profile"
                    role="tabpanel"
                    aria-labelledby="tabs-profile-tab"
                    data-te-tab-active={tab2}
                >
                    <SubCategory subCat='man' />
                </div>}
                {tab3 && <div
                    className={`hidden ${tab3 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 ease-linear data-[te-tab-active]:block`}
                    id="tabs-messages"
                    role="tabpanel"
                    aria-labelledby="tabs-profile-tab"
                    data-te-tab-active={tab3}
                >
                    Tab 3 content
                </div>}
            </div></div>
    );
}