

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
        <Form @submit="createUser()" :validation-schema="schema" v-slot="{errors}">
          <div class="modal-body">
                <div class="form-group">
                  <label for="name">Name</label>
                  <Field type="text" class="form-control" v-model="form.name" :class="{'is-invalid':errors.name}" id="name" name="name" placeholder="Name"/>
                  <span class="text-red">{{ errors.name }}</span>
                </div>
                <div class="form-group">
                  <label for="email">E-mail</label>
                  <Field type="text" class="form-control" v-model="form.email" :class="{'is-invalid':errors.email}" id="email"  name="email" placeholder="example@gmail.com"/>
                  <span class="text-red">{{ errors.email }}</span>

                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <Field type="text" class="form-control" v-model="form.password" :class="{'is-invalid':errors.password}" id="password" name="password" placeholder="password"/>
                  <span class="text-red">{{ errors.password }}</span>

                </div>
          </div>
          <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-default" data-dismiss="modal">
              Close
            </button>
            <button type="submit" class="btn btn-primary">Save changes</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>


<script scope>
import axios from "axios";
import { ref, onMounted } from "vue";
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';
export default {
  setup() {
    const users = ref([]);
    const form={
          name:'',
          email:'',
          password:'',
      };
     const schema = yup.object({
        name: yup.string().required(),
        password: yup.string().required().min(8),
        email: yup.string().email().required()
     });



      // const createUser = () =>{
      //   console.log(form.name);
      // }

    const getUsers = () => {
      axios.get("http://127.0.0.1:8000/api/admin/users")
        .then((response) => {
          users.value = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const createUser = ({resetForm}) => {
      axios.post('http://127.0.0.1:8000/api/create/users', form)
        .then((response) => {
            users.value.push(response.data);
            $("#createUsers").modal('hide');
            form.name = '';
            form.email = '';
            form.password = '';

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
      schema
    };
  },
  components: {
    Field,
    Form,
  },
};
</script>
