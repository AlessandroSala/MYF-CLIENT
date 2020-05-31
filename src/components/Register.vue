<template>
    <v-card flat>
        <v-card-text>
            <v-form v-model="valid">
                <v-text-field label="Email" type="email" v-model="email" :rules="requiredRule"></v-text-field>
                <v-text-field label="Password" type="password" v-model="password" :rules="requiredRule"></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="register" color="primary" :disabled="!valid">
                Register
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
    data: function() {
        return {
            email: null,
            password: null,
            valid: false,
            requiredRule: [
                v => !!v || 'Field required',
            ]
        }
    },
    methods: {
        async register() {
            try {
        const response = await AuthenticationService.register({
            email: this.email,
            password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        
        } catch (e){
            console.log(e)
            this.error = e.response.data.error
        }
        }
    }
    
}
</script>