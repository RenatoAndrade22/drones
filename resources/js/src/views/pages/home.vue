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
        
        
        
        <VueHtml2pdf
            :show-layout="false"
            :float-layout="true"
            :enable-download="true"
            :preview-modal="true"
            :paginate-elements-by-height="1100"
            filename="myPDF"
            :pdf-quality="2"
            :manual-pagination="false"
            pdf-format="a4"
            pdf-orientation="portrait"
            pdf-content-width="1100px"
            ref="html2Pdf"
            style="background: #000;"
        >
            <section slot="pdf-content" style="background: #000; width:1100px;">
                <div v-if="product" style="background: #000; width:1100px; float:left; background:#000;">
                    <div class=" mt-3">
                        <div class="layout-spacing"  style="width: 50%; float:left; background:#000">
                            <div class="m-4">
                                        
                                <img src="/images/home/LOGO_BOLSONARO.png" style="width: 444px;" alt="">
        
                                <h1 class="mt-4" style="font-size: 40px !important; color: #fff; margin-left:15px;">{{ product.name }}</h1>
                                <p style="color: #fff; font-size:21px; margin-left:15px;">
                                    <b>Marca:</b> {{ product.brand_name }} <br />
                                    <b>Modelo:</b> {{ product.model_name }} <br />
                                    <b>Lote:</b> {{ product.lot }} <br />
                                  
                                    <b>Data de garantia:</b> {{ product.warranty_date_format }} <br />
                                </p>
        
                                <p style="color: #fff; font-size:21px; margin-left:15px;">
                                    {{ product.description }}
                                </p>
                            </div>
                        </div>
                        <div class="layout-spacing" style="width: 50%; float:left; position:relative;" >
                            <div class="mt-5">
                                <img src="@/assets/images/drone.webp" alt="" class="bg-drone">                                        
                            </div>
                        </div>
        
                        <div class="images-drones">
                            <div
                                v-for="(p, i) in images_base" 
                                :key="i" 
                                v-if="images_base.length"
                                class="img-single-drone"
                            >
                                <img :src="p.url" alt="drone" >                                        
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
                product: {
                    brand_name: null,
                    model_name: null,
                    lot: null,
                    warranty_date_format: null,
                    description: null
                },
                images_base: []
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
                            this.product = response.data.data[0]
                            if(response.data.data[0].images_base){
                                this.images_base = response.data.data[0].images_base
                            }
                            console.log('base', this.images_base)
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
.bg-drone{
    width: 150%;
    position: absolute;
}
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

.images-drones{
    float:left;
    width: 100%;
    height: 200px;
    padding-left: 40px;
}

.images-drones .img-single-drone{
    float:left;
    width: 230px;
    height: 200px;
    margin-right: 1%;
}
.images-drones .img-single-drone img{
    float:left;
    height: 100px;
    width: 100%;
}

@media screen and (max-width: 650px) {
    .logo-home img{
        width: 330px;
    }
    .form-drone{
        width: 330px;
    }
}

</style>