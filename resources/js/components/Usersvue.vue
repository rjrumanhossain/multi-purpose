<template>
  <div class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <!-- <h1 class="m-0">Welcome To Admin Dashboard</h1> -->
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'AdminDashboard' }">Home</router-link>
            </li>
            <li class="breadcrumb-item active">Users</li>
          </ol>
        </div>
      </div>
    </div>
  </div>

  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">
                Users Table
                <button
                  type="button"
                  class="btn btn-default float-end"
                  data-toggle="modal"
                  data-target="#createUsers"
                >
                  Add Users
                </button>
              </h3>
            </div>

            <div class="card-body">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th style="width: 10px">SL.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Last Login</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, index) in users" :key="user.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ user.name }}</td>
                    <td>
                      {{ user.email }}
                    </td>
                    <td>
                      {{ user.phone }}
                    </td>
                    <td>---</td>
                    <td>
                      <button type="button" class="btn btn-success">
                        Edit
                      </button>
                      <button type="button" class="btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="card-footer clearfix">
              <ul class="pagination pagination-sm m-0 float-right">
                <li class="page-item"><a class="page-link" href="#">«</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">»</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- user add modal  -->
  <div class="modal fade" id="createUsers">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Users</h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form >
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" v-model="form.name" placeholder="Name">
              </div>
              <div class="form-group">
                <label for="name">E-mail</label>
                <input type="text" class="form-control" v-model="form.email" placeholder="example@gmail.com">
              </div>
              <div class="form-group">
                <label for="name">Password</label>
                <input type="text" class="form-control" v-model="form.password" placeholder="password">
              </div>
          </form>
        </div>
        <div class="modal-footer justify-content-between">
          <button type="button" class="btn btn-default" data-dismiss="modal">
            Close
          </button>
          <button type="button" @click="createUser()" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script scope>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const users = ref([]);
    const form={
          name:'',
          email:'',
          password:'',

      }

    const getUsers = () => {
      axios.get("http://127.0.0.1:8000/api/admin/users")
        .then((response) => {
          users.value = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const createUser = () => {
      axios.post('http://127.0.0.1:8000/api/create/users', form)
        .then((response) => {
            users.value.push(response.data);
            $("#createUsers").modal('hide');
        })
        .catch((error) => {
          console.log(error);
        });
    };


    onMounted(() => {
      getUsers();
    });

    return {
      users,
      form,
      createUser,
    };
  },
    // methods:{
    //     createUser(){

    //       axios.post('http://127.0.0.1:8000/api/create/users', this.form)
    //       .then((response) => {
    //         const newUser = response.data;
    //         this.users.push(newUser);
    //         this.users.push(newUser)
    //         console.log(this.users)
    //             $("#createUsers").modal('hide');


    //       })
    //       .catch((error) =>{
    //         console.log(error)
    //       });
    //     }
    // }
};
</script>
