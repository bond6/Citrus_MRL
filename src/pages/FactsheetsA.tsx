import React from 'react';
import { IonBackButton,IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonSlides,IonSlide  } from '@ionic/react';



import './FactsheetsA.css';
const FactsheetsA: React.FC = () => {
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
            <IonTitle size="large">Factsheets Afrikaans</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonSlides>
          <IonSlide>
                <img alt="Factsheet" src="/assets/img/facts/ICA1Afr.jpg" />
          </IonSlide>
          <IonSlide>
                <img alt="Factsheet" src="/assets/img/facts/ICA2EngAfr.jpg" />
          </IonSlide>
          <IonSlide>
                <img alt="Factsheet" src="/assets/img/facts/ICA4EngAfr.jpg" />
          </IonSlide>
          <IonSlide>
                <img alt="Factsheet" src="/assets/img/facts/ICA5EngAfr.jpg" />
          </IonSlide>
          <IonSlide>
                <img alt="Factsheet" src="/assets/img/facts/ICA6EngAfr.jpg" />
          </IonSlide>
          </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default FactsheetsA;
