import React from 'react';
import { IonBackButton,IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonSlides,IonSlide} from '@ionic/react';



import './Label.css';

const slideOpts = {
    effect: 'cube',initialSlide: 0,
    speed: 400
  
  };
const Label: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Label</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Label</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
                <img alt="Label" src="/assets/img/labels/CitruCure1.jpg" />
          </IonSlide>
          <IonSlide>
                <img alt="Label" src="/assets/img/labels/EcoTizerECO001.jpg" />
          </IonSlide>
          <IonSlide>
                <img alt="Label" src="/assets/img/labels/Evolve480SC.jpg" />
          </IonSlide>
          <IonSlide>
                <img alt="Label" src="/assets/img/labels/Hypercide1.jpg" />
          </IonSlide>
          <IonSlide>
                <img alt="Label" src="/assets/img/labels/Imaculate300EC1.jpg" />
          </IonSlide>
          <IonSlide>
            
                <img alt="Label" src="/assets/img/labels/ImazaCure500EC1.jpg" />
          </IonSlide>
          
          <IonSlide>
                <img alt="Label" src="/assets/img/labels/ImazaCure750EC1.jpg" />
          </IonSlide>
         <IonSlide>
                <img alt="Label" src="/assets/img/labels/PropiCureLabel1.jpg" />
          </IonSlide>
          
          <IonSlide>
                <img alt="Label" src="/assets/img/labels/PropirlyLabel1.jpg" />
          </IonSlide>
          
          <IonSlide>
                <img alt="Label" src="/assets/img/labels/Protector400SC1.jpg" />
          </IonSlide>
          
          <IonSlide>
                <img alt="Label" src="/assets/img/labels/Sporekill1.jpg" />
          </IonSlide>
          
          <IonSlide>
                <img alt="Label" src="/assets/img/labels/StrobiCure.jpg" />
          </IonSlide>
          
          <IonSlide>
                <img alt="Label" src="/assets/img/labels/TEACHER1.jpg" />
          </IonSlide>
          
          <IonSlide>
                <img alt="Label" src="/assets/img/labels/Thiabendazole500SC1.jpg" />
          </IonSlide>
    </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Label;
