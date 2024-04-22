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
                <div v-if="product" style="text-align: center;">
                    <h1>{{ product.name }}</h1>
                    <p>
                        <b>Marca:</b> {{ product.brand_name }} <br />
                        <b>Modelo:</b> {{ product.model_name }} <br />
                    </p>
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