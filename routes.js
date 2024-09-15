// routes.js


const navbarRoutes = [
    {
      label: 'About us',
      path: '/',
    }, {
      label: 'Projects',
      path: '/',
    }, {
      label: 'Partnerships',
      path: '/',
    }, {
      label: 'Events',
      path: '/',
    },
    {
      label: 'News',
      path: '/',
    },
    {
      label: 'Research',
      children: [
        { label: 'Academy', path: '/services/design' },
        { label: 'Sha example', path: '/services/sha' },
        { label: 'Markets', path: '/services/market' },
      ],
    },
    {
      label: 'Contact us',
      path: '/about',
    },
    {
      label: 'FAQ',
      path: '/FAQ',
    },
  ];
  
  export default navbarRoutes;
  