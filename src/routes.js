// import React from 'react';

const routes = [
    {
        path: '/',
        exact: false,
        name: 'Menu',
        // component: Home,
        icon: 'menu',
        label: 'brand',
        resources: [
            {
                path: '/about-santorisan',
                exact: false,
                name: 'About Santorisan',
                // component: About,
            },
            {
                path: '/sign-up',
                exact: false,
                name: 'Sign Up',
                // component: SignUp,
            },
            {
                path: '/my-account',
                exact: false,
                name: 'My Account',
                // component: MyAccount,
            },
            {
                path: '/contacts-us',
                exact: false,
                name: 'Contacts Us',
                // component: ContactsUs,
            },
            {
                path: '/faq',
                exact: false,
                name: 'FAQs',
                // component: FAQ,
            },
            {
                path: '/shipments',
                exact: false,
                name: 'Shipments',
                // component: Shipments,
            },
            {
                path: '/changes-and-returns',
                exact: false,
                name: 'Changes And Returns',
                // component: ChangesAndReturns,
            },
            {
                path: '/terms-of-use',
                exact: false,
                name: 'Terms Of Use',
                // component: TermsOfUse,
            },
            {
                path: '/privacy-policy',
                exact: false,
                name: 'Privacy Policy',
                // component: PrivacyPolicy,
            }
        ]
    },
    {
        path: '/men',
        exact: false,
        name: 'Men',
        // component: Home,
        icon: '',
        label: 'shop men',
        resources: [
            {
                path: '/all',
                exact: false,
                name: 'All',
                // component: All
            },
            {
                path: '/casual',
                exact: false,
                name: 'Casual',
                // component: Casual
            },
            {
                path: '/tate',
                exact: false,
                name: 'Tate',
                // component: Tate
            },
            {
                path: '/cold',
                exact: false,
                name: 'Cold',
                // component: Cold
            },
            {
                path: '/rustic',
                exact: false,
                name: 'Rustic',
                // component: Rustic
            },
            {
                path: '/kiso',
                exact: false,
                name: 'Kiso',
                // component: Kiso
            },
            {
                path: '/venice',
                exact: false,
                name: 'Venice',
                // component: Venice
            },
            {
                path: '/benirras',
                exact: false,
                name: 'Benirras',
                // component: Benirras
            },
            {
                path: '/uwabaki',
                exact: false,
                name: 'Uwabaki',
                // component: Uwabaki
            },
            {
                path: '/accessories',
                exact: false,
                name: 'Accessories',
                // component: Accessories
            },
            {
                path: '/spare-parts',
                exact: false,
                name: 'Spare Parts',
                // component: SpareParts,
            }
        ]
    },
    {
        path: '/woman',
        exact: false,
        name: 'Women',
        // component: Home,
        icon: '',
        label: 'shop women',
        resources: [
            {
                path: '/all',
                exact: false,
                name: 'All',
                // component: All
            },
            {
                path: '/casual',
                exact: false,
                name: 'Casual',
                // component: Casual
            },
            {
                path: '/tate',
                exact: false,
                name: 'Tate',
                // component: Tate
            },
            {
                path: '/cold',
                exact: false,
                name: 'Cold',
                // component: Cold
            },
            {
                path: '/rustic',
                exact: false,
                name: 'Rustic',
                // component: Rustic
            },
            {
                path: '/kiso',
                exact: false,
                name: 'Kiso',
                // component: Kiso
            },
            {
                path: '/venice',
                exact: false,
                name: 'Venice',
                // component: Venice
            },
            {
                path: '/benirras',
                exact: false,
                name: 'Benirras',
                // component: Benirras
            },
            {
                path: '/uwabaki',
                exact: false,
                name: 'Uwabaki',
                // component: Uwabaki
            },
            {
                path: '/accessories',
                exact: false,
                name: 'Accessories',
                // component: Accessories
            },
            {
                path: '/spare-parts',
                exact: false,
                name: 'Spare Parts',
                // component: SpareParts,
            }
        ]
    },
    {
        path: '/stores',
        exact: false,
        name: 'Stores',
        // component: Stores,
        icon: '',
        label: 'satori home',
        resources: [
            {
                path: '/valencia',
                exact: false,
                name: 'Valencia',
                // component: Valencia
            },
            {
                path: '/madrid',
                exact: false,
                name: 'Madrid',
                // component: Madrid
            },
            {
                path: '/worldwide-store-locator',
                exact: false,
                name: 'Worldwide Store Locator',
                // component: WorldwideStoreLocator 
            }
        ]
    }
]

export default routes;