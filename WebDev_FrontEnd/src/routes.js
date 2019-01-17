import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Breadcrumbs = Loadable({
  loader: () => import('./views/Base/Breadcrumbs'),
  loading: Loading,
});

const Cards = Loadable({
  loader: () => import('./views/Base/Cards'),
  loading: Loading,
});

const Carousels = Loadable({
  loader: () => import('./views/Base/Carousels'),
  loading: Loading,
});

const Collapses = Loadable({
  loader: () => import('./views/Base/Collapses'),
  loading: Loading,
});

const Dropdowns = Loadable({
  loader: () => import('./views/Base/Dropdowns'),
  loading: Loading,
});

const Forms = Loadable({
  loader: () => import('./views/Base/Forms'),
  loading: Loading,
});

const Jumbotrons = Loadable({
  loader: () => import('./views/Base/Jumbotrons'),
  loading: Loading,
});

const ListGroups = Loadable({
  loader: () => import('./views/Base/ListGroups'),
  loading: Loading,
});

const Navbars = Loadable({
  loader: () => import('./views/Base/Navbars'),
  loading: Loading,
});

const Navs = Loadable({
  loader: () => import('./views/Base/Navs'),
  loading: Loading,
});

const Paginations = Loadable({
  loader: () => import('./views/Base/Paginations'),
  loading: Loading,
});

const Popovers = Loadable({
  loader: () => import('./views/Base/Popovers'),
  loading: Loading,
});

const ProgressBar = Loadable({
  loader: () => import('./views/Base/ProgressBar'),
  loading: Loading,
});

const Switches = Loadable({
  loader: () => import('./views/Base/Switches'),
  loading: Loading,
});

const Tables = Loadable({
  loader: () => import('./views/Base/Tables'),
  loading: Loading,
});

const Tabs = Loadable({
  loader: () => import('./views/Base/Tabs'),
  loading: Loading,
});

const Tooltips = Loadable({
  loader: () => import('./views/Base/Tooltips'),
  loading: Loading,
});

const BrandButtons = Loadable({
  loader: () => import('./views/Buttons/BrandButtons'),
  loading: Loading,
});

const ButtonDropdowns = Loadable({
  loader: () => import('./views/Buttons/ButtonDropdowns'),
  loading: Loading,
});

const ButtonGroups = Loadable({
  loader: () => import('./views/Buttons/ButtonGroups'),
  loading: Loading,
});

const Buttons = Loadable({
  loader: () => import('./views/Buttons/Buttons'),
  loading: Loading,
});

const Charts = Loadable({
  loader: () => import('./views/Charts'),
  loading: Loading,
});

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const CoreUIIcons = Loadable({
  loader: () => import('./views/Icons/CoreUIIcons'),
  loading: Loading,
});

const Flags = Loadable({
  loader: () => import('./views/Icons/Flags'),
  loading: Loading,
});

const FontAwesome = Loadable({
  loader: () => import('./views/Icons/FontAwesome'),
  loading: Loading,
});

const SimpleLineIcons = Loadable({
  loader: () => import('./views/Icons/SimpleLineIcons'),
  loading: Loading,
});

const Alerts = Loadable({
  loader: () => import('./views/Notifications/Alerts'),
  loading: Loading,
});

const Badges = Loadable({
  loader: () => import('./views/Notifications/Badges'),
  loading: Loading,
});

const Modals = Loadable({
  loader: () => import('./views/Notifications/Modals'),
  loading: Loading,
});

const Colors = Loadable({
  loader: () => import('./views/Theme/Colors'),
  loading: Loading,
});

const Typography = Loadable({
  loader: () => import('./views/Theme/Typography'),
  loading: Loading,
});

const Widgets = Loadable({
  loader: () => import('./views/Widgets/Widgets'),
  loading: Loading,
});

const Users = Loadable({
  loader: () => import('./views/Users/Users'),
  loading: Loading,
});

const User = Loadable({
  loader: () => import('./views/Users/User'),
  loading: Loading,
});

const Gates = Loadable({
  loader: () => import('./amader_folder/GatePage'),
  loading: Loading,
});
const Memory = Loadable({
  loader: () => import('./amader_folder/MemoryPage'),
  loading: Loading,
});

