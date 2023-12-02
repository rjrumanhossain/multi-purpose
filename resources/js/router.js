
import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './components/DashboardVue.vue'; // Import your Dashboard component

const routes = [
  // Other routes...
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: Dashboard // Use the appropriate component for your dashboard
  },
  // Other routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;