<template>
    <form>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">@</span>
            </div>
            <input v-model="username" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
        </div>

        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text" id="">First and last name</span>
            </div>
            <input v-model="firstName" type="text" class="form-control">
            <input v-model="lastName" type="text" class="form-control">
        </div>

        <div class="form-group">
            <label>Email</label>
            <input v-model="email" type="email" formControlName="email" class="form-control"/>
        </div>

        <div class="form-group">
            <label>Password</label>
            <input v-model="password" type="password" formControlName="password" class="form-control"/>
        </div>

        <label>Country of residence</label>
        <select v-model="countryOfResidence"  name="countryOfResidence" formControlName="countryOfResidence" class="form-control">
            <option value="">Japan</option>
            <option value="">UK</option>
            <option value="">US</option>
            <option value="">Europe</option>
        </select>

        <input v-on:click="registerUser" type="button" value="Register" class="btn btn-primary"/>
    </form>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'user-registration-form',
        data: () => {
            return {
                username: '',
                password: '',
                firstName: '',
                middleName: '',
                lastName: '',
                countryOfResidence: '',
                email: ''
            }
        },
        methods: {
            registerUser: function () {
                axios.post('http://localhost:9001/api/v1/auth/register',
                    {
                        username: this.username,
                        password: this.password,
                        firstName: this.firstName,
                        middleName: this.middleName,
                        lastName: this.lastName,
                        countryOfResidence: this.countryOfResidence,
                        email: this.email
                    })
                    .then(result => {
                        console.log(result)
                    })
                    .catch(error => {
                        console.error(error)
                    })
            }
        }
    }
</script>

<style scoped>

</style>