const Others = Loadable({
  loader: () => import('./amader_folder/OthersPage'),
  loading: Loading,
});
const Meters = Loadable({
  loader: () => import('./amader_folder/MetersPage'),
  loading: Loading,
});
const Hardware = Loadable({
  loader: () => import('./amader_folder/HardwarePage'),
  loading: Loading,
});
const Processors = Loadable({
  loader: () => import('./amader_folder/ProcessorsPage'),
  loading: Loading,
});
const Passive_comp = Loadable({
  loader: () => import('./amader_folder/PassiveCompPage'),
  loading: Loading,
});
const Active_comp = Loadable({
  loader: () => import('./amader_folder/ActiveCompPage'),
  loading: Loading,
});

const AddItem = Loadable({
  loader: () => import('./amader_folder/AddItem'),
  loading: Loading,
});

const AllItems = Loadable({
  loader: () => import('./amader_folder/AllItems'),
  loading: Loading,
});
const Requested_item = Loadable({
  loader: () => import('./amader_folder/RequestedItemPage'),
  loading: Loading,
});

const Pending_items_editor = Loadable({
  loader: () => import('./amader_folder/PendingItemEditorPage'),
  loading: Loading,
});

const History_items = Loadable({
  loader: () => import('./amader_folder/HistoryItemStudent'),
  loading: Loading,
});

const Pending_items = Loadable({
  loader: () => import('./amader_folder/RequestItemStudent'),
  loading: Loading,
});

const Customize = Loadable({
  loader: () => import('./amader_folder/Customize'),
  loading: Loading,
});

const Profile_st = Loadable({
  loader: () => import('./amader_folder/Profile_st'),
  loading: Loading,
});

const AddUser = Loadable({
  loader: () => import('./amader_folder/AddUser'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/customize', exact: true, name: 'Customize', component: Customize },
  { path: '/requested_item', exact: true, name: 'Requested_item', component: Requested_item },
  { path: '/others', exact: true, name: 'Others', component: Others },
  { path: '/equipments/meters', exact: true, name: 'Meters', component: Meters },
  { path: '/equipments/hardware', exact: true, name: 'Hardware', component: Hardware },
  { path: '/general/processors', exact: true, name: 'Processors', component: Processors },
  { path: '/general/passive_comp', exact: true, name: 'Passive_comp', component: Passive_comp },
  { path: '/general/active_comp', exact: true, name: 'Active_comp', component: Active_comp },
  { path: '/AddItem', exact: true, name: 'Active_comp', component: AddItem },
  { path: '/PendingStudent', exact: true, name: 'Pending', component: Pending_items },
  { path: '/HistoryStudent', exact: true, name: 'History_Student', component: History_items },
  { path: '/pending_item_editor', exact: true, name: 'Pending Editor', component: Pending_items_editor },
  { path: '/profile_st', exact: true, name: 'Profile_st', component: Profile_st },
  { path: '/AddUser', exact: true, name: 'Add User', component: AddUser },

  { path: '/ICs/Memory', exact: true, name: 'Memory', component: Memory },
  { path: '/ICs/Gates', exact: true, name: 'Gates', component: Gates },
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: AllItems },
  // { path: '/theme', exact: true, name: 'Theme', component: Colors },
  // { path: '/theme/colors', name: 'Colors', component: Colors },
  // { path: '/theme/typography', name: 'Typography', component: Typography },
  // { path: '/base', exact: true, name: 'Base', component: Cards },
  // { path: '/base/cards', name: 'Cards', component: Cards },
   //{ path: '/base/forms', name: 'Forms', component: Forms },
  // { path: '/base/switches', name: 'Switches', component: Switches },
  // { path: '/base/tables', name: 'Tables', component: Tables },
  // { path: '/base/tabs', name: 'Tabs', component: Tabs },
  // { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  // { path: '/base/carousels', name: 'Carousel', component: Carousels },
  // { path: '/base/collapses', name: 'Collapse', component: Collapses },
  // { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  // { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  // { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  // { path: '/base/navbars', name: 'Navbars', component: Navbars },
  // { path: '/base/navs', name: 'Navs', component: Navs },
  // { path: '/base/paginations', name: 'Paginations', component: Paginations },
  // { path: '/base/popovers', name: 'Popovers', component: Popovers },
  // { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  // { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  // { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  // { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  // { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  // { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  // { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  // { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  // { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  // { path: '/icons/flags', name: 'Flags', component: Flags },
  // { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  // { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  // { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  // { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  // { path: '/notifications/badges', name: 'Badges', component: Badges },
  // { path: '/notifications/modals', name: 'Modals', component: Modals },
  // { path: '/widgets', name: 'Widgets', component: Widgets },
  // { path: '/charts', name: 'Charts', component: Charts },
  // { path: '/users', exact: true,  name: 'Users', component: Users },
  // { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
