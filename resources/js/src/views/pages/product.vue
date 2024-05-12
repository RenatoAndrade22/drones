<template>
    <div class="layout-px-spacing">

        <div class="row layout-top-spacing">

            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel br-6 p-0">
                    <div class="custom-table">
                        <div class="table-header">

                            <b-button @click="newItem" variant="primary" class="mb-2 mr-2">+ Novo</b-button>

                            <b-modal :hide-footer="true" id="exampleModalCenter" :title="in_edit ? 'Editar drone' : 'Cadastrar drone'" centered>
                                
                                <b-form class="simple-example" novalidate @submit.stop.prevent="record">
                                        <b-form-row>
                                            <div class="col-md-12 mb-4">
                                                <label for="fullName">Nome do drone</label>
                                                <b-input id="fullName" v-model="form.name" placeholder="" :class="[submit_form ? (form.name ? 'is-valid' : 'is-invalid') : '']"></b-input>
                                                
                                                <b-form-invalid-feedback :class="{'d-block' : submit_form && !form.name}">Informe o nome do drone</b-form-invalid-feedback>
                                            </div>
                                            
                                        </b-form-row>

                                        <b-form-row>
                                            <div class="col-md-6 mb-4">
                                                <label for="fullName">Modelo</label>

                                                <multiselect 
                                                    :class="[submit_form ? (form.model ? 'is-valid' : 'is-invalid') : '']" 
                                                    v-model="form.model" 
                                                    :options="models" 
                                                    :searchable="true" 
                                                    placeholder="Selecione a marca" 
                                                    selected-label="name" 
                                                    select-label="name" 
                                                    label="name"
                                                ></multiselect>
                                                
                                                <b-form-invalid-feedback :class="{'d-block' : submit_form && !form.model}">Informe a marca</b-form-invalid-feedback>
                                            </div>
                                            <div class="col-md-6 mb-4">
                                                <label for="fullName">Data da garantia</label>
                                                <b-input id="fullName" v-mask="'##/##/####'" placeholder="__/__/____" v-model="form.warranty_date" :class="[submit_form ? (form.warranty_date ? 'is-valid' : 'is-invalid') : '']"></b-input>
                                                
                                                <b-form-invalid-feedback :class="{'d-block' : submit_form && !form.warranty_date}">Informe a garantia do drone</b-form-invalid-feedback>
                                            </div>

                                            <div class="col-md-12 mb-4">
                                                <label for="description">Descrição</label>
                                                <b-textarea v-model="form.description" placeholder="Descrição" rows="3"></b-textarea>
                                            </div>
                                        </b-form-row>

                                        

                                        <b-form-row>
                                            <div class="col-md-12 mb-4">
                                                <label for="fullName">Fotos</label>
                                                <div class="invoice-detail-title">
                                                    <div class="invoice-logo">
                                                        <div class="upload pr-md-4">

                                                            <!-- Imagens já cadastradas -->
                                                            <div v-if="form.images.length > 0" class="lista-fotos mb-4">
                                                                <div v-for="(file, index) in form.images" :key="index" class="img-preview">
                                                                    <span @click="deleteImageS3(file.id, index)" style="color:red;">x</span>
                                                                    <img :src="file.url" alt="profile" class="img-thumbnail" />
                                                                </div>
                                                            </div>

                                                            <!-- Adicionado 'multiple' e alterado ref para 'fl_profiles' -->
                                                            <input ref="fl_profiles" type="file" class="d-none" accept="image/*" multiple @change="changeFiles" />
                                                            <!-- Imagens para upload -->
                                                            <div v-if="selected_files.length > 0" class="lista-fotos mb-4">
                                                                <div v-for="(file, index) in selected_files" :key="index" class="img-preview">
                                                                    <span @click="deleteImage(index)" style="color:red;">x</span>
                                                                    <img :src="file" alt="profile" class="img-thumbnail" />
                                                                </div>
                                                            </div>

                                                            
                                                            <div class="profile-preview upload-preview" @click="$refs.fl_profiles.click()">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload-cloud">
                                                                        <polyline points="16 16 12 12 8 16"></polyline>
                                                                        <line x1="12" y1="12" x2="12" y2="21"></line>
                                                                        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                                                        <polyline points="16 16 12 12 8 16"></polyline>
                                                                    </svg>
                                                                </div>
                                                                <div class="mt-2">Clique para fazer upload das fotos.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-form-row>
                                        
                                    
                                        
                                        <b-button :disabled="loadding" type="submit" variant="primary" class="mt-2">
                                            <span v-if="in_edit">Atualizar</span>
                                            <span v-if="!in_edit">Cadastrar</span>
                                        </b-button>
                                        <span v-if="form_error" style="color:red;">Erro ao registrar.</span>
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

                        <b-table v-if="items.length > 0" emptyText="Nenhum modelo encontrado." ref="basic_table" responsive hover :items="items" :fields="columns" :per-page="table_option.page_size" :current-page="table_option.current_page" :filter="table_option.search_text"
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
    import Vue from 'vue';
    import VueMask from 'v-mask';
    Vue.use(VueMask);
    import axios from 'axios';
    import Multiselect from 'vue-multiselect'
    import 'vue-multiselect/dist/vue-multiselect.min.css';

    import '@/assets/sass/tables/table-basic.scss';

    export default {
        metaInfo: { title: 'Produtos' },
        components: {
            Multiselect
        },
        data() {
            return {
                items: [], columns: [], items_api: [],
                form: this.resetForm(),
                submit_form: false,
                in_edit: false,
                loadding: false,
                table_option: { total_rows: 0, current_page: 1, page_size: 10, search_text: '' },
                meta: {},
                models: [],
                form_error: false,
                selected_file: null,
                selected_files: [],
                actual_files: []  
            }
        },
        watch: {
            table_option: {
                handler: function () { this.get_meta(); },
                deep: true
            },
        },
        mounted() {
            
            this.getProducts()
        },
        created(){
            this.getModels()
            
        },

        methods: {

            deleteImage(index){
                this.selected_files.splice(index, 1)
                this.actual_files.splice(index, 1)
            },

            deleteImageS3(id, index){
                axios.post('/api/produto-image-delete/'+id)
                .then(response => {
                    this.form.images.splice(index, 1)
                })
            },

            changeFiles(event) {
                const files = Array.from(event.target.files);
                let filesUrl = files.map(file => {
                    return URL.createObjectURL(file);
                });

                if(this.selected_files.length == 0){
                    this.selected_files = filesUrl 
                }else{
                    this.selected_files.push(filesUrl) 
                }

                this.actual_files = files
            },

            resetForm(){

                this.selected_files = []
                this.actual_files = []  

                return {
                    name: null,
                    description: '',
                    serial_number: null,
                    serial_number_token: null,
                    model_id: null,
                    model: null,
                    warranty_date: null,
                    images: []
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
                this.form.warranty_date = this.form.warranty_date_format                
            },

            record(){
                
                this.submit_form = true
                this.loadding = true

                if(this.validation()){
                    
                    this.form.model_id = this.form.model.id

                    let formData = new FormData();

                    // Adicionar todos os campos do formulário existente ao FormData
                    for (const key in this.form) {
                        if (this.form.hasOwnProperty(key)) {
                            formData.append(key, this.form[key]);
                        }
                    }
                        
                    // Adicionar as imagens ao FormData
                    this.actual_files.forEach((file, index) => {
                        formData.append('files[]', file);
                    })

                    if(this.in_edit){

                        axios.post('/api/produto-update/'+this.form.id, formData,{
                            headers: {
                                'Content-Type': 'multipart/form-data'
                                }
                            })
                        .then(response => {
                            this.form = this.resetForm()
                            this.getProducts()
                            this.$bvModal.hide('exampleModalCenter')
                            this.submit_form = false
                            this.is_edit = false
                            this.loadding = false

                        })
                        .catch(error => {
                            // Lidar com erros aqui
                            this.loadding = false
                            this.submit_form = false
                            this.form_error = false
                        });

                    }else{

                        axios.post('/api/produto', formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                                }
                            }
                        )
                        .then(response => {
                            this.form = this.resetForm()
                            this.getProducts()
                            this.$bvModal.hide('exampleModalCenter')
                            this.submit_form = false
                            this.form_error = false
                            this.loadding = false

                        })
                        .catch(error => {
                            // Lidar com erros aqui
                            this.loadding = false
                            this.submit_form = false
                            this.form_error = true
                        });
                        
                    }
                    
                }else{
                    this.loadding = false
                }
            },

            validation(){
                
                let i = true

                if(!this.form.name)
                    i = false
                
                if(!this.form.model)
                    i = false

                if(!this.form.warranty_date)
                    i = false
                    
                return i
            },

         

            getProducts(){
            
                axios.get('/api/produto')
                .then(response => {
                    // Manipular a resposta aqui
                    this.items = response.data.data;
                    this.bind_data()
                })
                .catch(error => {
                    // Lidar com erros aqui
                    console.error(error);
                });
            },

            getModels(){
            
                axios.get('/api/modelo')
                .then(response => {
                    this.models = response.data.data;
                })
                .catch(error => {
                    // Lidar com erros aqui
                    console.error(error);
                });
            },

            bind_data() {
                this.columns = [
                    { key: 'name', label: 'Nome' },
                    { key: 'brand_name', label: 'Marca' },
                    { key: 'model_name', label: 'Modelo' },
                    { key: 'warranty_date_format', label: 'Garantia' },
                    { key: 'action', label: 'Ações', class: 'actions text-center' }
                ];
        

                this.table_option.total_rows = this.items.length;
                this.get_meta();
            },
            on_filtered(filtered_items) {
                this.refresh_table(filtered_items.length);
            },
            delete_row(item) {
                if (confirm('Deseja excluir o drone '+item.name+'?')) {

                    axios.delete('/api/produto/'+item.id)
                    .then(response => {
                        this.items = this.items.filter(d => d.id != item.id);
                        this.refresh_table(this.items.length);
                    })
                    .catch(error => {
                        
                        this.$swal({
                            title: 'Erro ao excluir drone.',
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

<style>
    .lista-fotos{
        width: 100%;
        float: left
    }
    .upload-preview{
        width: 100%;
        float: left
    }
    .img-preview{
        float: left;
        width: 120px;
        margin-right: 15px;
    }
    .img-preview span{
        cursor: pointer;
    }
</style>