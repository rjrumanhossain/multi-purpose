<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <a href="index3.html" class="brand-link">
      <img
        src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png"
        alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: 0.8"
      />
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    <div class="sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img
            src="https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg"
            class="img-circle elevation-2"
            alt="User Image"
          />
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>

      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input
            class="form-control form-control-sidebar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li class="nav-item">
            <router-link
              to="/admin/dashboard"
              active-class="active"
              class="nav-link"
            >
              <i class="nav-icon fas fa-th"></i>
              <p>Dashboard</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/admin/appointment"
              active-class="active"
              class="nav-link"
            >
              <i class="nav-icon fas fa-th"></i>
              <p>Appointments</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/admin/users"
              active-class="active"
              class="nav-link"
            >
              <i class="nav-icon fas fa-user"></i>
              <p>User</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/admin/setting"
              active-class="active"
              class="nav-link"
            >
              <i class="nav-icon fas fa-th"></i>
              <p>Settings</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/admin/profile"
              active-class="active"
              class="nav-link"
            >
              <i class="nav-icon fas fa-users"></i>
              <p>Profile</p>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>Logout</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  name: "sidebarvue",
};
</script>
