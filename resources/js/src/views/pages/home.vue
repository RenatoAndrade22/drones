<template>
    <div class="content-home" style="background: url('/images/home/FUNDO_1.jpg');">
        
             
<div class="logo-home">
            <img src="/images/home/LOGO_BOLSONARO.png" alt="">
        </div>
        <div class="content-form">
            <div class="form-drone">

                <template v-if="!product">
                    <h5>Buscar Drone</h5>
                    <div class="field-wrapper input">
                         <input type="text" v-model="serial_number" placeholder="número de série" class="form-control">
                         <div class="field-wrapper mt-3">
                            <button @click="search" type="submit" class="btn btn-primary">Buscar</button>
                        </div>
                    </div>
                </template>

                <template v-if="product">
                    <div style="text-align: center;">
                        <p @click="product = null" style="cursor: pointer;">Buscar outro</p>
                        <h4 v-if="this.product">{{ this.product.name }}</h4>
                        <button @click="downloadPdf" type="submit" class="btn btn-primary">Baixar PDF</button>
                    </div>
                    
                </template>
                
            </div>
        </div>
        
        
                                <!--
                                    
                                -->
        <VueHtml2pdf
                                :show-layout="false"
                                :float-layout="true"
                                :enable-download="true"
                                :preview-modal="true"
                                :paginate-elements-by-height="1400"
                                filename="myPDF"
                                :pdf-quality="2"
                                :manual-pagination="false"
                                pdf-format="a4"
                                pdf-orientation="landscape"
                                pdf-content-width="100%"
                                ref="html2Pdf"
        >
            <section slot="pdf-content">
                <div v-if="product" style="background: #000;" >
                    <div class="row mt-5">
                        <div class="col-xl-6 col-lg-6 col-sm-6 layout-spacing">
                            <div class="m-5">
                                
                                <img src="/images/home/LOGO_BOLSONARO.png" style="width: 444px;" alt="">

                                <h1 class="mt-3" style="font-size: 35px !important; color: #fff;">{{ product.name }}</h1>
                                <p style="color: #fff;">
                                    <b>Marca:</b> {{ product.brand_name }} <br />
                                    <b>Modelo:</b> {{ product.model_name }} <br />
                                    <b>Lote:</b> {{ product.model.lot }} <br />
                                    <b>Data de garantia:</b> {{ product.warranty_date_format }} <br />
                                </p>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-sm-6 layout-spacing">
                            <div class="mt-5">
                                <img src="@/assets/images/drone.webp" alt="" style="width: 150%;">
                            </div>
                        </div>
                    </div>
                    
                </div>
            
                    </section>
        </VueHtml2pdf> 
              
            
    </div>
</template>
<script>
    import axios from 'axios';
    import VueHtml2pdf from 'vue-html2pdf';

    export default {
        metaInfo: { title: 'Home' },
        components: {
            VueHtml2pdf
        },
        data() {
            return {
                serial_number: null,
                error: false,
                product: null
            }
        },

        mounted() {
            let serial_number = this.$route.params.pathMatch
            if(serial_number){
                this.serial_number = serial_number
                this.search()
            }
        },

        methods:{
            search(){
                this.error = false
                if(this.serial_number){
                    axios.get('/api/search-seral-number/'+this.serial_number)
                    .then(response => {

                        if(response.data.data){
                            this.product = response.data.data
                            console.log('aq', this.product)
                        }

                    })
                    .catch(error => {
                        // Lidar com erros aqui
                        console.error(error);
                    });
                }
            },

            downloadPdf(){
                this.$refs.html2Pdf.generatePdf()
            }
        }
    }
</script>
<style>
.content-home{
    width: 100%;
    height: 100vh;
}

.logo-home{
    width: 100%;
    float: left;
    text-align: center;
}

.logo-home img{
    width: 600px;
    position: relative;
    margin-top: 105px;
}

.content-form{
    width: 100%;
    float: left;
    margin-top: 44px;
}

.form-drone{
    width: 600px;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    background-color: #ffffff;
    border-radius: 20px;
}
</style>