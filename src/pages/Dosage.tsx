import React from 'react';
import { IonBackButton,IonButtons, IonContent,IonRow, IonCol, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid  } from '@ionic/react';



import './Dosage.css';
const Dosage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Dosage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Product application dosages as registered in RSA:</IonTitle>
          </IonToolbar>
        </IonHeader>
            <IonGrid id="table_products">
               <IonRow class="headrow">
                  <IonCol class="col"> Product</IonCol>
                   <IonCol class="col1"> </IonCol>
                  <IonCol class="col2" >Dosage in 100 <span>&#8467;</span></IonCol>
               </IonRow>
               <IonRow class="headrow">
                  <IonCol class="col"></IonCol>
                  <IonCol class="col">Water Application</IonCol>
                  <IonCol class="col">Wax Application</IonCol>
               </IonRow>
               <IonRow class='row0'>
                  <IonCol class="col">ImazaCure 750 SG</IonCol>
                  <IonCol class="col" >67 g</IonCol>
                  <IonCol class="col" >-</IonCol>
               </IonRow>
               <IonRow class='row1'>
                  <IonCol class="col">ImazaCure 500 EC</IonCol>
                  <IonCol class="col" >0.2 <span>&#8467;</span> </IonCol>
                  <IonCol class="col" >0.4 - 0.6 <span>&#8467;</span> </IonCol>
               </IonRow>
               <IonRow class='row0'>
                  <IonCol class="col">ImaCulate 300 EC </IonCol>
                  <IonCol class="col" >-</IonCol>
                  <IonCol class="col" >1 <span>&#8467;</span> </IonCol>
               </IonRow>
               <IonRow class='row1'>
                  <IonCol class="col">CitriCure</IonCol>
                  <IonCol class="col" >0.48 <span>&#8467;</span> </IonCol>
                  <IonCol class="col" >-</IonCol>
               </IonRow>
               <IonRow class='row0'>
                  <IonCol class="col">Propirly 270 EC</IonCol>
                  <IonCol class="col" >0.5 <span>&#8467;</span> </IonCol>
                  <IonCol class="col" >-</IonCol>
               </IonRow>
               <IonRow class='row1'>
                  <IonCol class="col">PropiCure 250 EC</IonCol>
                  <IonCol class="col" >0.24 <span>&#8467;</span> </IonCol>
                  <IonCol class="col" >0.72 <span>&#8467;</span> </IonCol>
               </IonRow>
               <IonRow class='row0'>
                  <IonCol class="col">Protector 400 SC</IonCol>
                  <IonCol class="col" >0.25 <span>&#8467;</span> </IonCol>
                  <IonCol class="col" >1 <span>&#8467;</span> </IonCol>
               </IonRow>
               <IonRow class='row1'>
                  <IonCol class="col">ICA Thiabendazole 500 SC</IonCol>
                  <IonCol class="col" >0.2 (Drench) - 0.4 (Bath) <span>&#8467;</span> </IonCol>
                  <IonCol class="col" >0.8 <span>&#8467;</span> </IonCol>
               </IonRow>
               <IonRow class='row0'>
                  <IonCol class="col">Teacher 230 SC</IonCol>
                  <IonCol class="col" >0.26 <span>&#8467;</span> </IonCol>
                  <IonCol class="col" >1 - 2 <span>&#8467;</span> </IonCol>
               </IonRow>
               <IonRow class='row1'>
                  <IonCol class="col">Sporekill</IonCol>
                  <IonCol class="col" >0.1 - 0.15 <span>&#8467;</span>  </IonCol>
                  <IonCol class="col" >-</IonCol>
               </IonRow>
               <IonRow class='row0'>
                  <IonCol class="col">HyperCide</IonCol>
                  <IonCol class="col" >0.1 - 0.2 <span>&#8467;</span>   </IonCol>
                  <IonCol class="col" >-</IonCol>
               </IonRow>
               <IonRow class='row1'>
                  <IonCol class="col">ICA Prochloraz 450 SC</IonCol>
                  <IonCol class="col" >0.33 <span>&#8467;</span>   </IonCol>
                  <IonCol class="col" >-</IonCol>
               </IonRow>
               <IonRow class='row0'>
                  <IonCol class="col">StrobiCure 250 SC</IonCol>
                  <IonCol class="col" >0.45 <span>&#8467;</span>   </IonCol>
                  <IonCol class="col" >-</IonCol>
               </IonRow>
               <IonRow class='row1'>
                  <IonCol class="col">EcoTizer</IonCol>
                  <IonCol class="col" >2 <span>&#8467;</span>   </IonCol>
                  <IonCol class="col" >-</IonCol>
               </IonRow>
               <IonRow class='row0'>
                  <IonCol class="col">Evolve 480 SC</IonCol>
                  <IonCol class="col" >0.25 <span>&#8467;</span>   </IonCol>
                  <IonCol class="col" >-</IonCol>
               </IonRow>
            </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dosage;
