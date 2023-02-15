const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Link 1",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Link 2",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Link 3",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Link 4",
    newTab: false,
    submenu: [
      {
        id: 46,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
