<template>
    <div class="form auth-boxed">
        <div class="form-container outer">
            <div class="form-form">
                <div class="form-form-wrap">
                    <div class="form-container">
                        <div class="form-content">

                            <h1 class="">Login</h1>
                            <div class="text-left">
                                <div class="form">

                                    <div id="username-field" class="mb-3 field-wrapper input">
                                        <label for="username">Email</label>

                                        <b-input v-model="form.email" placeholder="seu email"></b-input>
                                    </div>

                                    <div id="password-field" class="field-wrapper input mb-2">
                                        <div class="d-flex justify-content-between">
                                            <label for="password">Senha</label>

                                        </div>

                                        <b-input v-model="form.senha" :type="pwd_type" placeholder="Senha"></b-input>

                                    </div>
                                    <div class="d-sm-flex justify-content-between">
                                        <div class="field-wrapper">
                                            <b-button @click="login" type="submit" variant="primary" value="">Login</b-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/assets/sass/authentication/auth-boxed.scss';
    export default {
        metaInfo: { title: 'Login' },
        data() {
            return { 

                form:{
                    email: "teste@email.com",
                    senha: "121545478"
                },

                pwd_type: 'password' 
            }
        },
        mounted() {
        },
        methods: {
            set_pwd_type() {
                if (this.pwd_type == 'password') { this.pwd_type = 'text'; } else { this.pwd_type = 'password'; }
            },

            login(){
                this.$router.push({ name: 'Products' });

            }

        }
    };
</script>
