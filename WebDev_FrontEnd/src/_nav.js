export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',

    },
    {
      title: true,
      name: 'Items',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'ICs',
      url: '/ICs',
      icon: 'icon-screen-tablet',
      children: [
        {
          name: 'Gates',
          url: '/ICs/Gates',
          icon: 'icon-screen-tablet',
        },
        {
          name: 'Memory',
          url: '/ICs/Memory',
          icon: 'icon-screen-tablet',
        },

      ],
    },
    {
      name: 'General',
      url: '/general',
      icon: 'icon-energy',
      children: [
        {
          name: 'Active Components',
          url: '/general/active_comp',
          icon: 'icon-energy',
        },
        {
          name: 'Passive components',
          url: '/general/passive_comp',
          icon: 'icon-energy',
        },
        {
          name: 'Processors',
          url: '/general/processors',
          icon: 'icon-energy',
        },
      ],
    },
    {
      name: 'Equipments',
      url: '/equipments',
      icon: 'icon-wrench',
      children: [
        {
          name: 'Hardware',
          url: '/equipments/hardware',
          icon: 'icon-wrench',
        },
        {
          name: 'Meters',
          url: '/equipments/meters',
          icon: 'icon-speedometer',
        },
      ],
    },
    {
      name: 'Others',
      url: '/others',
      icon: 'icon-layers',
    },
    {
      title: true,
      name: 'Manage',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Requested Items',
      url: '/requested_item',
      icon: 'icon-bubbles',
    },
    {
      name: 'Pending Items',
      url: '/pending_item_editor',
      icon: 'icon-bubbles',
    },
    {
      name: 'Add Item',
      url: '/AddItem',
      icon: 'icon-plus',
    },
    {
      name: 'Add User',
      url: '/AddUser',
      icon: 'icon-plus',
    },
    {
      name: 'Customize',
      url: '/customize',
      icon: 'icon-share-alt',
    },
  ],
};
