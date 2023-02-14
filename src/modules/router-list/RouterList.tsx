import { createBrowserRouter } from 'react-router-dom';

import { SidePanel } from 'modules/side-panel';

const routerList = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <SidePanel />
                <div>Main</div>
            </>
        ),
    },
    {
        path: '/ideas',
        element: (
            <>
                <SidePanel />
                <div>Ideas</div>
            </>
        ),
    },
    {
        path: '/plan',
        element: (
            <>
                <SidePanel />
                <div>plan</div>
            </>
        ),
    },
    {
        path: '/header',
        element: (
            <>
                <SidePanel />
                <div>header</div>
            </>
        ),
    },
    {
        path: '/clickbait',
        element: (
            <>
                <SidePanel />
                <div>clickbait</div>
            </>
        ),
    },
    {
        path: '/start',
        element: (
            <>
                <SidePanel />
                <div>start</div>
            </>
        ),
    },
    {
        path: '/paragraphs',
        element: (
            <>
                <SidePanel />
                <div>paragraphs</div>
            </>
        ),
    },
    {
        path: '/article-rom-plan',
        element: (
            <>
                <SidePanel />
                <div>article-rom-plan</div>
            </>
        ),
    },
    {
        path: '/finish',
        element: (
            <>
                <SidePanel />
                <div>finish</div>
            </>
        ),
    },
    {
        path: '/tags',
        element: (
            <>
                <SidePanel />
                <div>tags</div>
            </>
        ),
    },
    {
        path: '/comments',
        element: (
            <>
                <SidePanel />
                <div>comments</div>
            </>
        ),
    },
    {
        path: '/free',
        element: (
            <>
                <SidePanel />
                <div>free</div>
            </>
        ),
    },
]);

export { routerList };
