
import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './components/DashboardVue.vue';
import AppointmentVue from './components/AppointmentVue.vue';
import Usersvue from "./components/Usersvue.vue";
import ProfileVue from "./components/ProfileVue.vue";
import SettingsVue from "./components/SettingsVue.vue";



const routes = [
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: Dashboard
  },
  {
    path: '/admin/appointment',
    name: 'Appointment',
    component: AppointmentVue
  },
  {
    path: '/admin/users',
    name: 'Users',
    component: Usersvue
  },
  {
    path: '/admin/profile',
    name: 'Profile',
    component: ProfileVue
  },
  {
    path: '/admin/setting',
    name: 'Settings',
    component: SettingsVue
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;