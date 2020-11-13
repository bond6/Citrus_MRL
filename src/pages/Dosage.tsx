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
                  <IonCol class="col" size="3"> Product</IonCol>
                  <IonCol class="col" className="ion-align-self-center" size="6" >Dosage in 100 <span>&#8467;</span></IonCol>
               </IonRow>
               <IonRow class="headrow">
                  <IonCol class="col" size="3"></IonCol>
                  <IonCol class="col" size="3">Water Application</IonCol>
                  <IonCol class="col" size="3">Wax Application</IonCol>
               </IonRow>
               <IonRow class='row0'>
                  <IonCol class="col" size="3">ImazaCure 750 SG</IonCol>
                  <IonCol class="col" size="3">67 g</IonCol>
                  <IonCol class="col" size="3">-</IonCol>
               </IonRow>
               <IonRow class='row1'>
                  <IonCol class="col" size="3">ImazaCure 500 EC</IonCol>
                  <IonCol class="col" size="3">0.2 <span>&#8467;</span> </IonCol>
                  <IonCol class="col" size="3">0.4 - 0.6 <span>&#8467;</span> </IonCol>
               </IonRow>
               <IonRow class='row0'>
                  <IonCol class="col" size="3">ImaCulate 300 EC </IonCol>
                  <IonCol class="col" size="3">-</IonCol>
                  <IonCol class="col" size="3">1 <span>&#8467;</span> </IonCol>
               </IonRow>
               <IonRow class='row1'>
                  <IonCol class="col" size="3">CitriCure</IonCol>
                  <IonCol class="col" size="3">0.48 <span>&#8467;</span> </IonCol>
                  <IonCol class="col" size="3">-</IonCol>
               </IonRow>
               <IonRow class='row0'>
                  <IonCol class="col" size="3">Propirly 270 EC</IonCol>
                  <IonCol class="col" size="3">0.5 <span>&#8467;</span> </IonCol>
                  <IonCol class="col" size="3">-</IonCol>
               </IonRow>
               <IonRow class='row1'>
                  <IonCol class="col" size="3">PropiCure 250 EC</IonCol>
                  <IonCol class="col" size="3">0.24 <span>&#8467;</span> </IonCol>
                  <IonCol class="col" size="3">0.72 <span>&#8467;</span> </IonCol>
               </IonRow>
               <IonRow class='row0'>
                  <IonCol class="col" size="3">Protector 400 SC</IonCol>
                  <IonCol class="col" size="3">0.25 <span>&#8467;</span> </IonCol>
                  <IonCol class="col" size="3">1 <span>&#8467;</span> </IonCol>
               </IonRow>
               <IonRow class='row1'>
                  <IonCol class="col" size="3">ICA Thiabendazole 500 SC</IonCol>
                  <IonCol class="col" size="3">0.2 (Drench) - 0.4 (Bath) <span>&#8467;</span> </IonCol>
                  <IonCol class="col" size="3">0.8 <span>&#8467;</span> </IonCol>
               </IonRow>
               <IonRow class='row0'>
                  <IonCol class="col" size="3">Teacher 230 SC</IonCol>
                  <IonCol class="col" size="3">0.26 <span>&#8467;</span> </IonCol>
                  <IonCol class="col" size="3">1 - 2 <span>&#8467;</span> </IonCol>
               </IonRow>
               <IonRow class='row1'>
                  <IonCol class="col" size="3">Sporekill</IonCol>
                  <IonCol class="col" size="3">0.1 - 0.15 <span>&#8467;</span>  </IonCol>
                  <IonCol class="col" size="3">-</IonCol>
               </IonRow>
               <IonRow class='row0'>
                  <IonCol class="col" size="3">HyperCide</IonCol>
                  <IonCol class="col" size="3">0.1 - 0.2 <span>&#8467;</span>   </IonCol>
                  <IonCol class="col" size="3">-</IonCol>
               </IonRow>
               <IonRow class='row1'>
                  <IonCol class="col" size="3">ICA Prochloraz 450 SC</IonCol>
                  <IonCol class="col" size="3">0.33 <span>&#8467;</span>   </IonCol>
                  <IonCol class="col" size="3">-</IonCol>
               </IonRow>
               <IonRow class='row0'>
                  <IonCol class="col" size="3">StrobiCure 250 SC</IonCol>
                  <IonCol class="col" size="3">0.45 <span>&#8467;</span>   </IonCol>
                  <IonCol class="col" size="3">-</IonCol>
               </IonRow>
               <IonRow class='row1'>
                  <IonCol class="col" size="3">EcoTizer</IonCol>
                  <IonCol class="col" size="3">2 <span>&#8467;</span>   </IonCol>
                  <IonCol class="col" size="3">-</IonCol>
               </IonRow>
               <IonRow class='row0'>
                  <IonCol class="col" size="3">Evolve 480 SC</IonCol>
                  <IonCol class="col" size="3">0.25 <span>&#8467;</span>   </IonCol>
                  <IonCol class="col" size="3">-</IonCol>
               </IonRow>
            </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dosage;
