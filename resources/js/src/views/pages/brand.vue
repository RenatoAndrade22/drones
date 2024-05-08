<template>
    <div class="layout-px-spacing">

        <div class="row layout-top-spacing">

            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel br-6 p-0">
                    <div class="custom-table">
                        <div class="table-header">

                            <b-button @click="newItem" variant="primary" class="mb-2 mr-2">+ Novo</b-button>

                            <b-modal :hide-footer="true" id="exampleModalCenter" :title="in_edit ? 'Editar marca' : 'Cadastrar marca'" centered>
                                
                                <b-form class="simple-example" novalidate @submit.stop.prevent="record">
                                        <b-form-row>
                                            <div class="col-md-12 mb-4">
                                                <label for="fullName">Nome da marca</label>
                                                <b-input id="fullName" v-model="form.name" placeholder="" :class="[submit_form ? (form.name ? 'is-valid' : 'is-invalid') : '']"></b-input>
                                                
                                                <b-form-invalid-feedback :class="{'d-block' : submit_form && !form.name}">Informe o nome da marca</b-form-invalid-feedback>
                                            </div>
                                        </b-form-row>
                                        <b-button :disabled="loadding" type="submit" variant="primary" class="mt-2">
                                            <span v-if="in_edit">Atualizar</span>
                                            <span v-if="!in_edit">Cadastrar</span>
                                        </b-button>
                                </b-form>
                                
                            </b-modal>

                            <div class="d-flex align-items-center">
                                
                            </div>
                            <div class="header-search">
                                <b-input v-model="table_option.search_text" size="sm" placeholder="Buscar..." />
                                <div class="search-image">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </div>
                            </div>
                        </div>

                        <b-table emptyText="Nenhuma marca encontrada." ref="basic_table" responsive hover :items="items" :fields="columns" :per-page="table_option.page_size" :current-page="table_option.current_page" :filter="table_option.search_text"
                                :show-empty="true" @filtered="on_filtered">
                            <template #cell(salary)="row">
                                ${{row.item.salary}}
                            </template>
                            <template #cell(action)="row">
                              
                                <ul class="table-controls">
                                    <li>
                                        <a @click="editItem(row.item)" href="javascript:void(0);" v-b-tooltip title="Editar"
                                            ><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-edit-2"
                                            >
                                                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg
                                        ></a>
                                    </li>
                                    <li>
                                        <a @click="delete_row(row.item)" href="javascript:void(0);" v-b-tooltip title="Excluir"
                                            ><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-trash-2"
                                            >
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                                <line x1="14" y1="11" x2="14" y2="17"></line></svg
                                        ></a>
                                    </li>
                                </ul>
                                
                            </template>
                        </b-table>

                        <div class="table-footer">

                            <div class="paginating-container pagination-solid flex-column align-items-right">
                                <b-pagination v-model="table_option.current_page" :total-rows="table_option.total_rows" :per-page="table_option.page_size" prev-text="Prev" next-text="Next" first-text="First" last-text="Last" first-class="first" prev-class="prev" next-class="next" last-class="last" class="rounded">
                                    <template #first-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
                                    </template>
                                    <template #prev-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                                    </template>
                                    <template #next-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                                    </template>
                                    <template #last-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
                                    </template>
                                </b-pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import axios from 'axios';

    import '@/assets/sass/tables/table-basic.scss';

    export default {
        metaInfo: { title: 'Marcas' },
        data() {
            return {
                items: [], columns: [],
                form: this.resetForm(),
                submit_form: false,
                in_edit: false,
                loadding: false,
                table_option: { total_rows: 0, current_page: 1, page_size: 10, search_text: '' },
                meta: {},
                token: null,
            }
        },
        watch: {
            table_option: {
                handler: function () { this.get_meta(); },
                deep: true
            },
        },
        mounted() {
            
        },
        created(){
            this.getBrands();
            this.token = localStorage.getItem('auth_token');
        },

        methods: {

            resetForm(){
                return {
                    name: null,
                }
            },

            newItem(){
                this.in_edit = false
                this.$bvModal.show('exampleModalCenter')
            },

            editItem(item){
                this.in_edit = true
                this.$bvModal.show('exampleModalCenter')
                this.form = JSON.parse(JSON.stringify(item))
            },

            record(){
                this.submit_form = true
                this.loadding = true

                if(this.validation()){

                    if(this.in_edit){

                        axios.put('/api/marca/'+this.form.id, this.form,{
                                headers: {
                                    'Authorization': `Bearer ${this.token}`
                                }
                            }
                        )
                        .then(response => {
                            this.getBrands()
                            this.$bvModal.hide('exampleModalCenter')
                            this.form = this.resetForm()
                            this.submit_form = false
                            this.is_edit = false
                            this.loadding = false

                        })
                        .catch(error => {

                            if (error.response && error.response.status === 401) {
                                this.$router.push({ name: 'login' });
                            }

                            this.submit_form = false
                            this.loadding = false
                        });

                    }else{
                        this.token = localStorage.getItem('auth_token');

                        axios.post('/api/marca', this.form,{
                            headers: {
                                'Authorization': `Bearer ${this.token}`
                            }
                        })
                        .then(response => {
                            this.getBrands()
                            this.$bvModal.hide('exampleModalCenter')
                            this.form = this.resetForm()
                            this.submit_form = false
                            this.loadding = false

                        })
                        .catch(error => {
                  
                            if (error.response && error.response.status === 401) {
                                this.$router.push({ name: 'login' });
                            }

                            this.submit_form = false
                            this.loadding = false

                        });
                    }
                    
                }else{
                    this.loadding = false
                }
            },

            validation(){
                
                let i = false

                if(this.form.name)
                    i = true

                return i
            },

            getBrands(){

                axios.get('/api/marca',{
                        headers: {
                            'Authorization': `Bearer ${this.token}`
                        }
                    }
                )
                .then(response => {
                    // Manipular a resposta aqui
                    console.log(response.data.data);
                    this.items = response.data.data;
                    this.bind_data();
                })
                .catch(error => {

                    if (error.response && error.response.status === 401) {
                        this.$router.push({ name: 'login' });
                    }
                    
                });
            },
            bind_data() {
                this.columns = [
                    { key: 'name', label: 'Nome' },
                    { key: 'action', label: 'Ações', class: 'actions text-center' }
                ];

                this.table_option.total_rows = this.items.length;
                this.get_meta();
            },
            on_filtered(filtered_items) {
                this.refresh_table(filtered_items.length);
            },
            delete_row(item) {
                if (confirm('Deseja excluir a marca '+item.name+'?')) {

                    axios.delete('/api/marca/'+item.id)
                    .then(response => {
                        this.items = this.items.filter(d => d.id != item.id);
                        this.refresh_table(this.items.length);
                    })
                    .catch(error => {
                        if (error.response && error.response.status === 401) {
                            this.$router.push({ name: 'login' });
                        }
                        this.$swal({
                            title: 'Erro ao excluir marca. Excluir modelos cadastrados para essa marca.',
                            padding: '2em'
                        });
                    });
                }
            },
            refresh_table(total) {
                this.table_option.total_rows = total;
                this.table_option.currentPage = 1;
            },
            get_meta() {
                var startPage; var endPage;
                var totalPages = this.table_option.page_size < 1 ? 1 : Math.ceil(this.table_option.total_rows / this.table_option.page_size);
                totalPages = Math.max(totalPages || 0, 1);

                var maxSize = 5;
                var isMaxSized = typeof maxSize !== 'undefined' && maxSize < totalPages;
                if (isMaxSized) {
                    startPage = Math.max(this.table_option.current_page - Math.floor(maxSize / 2), 1);
                    endPage = startPage + maxSize - 1;

                    if (endPage > totalPages) { endPage = totalPages; startPage = endPage - maxSize + 1; }
                }
                else { startPage = 1; endPage = totalPages; }
                let startIndex = (this.table_option.current_page - 1) * this.table_option.page_size;
                let endIndex = Math.min(startIndex + this.table_option.page_size - 1, this.table_option.total_rows - 1);

                var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
                this.meta = {
                    total_items: this.table_option.total_rows,
                    current_page: this.table_option.current_page,
                    page_size: this.table_option.page_size,
                    total_pages: totalPages,
                    start_page: startPage,
                    end_page: endPage,
                    start_index: startIndex,
                    end_index: endIndex,
                    pages: pages
                };
            }
        }
    };
</script>
