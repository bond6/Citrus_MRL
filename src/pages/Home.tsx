import React, { useState } from 'react';
import { IonListHeader, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonRadio, IonCheckbox, IonList, IonItem, IonLabel,IonButton, IonRadioGroup, IonSearchbar, IonAlert  } from '@ionic/react';

import './Home.css';
const sub_country = {"Codex A": ["Angola", "Benin", "Botswana", "Congo", "Gabon", "Kenya", "Madagascar", "Mali", "Mauritius", "Mauritania", "Namibia", "Senegal", "Seychelles", "Reunion", "Sudan", "Tanzania", "Malaysia", "Philippines", "Singapore", "Vietnam"]}; 


  const your_collection = [{"country":"Canada","fruit":"Grapefruit","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Canada","fruit":"Grapefruit","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Canada","fruit":"Grapefruit","active":"Guazatine","mrl":"N","product":["CitriCure","Guazalil SL"]},{"country":"Canada","fruit":"Grapefruit","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Canada","fruit":"Grapefruit","active":"Prochloraz","mrl":"N","product":["ICA-Prochloraz 450 EC"]},{"country":"Canada","fruit":"Grapefruit","active":"Propiconazole","mrl":"8","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Canada","fruit":"Grapefruit","active":"Pyrimethanil","mrl":"10","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Canada","fruit":"Grapefruit","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"Canada","fruit":"Grapefruit","active":"TBZ","mrl":"10","product":["ICA Thiabendazole 500 SC"]},{"country":"Codex A","fruit":"Grapefruit","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Codex A","fruit":"Grapefruit","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Codex A","fruit":"Grapefruit","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Codex A","fruit":"Grapefruit","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Codex A","fruit":"Grapefruit","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"Codex A","fruit":"Grapefruit","active":"Propiconazole","mrl":"4","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Codex A","fruit":"Grapefruit","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Codex A","fruit":"Grapefruit","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"Codex A","fruit":"Grapefruit","active":"TBZ","mrl":"7","product":["ICA Thiabendazole 500 SC"]},{"country":"China","fruit":"Grapefruit","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"China","fruit":"Grapefruit","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"China","fruit":"Grapefruit","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"China","fruit":"Grapefruit","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"China","fruit":"Grapefruit","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"China","fruit":"Grapefruit","active":"Propiconazole","mrl":"4","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"China","fruit":"Grapefruit","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"China","fruit":"Grapefruit","active":"Azoxystrobin","mrl":"N","product":["StrobiCure","Evolve 480 SC"]},{"country":"China","fruit":"Grapefruit","active":"TBZ","mrl":"7","product":["ICA Thiabendazole 500 SC"]},{"country":"EU","fruit":"Grapefruit","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"EU","fruit":"Grapefruit","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"EU","fruit":"Grapefruit","active":"Guazatine","mrl":"N","product":["CitriCure","Guazalil SL"]},{"country":"EU","fruit":"Grapefruit","active":"Imazalil","mrl":"4","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"EU","fruit":"Grapefruit","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"EU","fruit":"Grapefruit","active":"Propiconazole","mrl":"5","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"EU","fruit":"Grapefruit","active":"Pyrimethanil","mrl":"8","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"EU","fruit":"Grapefruit","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"EU","fruit":"Grapefruit","active":"TBZ","mrl":"7","product":["ICA Thiabendazole 500 SC"]},{"country":"Russia","fruit":"Grapefruit","active":"DDAC","mrl":"6","product":["Sporekill"]},{"country":"Russia","fruit":"Grapefruit","active":"Fludioxonil","mrl":"7","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Russia","fruit":"Grapefruit","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Russia","fruit":"Grapefruit","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Russia","fruit":"Grapefruit","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"Russia","fruit":"Grapefruit","active":"Propiconazole","mrl":"6","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Russia","fruit":"Grapefruit","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Russia","fruit":"Grapefruit","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"Russia","fruit":"Grapefruit","active":"TBZ","mrl":"5","product":["ICA Thiabendazole 500 SC"]},{"country":"Hong Kong","fruit":"Grapefruit","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Hong Kong","fruit":"Grapefruit","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Hong Kong","fruit":"Grapefruit","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Hong Kong","fruit":"Grapefruit","active":"Imazalil","mrl":"10","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Hong Kong","fruit":"Grapefruit","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"Hong Kong","fruit":"Grapefruit","active":"Propiconazole","mrl":"N","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Hong Kong","fruit":"Grapefruit","active":"Pyrimethanil","mrl":"10","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Hong Kong","fruit":"Grapefruit","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"Hong Kong","fruit":"Grapefruit","active":"TBZ","mrl":"10","product":["ICA Thiabendazole 500 SC"]},{"country":"Japan","fruit":"Grapefruit","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Japan","fruit":"Grapefruit","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Japan","fruit":"Grapefruit","active":"Guazatine","mrl":"N","product":["CitriCure","Guazalil SL"]},{"country":"Japan","fruit":"Grapefruit","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Japan","fruit":"Grapefruit","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"Japan","fruit":"Grapefruit","active":"Propiconazole","mrl":"8","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Japan","fruit":"Grapefruit","active":"Pyrimethanil","mrl":"10","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Japan","fruit":"Grapefruit","active":"Azoxystrobin","mrl":"10","product":["StrobiCure","Evolve 480 SC"]},{"country":"Japan","fruit":"Grapefruit","active":"TBZ","mrl":"10","product":["ICA Thiabendazole 500 SC"]},{"country":"Korea","fruit":"Grapefruit","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Korea","fruit":"Grapefruit","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Korea","fruit":"Grapefruit","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Korea","fruit":"Grapefruit","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Korea","fruit":"Grapefruit","active":"Prochloraz","mrl":"N","product":["ICA-Prochloraz 450 EC"]},{"country":"Korea","fruit":"Grapefruit","active":"Propiconazole","mrl":"8","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Korea","fruit":"Grapefruit","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Korea","fruit":"Grapefruit","active":"Azoxystrobin","mrl":"10","product":["StrobiCure","Evolve 480 SC"]},{"country":"Korea","fruit":"Grapefruit","active":"TBZ","mrl":"7","product":["ICA Thiabendazole 500 SC"]},{"country":"RSA","fruit":"Grapefruit","active":"DDAC","mrl":"6","product":["Sporekill"]},{"country":"RSA","fruit":"Grapefruit","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"RSA","fruit":"Grapefruit","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"RSA","fruit":"Grapefruit","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"RSA","fruit":"Grapefruit","active":"Prochloraz","mrl":"2","product":["ICA-Prochloraz 450 EC"]},{"country":"RSA","fruit":"Grapefruit","active":"Propiconazole","mrl":"6","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"RSA","fruit":"Grapefruit","active":"Pyrimethanil","mrl":"10","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"RSA","fruit":"Grapefruit","active":"Azoxystrobin","mrl":"10","product":["StrobiCure","Evolve 480 SC"]},{"country":"RSA","fruit":"Grapefruit","active":"TBZ","mrl":"6","product":["ICA Thiabendazole 500 SC"]},{"country":"Taiwan","fruit":"Grapefruit","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Taiwan","fruit":"Grapefruit","active":"Fludioxonil","mrl":"5","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Taiwan","fruit":"Grapefruit","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Taiwan","fruit":"Grapefruit","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Taiwan","fruit":"Grapefruit","active":"Prochloraz","mrl":"N","product":["ICA-Prochloraz 450 EC"]},{"country":"Taiwan","fruit":"Grapefruit","active":"Propiconazole","mrl":"4","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Taiwan","fruit":"Grapefruit","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Taiwan","fruit":"Grapefruit","active":"Azoxystrobin","mrl":"10","product":["StrobiCure","Evolve 480 SC"]},{"country":"Taiwan","fruit":"Grapefruit","active":"TBZ","mrl":"10","product":["ICA Thiabendazole 500 SC"]},{"country":"USA","fruit":"Grapefruit","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"USA","fruit":"Grapefruit","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"USA","fruit":"Grapefruit","active":"Guazatine","mrl":"N","product":["CitriCure","Guazalil SL"]},{"country":"USA","fruit":"Grapefruit","active":"Imazalil","mrl":"10","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"USA","fruit":"Grapefruit","active":"Prochloraz","mrl":"N","product":["ICA-Prochloraz 450 EC"]},{"country":"USA","fruit":"Grapefruit","active":"Propiconazole","mrl":"8","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"USA","fruit":"Grapefruit","active":"Pyrimethanil","mrl":"10","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"USA","fruit":"Grapefruit","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"USA","fruit":"Grapefruit","active":"TBZ","mrl":"10","product":["ICA Thiabendazole 500 SC"]},{"country":"Indonesia","fruit":"Grapefruit","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Indonesia","fruit":"Grapefruit","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Indonesia","fruit":"Grapefruit","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Indonesia","fruit":"Grapefruit","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Indonesia","fruit":"Grapefruit","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"Indonesia","fruit":"Grapefruit","active":"Propiconazole","mrl":"4","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Indonesia","fruit":"Grapefruit","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Indonesia","fruit":"Grapefruit","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"Indonesia","fruit":"Grapefruit","active":"TBZ","mrl":"7","product":["ICA Thiabendazole 500 SC"]},{"country":"Canada","fruit":"Lemons","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Canada","fruit":"Lemons","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Canada","fruit":"Lemons","active":"Guazatine","mrl":"N","product":["CitriCure","Guazalil SL"]},{"country":"Canada","fruit":"Lemons","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Canada","fruit":"Lemons","active":"Prochloraz","mrl":"N","product":["ICA-Prochloraz 450 EC"]},{"country":"Canada","fruit":"Lemons","active":"Propiconazole","mrl":"8","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Canada","fruit":"Lemons","active":"Pyrimethanil","mrl":"10","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Canada","fruit":"Lemons","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"Canada","fruit":"Lemons","active":"TBZ","mrl":"10","product":["ICA Thiabendazole 500 SC"]},{"country":"Codex A","fruit":"Lemons","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Codex A","fruit":"Lemons","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Codex A","fruit":"Lemons","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Codex A","fruit":"Lemons","active":"Imazalil","mrl":"15","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Codex A","fruit":"Lemons","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"Codex A","fruit":"Lemons","active":"Propiconazole","mrl":"10","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Codex A","fruit":"Lemons","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Codex A","fruit":"Lemons","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"Codex A","fruit":"Lemons","active":"TBZ","mrl":"7","product":["ICA Thiabendazole 500 SC"]},{"country":"China","fruit":"Lemons","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"China","fruit":"Lemons","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"China","fruit":"Lemons","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"China","fruit":"Lemons","active":"Imazalil","mrl":"15","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"China","fruit":"Lemons","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"China","fruit":"Lemons","active":"Propiconazole","mrl":"10","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"China","fruit":"Lemons","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"China","fruit":"Lemons","active":"Azoxystrobin","mrl":"N","product":["StrobiCure","Evolve 480 SC"]},{"country":"China","fruit":"Lemons","active":"TBZ","mrl":"7","product":["ICA Thiabendazole 500 SC"]},{"country":"EU","fruit":"Lemons","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"EU","fruit":"Lemons","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"EU","fruit":"Lemons","active":"Guazatine","mrl":"N","product":["CitriCure","Guazalil SL"]},{"country":"EU","fruit":"Lemons","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"EU","fruit":"Lemons","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"EU","fruit":"Lemons","active":"Propiconazole","mrl":"5","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"EU","fruit":"Lemons","active":"Pyrimethanil","mrl":"8","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"EU","fruit":"Lemons","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"EU","fruit":"Lemons","active":"TBZ","mrl":"7","product":["ICA Thiabendazole 500 SC"]},{"country":"Russia","fruit":"Lemons","active":"DDAC","mrl":"6","product":["Sporekill"]},{"country":"Russia","fruit":"Lemons","active":"Fludioxonil","mrl":"7","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Russia","fruit":"Lemons","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Russia","fruit":"Lemons","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Russia","fruit":"Lemons","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"Russia","fruit":"Lemons","active":"Propiconazole","mrl":"6","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Russia","fruit":"Lemons","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Russia","fruit":"Lemons","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"Russia","fruit":"Lemons","active":"TBZ","mrl":"5","product":["ICA Thiabendazole 500 SC"]},{"country":"Hong Kong","fruit":"Lemons","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Hong Kong","fruit":"Lemons","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Hong Kong","fruit":"Lemons","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Hong Kong","fruit":"Lemons","active":"Imazalil","mrl":"10","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Hong Kong","fruit":"Lemons","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"Hong Kong","fruit":"Lemons","active":"Propiconazole","mrl":"N","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Hong Kong","fruit":"Lemons","active":"Pyrimethanil","mrl":"10","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Hong Kong","fruit":"Lemons","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"Hong Kong","fruit":"Lemons","active":"TBZ","mrl":"10","product":["ICA Thiabendazole 500 SC"]},{"country":"Japan","fruit":"Lemons","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Japan","fruit":"Lemons","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Japan","fruit":"Lemons","active":"Guazatine","mrl":"N","product":["CitriCure","Guazalil SL"]},{"country":"Japan","fruit":"Lemons","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Japan","fruit":"Lemons","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"Japan","fruit":"Lemons","active":"Propiconazole","mrl":"8","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Japan","fruit":"Lemons","active":"Pyrimethanil","mrl":"10","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Japan","fruit":"Lemons","active":"Azoxystrobin","mrl":"10","product":["StrobiCure","Evolve 480 SC"]},{"country":"Japan","fruit":"Lemons","active":"TBZ","mrl":"10","product":["ICA Thiabendazole 500 SC"]},{"country":"Korea","fruit":"Lemons","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Korea","fruit":"Lemons","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Korea","fruit":"Lemons","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Korea","fruit":"Lemons","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Korea","fruit":"Lemons","active":"Prochloraz","mrl":"N","product":["ICA-Prochloraz 450 EC"]},{"country":"Korea","fruit":"Lemons","active":"Propiconazole","mrl":"8","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Korea","fruit":"Lemons","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Korea","fruit":"Lemons","active":"Azoxystrobin","mrl":"10","product":["StrobiCure","Evolve 480 SC"]},{"country":"Korea","fruit":"Lemons","active":"TBZ","mrl":"7","product":["ICA Thiabendazole 500 SC"]},{"country":"RSA","fruit":"Lemons","active":"DDAC","mrl":"6","product":["Sporekill"]},{"country":"RSA","fruit":"Lemons","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"RSA","fruit":"Lemons","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"RSA","fruit":"Lemons","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"RSA","fruit":"Lemons","active":"Prochloraz","mrl":"2","product":["ICA-Prochloraz 450 EC"]},{"country":"RSA","fruit":"Lemons","active":"Propiconazole","mrl":"6","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"RSA","fruit":"Lemons","active":"Pyrimethanil","mrl":"10","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"RSA","fruit":"Lemons","active":"Azoxystrobin","mrl":"10","product":["StrobiCure","Evolve 480 SC"]},{"country":"RSA","fruit":"Lemons","active":"TBZ","mrl":"6","product":["ICA Thiabendazole 500 SC"]},{"country":"Taiwan","fruit":"Lemons","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Taiwan","fruit":"Lemons","active":"Fludioxonil","mrl":"7","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Taiwan","fruit":"Lemons","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Taiwan","fruit":"Lemons","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Taiwan","fruit":"Lemons","active":"Prochloraz","mrl":"N","product":["ICA-Prochloraz 450 EC"]},{"country":"Taiwan","fruit":"Lemons","active":"Propiconazole","mrl":"4","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Taiwan","fruit":"Lemons","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Taiwan","fruit":"Lemons","active":"Azoxystrobin","mrl":"10","product":["StrobiCure","Evolve 480 SC"]},{"country":"Taiwan","fruit":"Lemons","active":"TBZ","mrl":"10","product":["ICA Thiabendazole 500 SC"]},{"country":"USA","fruit":"Lemons","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"USA","fruit":"Lemons","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"USA","fruit":"Lemons","active":"Guazatine","mrl":"N","product":["CitriCure","Guazalil SL"]},{"country":"USA","fruit":"Lemons","active":"Imazalil","mrl":"10","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"USA","fruit":"Lemons","active":"Prochloraz","mrl":"N","product":["ICA-Prochloraz 450 EC"]},{"country":"USA","fruit":"Lemons","active":"Propiconazole","mrl":"8","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"USA","fruit":"Lemons","active":"Pyrimethanil","mrl":"10","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"USA","fruit":"Lemons","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"USA","fruit":"Lemons","active":"TBZ","mrl":"10","product":["ICA Thiabendazole 500 SC"]},{"country":"Indonesia","fruit":"Lemons","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Indonesia","fruit":"Lemons","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Indonesia","fruit":"Lemons","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Indonesia","fruit":"Lemons","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Indonesia","fruit":"Lemons","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"Indonesia","fruit":"Lemons","active":"Propiconazole","mrl":"10","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Indonesia","fruit":"Lemons","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Indonesia","fruit":"Lemons","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"Indonesia","fruit":"Lemons","active":"TBZ","mrl":"7","product":["ICA Thiabendazole 500 SC"]},{"country":"Canada","fruit":"Mandarin types","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Canada","fruit":"Mandarin types","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Canada","fruit":"Mandarin types","active":"Guazatine","mrl":"N","product":["CitriCure","Guazalil SL"]},{"country":"Canada","fruit":"Mandarin types","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Canada","fruit":"Mandarin types","active":"Prochloraz","mrl":"N","product":["ICA-Prochloraz 450 EC"]},{"country":"Canada","fruit":"Mandarin types","active":"Propiconazole","mrl":"8","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Canada","fruit":"Mandarin types","active":"Pyrimethanil","mrl":"10","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Canada","fruit":"Mandarin types","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"Canada","fruit":"Mandarin types","active":"TBZ","mrl":"10","product":["ICA Thiabendazole 500 SC"]},{"country":"Codex A","fruit":"Mandarin types","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Codex A","fruit":"Mandarin types","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Codex A","fruit":"Mandarin types","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Codex A","fruit":"Mandarin types","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Codex A","fruit":"Mandarin types","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"Codex A","fruit":"Mandarin types","active":"Propiconazole","mrl":"10","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Codex A","fruit":"Mandarin types","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Codex A","fruit":"Mandarin types","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"Codex A","fruit":"Mandarin types","active":"TBZ","mrl":"7","product":["ICA Thiabendazole 500 SC"]},{"country":"China","fruit":"Mandarin types","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"China","fruit":"Mandarin types","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"China","fruit":"Mandarin types","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"China","fruit":"Mandarin types","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"China","fruit":"Mandarin types","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"China","fruit":"Mandarin types","active":"Propiconazole","mrl":"10","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"China","fruit":"Mandarin types","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"China","fruit":"Mandarin types","active":"Azoxystrobin","mrl":"N","product":["StrobiCure","Evolve 480 SC"]},{"country":"China","fruit":"Mandarin types","active":"TBZ","mrl":"7","product":["ICA Thiabendazole 500 SC"]},{"country":"EU","fruit":"Mandarin types","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"EU","fruit":"Mandarin types","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"EU","fruit":"Mandarin types","active":"Guazatine","mrl":"N","product":["CitriCure","Guazalil SL"]},{"country":"EU","fruit":"Mandarin types","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"EU","fruit":"Mandarin types","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"EU","fruit":"Mandarin types","active":"Propiconazole","mrl":"5","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"EU","fruit":"Mandarin types","active":"Pyrimethanil","mrl":"8","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"EU","fruit":"Mandarin types","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"EU","fruit":"Mandarin types","active":"TBZ","mrl":"7","product":["ICA Thiabendazole 500 SC"]},{"country":"Russia","fruit":"Mandarin types","active":"DDAC","mrl":"6","product":["Sporekill"]},{"country":"Russia","fruit":"Mandarin types","active":"Fludioxonil","mrl":"7","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Russia","fruit":"Mandarin types","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Russia","fruit":"Mandarin types","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Russia","fruit":"Mandarin types","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"Russia","fruit":"Mandarin types","active":"Propiconazole","mrl":"6","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Russia","fruit":"Mandarin types","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Russia","fruit":"Mandarin types","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"Russia","fruit":"Mandarin types","active":"TBZ","mrl":"5","product":["ICA Thiabendazole 500 SC"]},{"country":"Hong Kong","fruit":"Mandarin types","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Hong Kong","fruit":"Mandarin types","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Hong Kong","fruit":"Mandarin types","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Hong Kong","fruit":"Mandarin types","active":"Imazalil","mrl":"10","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Hong Kong","fruit":"Mandarin types","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"Hong Kong","fruit":"Mandarin types","active":"Propiconazole","mrl":"N","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Hong Kong","fruit":"Mandarin types","active":"Pyrimethanil","mrl":"10","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Hong Kong","fruit":"Mandarin types","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"Hong Kong","fruit":"Mandarin types","active":"TBZ","mrl":"10","product":["ICA Thiabendazole 500 SC"]},{"country":"Japan","fruit":"Mandarin types","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Japan","fruit":"Mandarin types","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Japan","fruit":"Mandarin types","active":"Guazatine","mrl":"N","product":["CitriCure","Guazalil SL"]},{"country":"Japan","fruit":"Mandarin types","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Japan","fruit":"Mandarin types","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"Japan","fruit":"Mandarin types","active":"Propiconazole","mrl":"8","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Japan","fruit":"Mandarin types","active":"Pyrimethanil","mrl":"10","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Japan","fruit":"Mandarin types","active":"Azoxystrobin","mrl":"0","product":["StrobiCure","Evolve 480 SC"]},{"country":"Japan","fruit":"Mandarin types","active":"TBZ","mrl":"10","product":["ICA Thiabendazole 500 SC"]},{"country":"Korea","fruit":"Mandarin types","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Korea","fruit":"Mandarin types","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Korea","fruit":"Mandarin types","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Korea","fruit":"Mandarin types","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Korea","fruit":"Mandarin types","active":"Prochloraz","mrl":"N","product":["ICA-Prochloraz 450 EC"]},{"country":"Korea","fruit":"Mandarin types","active":"Propiconazole","mrl":"8","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Korea","fruit":"Mandarin types","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Korea","fruit":"Mandarin types","active":"Azoxystrobin","mrl":"10","product":["StrobiCure","Evolve 480 SC"]},{"country":"Korea","fruit":"Mandarin types","active":"TBZ","mrl":"7","product":["ICA Thiabendazole 500 SC"]},{"country":"RSA","fruit":"Mandarin types","active":"DDAC","mrl":"6","product":["Sporekill"]},{"country":"RSA","fruit":"Mandarin types","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"RSA","fruit":"Mandarin types","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"RSA","fruit":"Mandarin types","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"RSA","fruit":"Mandarin types","active":"Prochloraz","mrl":"2","product":["ICA-Prochloraz 450 EC"]},{"country":"RSA","fruit":"Mandarin types","active":"Propiconazole","mrl":"6","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"RSA","fruit":"Mandarin types","active":"Pyrimethanil","mrl":"10","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"RSA","fruit":"Mandarin types","active":"Azoxystrobin","mrl":"10","product":["StrobiCure","Evolve 480 SC"]},{"country":"RSA","fruit":"Mandarin types","active":"TBZ","mrl":"6","product":["ICA Thiabendazole 500 SC"]},{"country":"Taiwan","fruit":"Mandarin types","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Taiwan","fruit":"Mandarin types","active":"Fludioxonil","mrl":"7","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Taiwan","fruit":"Mandarin types","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Taiwan","fruit":"Mandarin types","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Taiwan","fruit":"Mandarin types","active":"Prochloraz","mrl":"N","product":["ICA-Prochloraz 450 EC"]},{"country":"Taiwan","fruit":"Mandarin types","active":"Propiconazole","mrl":"0","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Taiwan","fruit":"Mandarin types","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Taiwan","fruit":"Mandarin types","active":"Azoxystrobin","mrl":"10","product":["StrobiCure","Evolve 480 SC"]},{"country":"Taiwan","fruit":"Mandarin types","active":"TBZ","mrl":"10","product":["ICA Thiabendazole 500 SC"]},{"country":"USA","fruit":"Mandarin types","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"USA","fruit":"Mandarin types","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"USA","fruit":"Mandarin types","active":"Guazatine","mrl":"N","product":["CitriCure","Guazalil SL"]},{"country":"USA","fruit":"Mandarin types","active":"Imazalil","mrl":"10","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"USA","fruit":"Mandarin types","active":"Prochloraz","mrl":"N","product":["ICA-Prochloraz 450 EC"]},{"country":"USA","fruit":"Mandarin types","active":"Propiconazole","mrl":"8","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"USA","fruit":"Mandarin types","active":"Pyrimethanil","mrl":"10","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"USA","fruit":"Mandarin types","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"USA","fruit":"Mandarin types","active":"TBZ","mrl":"10","product":["ICA Thiabendazole 500 SC"]},{"country":"Indonesia","fruit":"Mandarin types","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Indonesia","fruit":"Mandarin types","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Indonesia","fruit":"Mandarin types","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Indonesia","fruit":"Mandarin types","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Indonesia","fruit":"Mandarin types","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"Indonesia","fruit":"Mandarin types","active":"Propiconazole","mrl":"10","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Indonesia","fruit":"Mandarin types","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Indonesia","fruit":"Mandarin types","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"Indonesia","fruit":"Mandarin types","active":"TBZ","mrl":"7","product":["ICA Thiabendazole 500 SC"]},{"country":"Canada","fruit":"Oranges","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Canada","fruit":"Oranges","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Canada","fruit":"Oranges","active":"Guazatine","mrl":"N","product":["CitriCure","Guazalil SL"]},{"country":"Canada","fruit":"Oranges","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Canada","fruit":"Oranges","active":"Prochloraz","mrl":"N","product":["ICA-Prochloraz 450 EC"]},{"country":"Canada","fruit":"Oranges","active":"Propiconazole","mrl":"8","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Canada","fruit":"Oranges","active":"Pyrimethanil","mrl":"10","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Canada","fruit":"Oranges","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"Canada","fruit":"Oranges","active":"TBZ","mrl":"10","product":["ICA Thiabendazole 500 SC"]},{"country":"Codex A","fruit":"Oranges","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Codex A","fruit":"Oranges","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Codex A","fruit":"Oranges","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Codex A","fruit":"Oranges","active":"Imazalil","mrl":"8","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Codex A","fruit":"Oranges","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"Codex A","fruit":"Oranges","active":"Propiconazole","mrl":"10","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Codex A","fruit":"Oranges","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Codex A","fruit":"Oranges","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"Codex A","fruit":"Oranges","active":"TBZ","mrl":"7","product":["ICA Thiabendazole 500 SC"]},{"country":"China","fruit":"Oranges","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"China","fruit":"Oranges","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"China","fruit":"Oranges","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"China","fruit":"Oranges","active":"Imazalil","mrl":"8","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"China","fruit":"Oranges","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"China","fruit":"Oranges","active":"Propiconazole","mrl":"10","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"China","fruit":"Oranges","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"China","fruit":"Oranges","active":"Azoxystrobin","mrl":"N","product":["StrobiCure","Evolve 480 SC"]},{"country":"China","fruit":"Oranges","active":"TBZ","mrl":"7","product":["ICA Thiabendazole 500 SC"]},{"country":"EU","fruit":"Oranges","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"EU","fruit":"Oranges","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"EU","fruit":"Oranges","active":"Guazatine","mrl":"N","product":["CitriCure","Guazalil SL"]},{"country":"EU","fruit":"Oranges","active":"Imazalil","mrl":"4","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"EU","fruit":"Oranges","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"EU","fruit":"Oranges","active":"Propiconazole","mrl":"9","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"EU","fruit":"Oranges","active":"Pyrimethanil","mrl":"8","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"EU","fruit":"Oranges","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"EU","fruit":"Oranges","active":"TBZ","mrl":"7","product":["ICA Thiabendazole 500 SC"]},{"country":"Russia","fruit":"Oranges","active":"DDAC","mrl":"6","product":["Sporekill"]},{"country":"Russia","fruit":"Oranges","active":"Fludioxonil","mrl":"7","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Russia","fruit":"Oranges","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Russia","fruit":"Oranges","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Russia","fruit":"Oranges","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"Russia","fruit":"Oranges","active":"Propiconazole","mrl":"6","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Russia","fruit":"Oranges","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Russia","fruit":"Oranges","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"Russia","fruit":"Oranges","active":"TBZ","mrl":"5","product":["ICA Thiabendazole 500 SC"]},{"country":"Hong Kong","fruit":"Oranges","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Hong Kong","fruit":"Oranges","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Hong Kong","fruit":"Oranges","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Hong Kong","fruit":"Oranges","active":"Imazalil","mrl":"10","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Hong Kong","fruit":"Oranges","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"Hong Kong","fruit":"Oranges","active":"Propiconazole","mrl":"N","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Hong Kong","fruit":"Oranges","active":"Pyrimethanil","mrl":"10","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Hong Kong","fruit":"Oranges","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"Hong Kong","fruit":"Oranges","active":"TBZ","mrl":"10","product":["ICA Thiabendazole 500 SC"]},{"country":"Japan","fruit":"Oranges","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Japan","fruit":"Oranges","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Japan","fruit":"Oranges","active":"Guazatine","mrl":"N","product":["CitriCure","Guazalil SL"]},{"country":"Japan","fruit":"Oranges","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Japan","fruit":"Oranges","active":"Prochloraz","mrl":"5","product":["ICA-Prochloraz 450 EC"]},{"country":"Japan","fruit":"Oranges","active":"Propiconazole","mrl":"8","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Japan","fruit":"Oranges","active":"Pyrimethanil","mrl":"10","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Japan","fruit":"Oranges","active":"Azoxystrobin","mrl":"10","product":["StrobiCure","Evolve 480 SC"]},{"country":"Japan","fruit":"Oranges","active":"TBZ","mrl":"10","product":["ICA Thiabendazole 500 SC"]},{"country":"Korea","fruit":"Oranges","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Korea","fruit":"Oranges","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Korea","fruit":"Oranges","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Korea","fruit":"Oranges","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Korea","fruit":"Oranges","active":"Prochloraz","mrl":"N","product":["ICA-Prochloraz 450 EC"]},{"country":"Korea","fruit":"Oranges","active":"Propiconazole","mrl":"8","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Korea","fruit":"Oranges","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Korea","fruit":"Oranges","active":"Azoxystrobin","mrl":"10","product":["StrobiCure","Evolve 480 SC"]},{"country":"Korea","fruit":"Oranges","active":"TBZ","mrl":"7","product":["ICA Thiabendazole 500 SC"]},{"country":"RSA","fruit":"Oranges","active":"DDAC","mrl":"6","product":["Sporekill"]},{"country":"RSA","fruit":"Oranges","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"RSA","fruit":"Oranges","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"RSA","fruit":"Oranges","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"RSA","fruit":"Oranges","active":"Prochloraz","mrl":"2","product":["ICA-Prochloraz 450 EC"]},{"country":"RSA","fruit":"Oranges","active":"Propiconazole","mrl":"6","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"RSA","fruit":"Oranges","active":"Pyrimethanil","mrl":"10","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"RSA","fruit":"Oranges","active":"Azoxystrobin","mrl":"10","product":["StrobiCure","Evolve 480 SC"]},{"country":"RSA","fruit":"Oranges","active":"TBZ","mrl":"6","product":["ICA Thiabendazole 500 SC"]},{"country":"Taiwan","fruit":"Oranges","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Taiwan","fruit":"Oranges","active":"Fludioxonil","mrl":"5","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Taiwan","fruit":"Oranges","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Taiwan","fruit":"Oranges","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Taiwan","fruit":"Oranges","active":"Prochloraz","mrl":"N","product":["ICA-Prochloraz 450 EC"]},{"country":"Taiwan","fruit":"Oranges","active":"Propiconazole","mrl":"4","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Taiwan","fruit":"Oranges","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Taiwan","fruit":"Oranges","active":"Azoxystrobin","mrl":"10","product":["StrobiCure","Evolve 480 SC"]},{"country":"Taiwan","fruit":"Oranges","active":"TBZ","mrl":"10","product":["ICA Thiabendazole 500 SC"]},{"country":"USA","fruit":"Oranges","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"USA","fruit":"Oranges","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"USA","fruit":"Oranges","active":"Guazatine","mrl":"N","product":["CitriCure","Guazalil SL"]},{"country":"USA","fruit":"Oranges","active":"Imazalil","mrl":"10","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"USA","fruit":"Oranges","active":"Prochloraz","mrl":"N","product":["ICA-Prochloraz 450 EC"]},{"country":"USA","fruit":"Oranges","active":"Propiconazole","mrl":"8","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"USA","fruit":"Oranges","active":"Pyrimethanil","mrl":"10","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"USA","fruit":"Oranges","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"USA","fruit":"Oranges","active":"TBZ","mrl":"10","product":["ICA Thiabendazole 500 SC"]},{"country":"Indonesia","fruit":"Oranges","active":"DDAC","mrl":"N","product":["Sporekill"]},{"country":"Indonesia","fruit":"Oranges","active":"Fludioxonil","mrl":"10","product":["Teacher 230 SC","Evolve 480 SC"]},{"country":"Indonesia","fruit":"Oranges","active":"Guazatine","mrl":"5","product":["CitriCure","Guazalil SL"]},{"country":"Indonesia","fruit":"Oranges","active":"Imazalil","mrl":"5","product":["Guazalil SL","ImazaCure 500 EC","ImaCulate 300 EC","ImazaCure 750 SG"]},{"country":"Indonesia","fruit":"Oranges","active":"Prochloraz","mrl":"10","product":["ICA-Prochloraz 450 EC"]},{"country":"Indonesia","fruit":"Oranges","active":"Propiconazole","mrl":"10","product":["PropiCure 250 EC","Propirly 270 EC"]},{"country":"Indonesia","fruit":"Oranges","active":"Pyrimethanil","mrl":"7","product":["Protector 400 SC","Propirly 270 EC"]},{"country":"Indonesia","fruit":"Oranges","active":"Azoxystrobin","mrl":"15","product":["StrobiCure","Evolve 480 SC"]},{"country":"Indonesia","fruit":"Oranges","active":"TBZ","mrl":"7","product":["ICA Thiabendazole 500 SC"]},{"country":"Indonesia","fruit":"Grapefruit","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},{"country":"Indonesia","fruit":"Lemons","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Indonesia","fruit":"Mandarin types","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},{"country":"USA","fruit":"Oranges","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"USA","fruit":"Grapefruit","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"USA","fruit":"Lemons","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"USA","fruit":"Mandarin types","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},{"country":"USA","fruit":"Oranges","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"USA","fruit":"Oranges","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Taiwan","fruit":"Grapefruit","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Taiwan","fruit":"Lemons","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Taiwan","fruit":"Mandarin types","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},{"country":"Taiwan","fruit":"Oranges","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"RSA","fruit":"Grapefruit","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"RSA","fruit":"Lemons","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"RSA","fruit":"Mandarin types","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},{"country":"RSA","fruit":"Oranges","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Korea","fruit":"Grapefruit","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Korea","fruit":"Lemons","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Korea","fruit":"Mandarin types","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},{"country":"Korea","fruit":"Oranges","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Japan","fruit":"Grapefruit","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Japan","fruit":"Lemons","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Japan","fruit":"Mandarin types","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},{"country":"Japan","fruit":"Oranges","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Hong Kong","fruit":"Grapefruit","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Hong Kong","fruit":"Lemons","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Hong Kong","fruit":"Mandarin types","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Hong Kong","fruit":"Oranges","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Russia","fruit":"Grapefruit","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Russia","fruit":"Lemons","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Russia","fruit":"Mandarin types","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Russia","fruit":"Oranges","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"EU","fruit":"Grapefruit","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"EU","fruit":"Lemons","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"EU","fruit":"Mandarin types","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"EU","fruit":"Oranges","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Codex A","fruit":"Grapefruit","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Codex A","fruit":"Lemons","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Codex A","fruit":"Mandarin types","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Codex A","fruit":"Oranges","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Canada","fruit":"Grapefruit","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Canada","fruit":"Lemons","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Canada","fruit":"Mandarin types","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]},
{"country":"Canada","fruit":"Oranges","active":"Peracetic Acid Peroxide","mrl":"*","product":["HyperCide"]}];
var fruit_arr:{fruit: string; isCheck:boolean}[] = [];
var fruit_country_s = true;
function fruit_funct(){
  var lookup:{[key: string]: any} = [];
     var items = your_collection;
     var result = [];
     var item = items[0];
     for (var i = 1; i < items.length; i++) {
        
        var name = item.fruit;

         if (!(name in lookup)) {
             lookup[name] = 1;
             if (name === "Grapefruit") {
                result.push({"fruit" : name, "isCheck":false});
             } else {
                result.push({"fruit" : name, "isCheck":false});
             }
         }
         item = items[i];
     }
     fruit_arr = result;
  
};
fruit_funct();
var country_arr:{country: string; sub:string; isCheck:boolean}[] = [];

function country_funct() {
  var lookup:{[key: string]: any} = [];

     var country_s: { [key: string]: any } = sub_country;
     var items = your_collection;
     var result:any[] = [];
     var item = items[0];
     for (var i = 1; i < items.length; i++) {
        var name = item.country;

         if (!(name in lookup)) {
             lookup[name] = 1;
             if (name === "RSA") {
               result.push({"country" : name, "sub" : name, "isCheck":true});
             } else {
                result.push({"country" : name, "sub" : name, "isCheck":false});
             }
         }
         item = items[i];
     }
     
     Object.keys(country_s).forEach(function(key) {
          for (var i = 0; i < country_s[key].length; i++) {
             result.push({"country" : country_s[key][i], "sub" : key, "isCheck":false});
          }
     });
     result.sort(function(a, b)
 {
  var x = a["country"]; var y = b["country"];
  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
 });
     country_arr = result ;
  
};
function myFunction(product:string[]){
    var str_v:string = "";
    for (var i = 0; i < product.length; i++) {
        str_v += product[i] + "<br>";
    }

    return str_v;

  }
country_funct();
const Home: React.FC = () => {
  const [showAlert1, setShowAlert1] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [showAlert3, setShowAlert3] = useState(false);
  const check_fun = async () => {
     var fruit_s:string = "";
     var country_s1:string[] = []; 
     var x = document.getElementsByClassName("country");
      var y = document.getElementsByClassName("fruit");
     for (var i = 0; i < x.length; i++) {
        if (x[i].getAttribute("aria-checked") === "true") {
            var str_c:string = (x[i].getAttribute("value") || "");
            country_s1.push(str_c);
        }
     }
     for (var i2 = 0; i2 < y.length; i2++) {
        if (y[i2].getAttribute("aria-checked") === "true") {
            var str_f:string = (y[i2].getAttribute("value") || "");
            fruit_s = str_f;
        }
     }
     if (fruit_s !== "" && country_s1.length !== 0) {
    var final_result:any[] = []; 
    var result = your_collection.filter(function(i) {
       for (var j = 0; j < country_s1.length; j++ ) {    
          if ( i.fruit === fruit_s && i.country === country_s1[j])
          {
             return true;
          }
       }
       return false;
       });
    var sorted = result.sort(function IHaveAName(a, b) { 
    return b.active < a.active ?  1 
         : b.active > a.active ? -1 
         : 0;                   
    });
    sorted.forEach(function(it){
    	var index = final_result.findIndex(function(item, i){
  		return item.active === it.active;
	});
	if (index === -1) {
	   final_result.push(it);
	} else {
	   if (final_result[index].mrl ==='N') {
	   } else if (it.mrl === 'N') {
	      final_result[index].mrl = 'N';
	   } else if (it.mrl < final_result[index].mrl) {
	      final_result[index].mrl = it.mrl;	      
	   } else {
	      final_result[index].mrl = it.mrl;
	   }
	}
    });
    var html_str:string = "<ion-grid> <ion-row class='row'><ion-col size='4' class='col'>Active </ion-col><ion-col size='4' class='col'>MRL</ion-col><ion-col class='col' size='4'>Product</ion-col></ion-row>";
    for (var i3 = 0; i3 < final_result.length; i3++) {
       if (final_result[i3].mrl !== "N") {
            html_str += "<ion-row class='row'> <ion-col size='4' class='col'> " + final_result[i3].active + " </ion-col> <ion-col size='4' class='col'>  " + final_result[i3].mrl + " </ion-col> <ion-col size='4' class='col'> " + myFunction(final_result[i3].product) + " </ion-col> </ion-row>";
       }

    }
    html_str += "</ion-grid>";
    document.getElementsByClassName("demo")[0].innerHTML = html_str;
    //return final_result;
    fruit_country_s = true;
  } else {
    if (fruit_s === "" && country_s1.length === 0) {
        setShowAlert2(true)
    } else if (fruit_s === "") {
        setShowAlert1(true)
    } else {
        setShowAlert3(true)
    }
    fruit_country_s = false;
  }
  
  };
  function go_bottom () {
      if (fruit_country_s) {
      setTimeout(function(){
document.getElementsByClassName("country_sel")[0].scrollIntoView();
}, 200);
}
}
    function handleInput(event: CustomEvent) {
      var items = Array.from(document.querySelector('.scroll')!.children);
      const query = event.detail.value.toLowerCase();

      requestAnimationFrame(() => {
        items.forEach(item => {
          const shouldShow = item.id.toLowerCase().indexOf(query);
          if (shouldShow === -1) {
             item.setAttribute("style", "display:none;");
          } else {
             item.setAttribute("style", "display:block;");
          }
        });
      });
    }
    function event_handle(event: CustomEvent) {
        var elem_show = document.getElementsByClassName("country_sel")[0];
        var items = Array.from(elem_show.children);
        var elem_click = event.target! as HTMLInputElement;
        var value_v2 = elem_click.id;
        var bool = false;
        items.forEach(item => {
             if (item.id === value_v2) {
                 bool = true;
                 elem_show.removeChild(item);
             }
        });
        if (bool === false) {
            var lbl = document.createElement("IonLabel");
            lbl.innerHTML = "<div>" + value_v2 + "</div>";
            lbl.id = value_v2;
            elem_show.appendChild(lbl);  
        }
    }
  const [selected] = useState<string>('biff');
const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
    
      <IonHeader>
        <IonToolbar>
          <IonTitle>Citrus MRL</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert1(false)}
          cssClass='my-custom-class'
          header={'Fruit'}
          subHeader={'Fruit'}
          message={'Select a fruit'}
          buttons={['OK']}
        />
        <IonAlert
          isOpen={showAlert2}
          onDidDismiss={() => setShowAlert2(false)}
          cssClass='my-custom-class'
          header={'Fruit and country'}
          subHeader={'Fruit and country'}
          message={'Select a fruit and country'}
          buttons={['OK']}
        />
        <IonAlert
          isOpen={showAlert3}
          onDidDismiss={() => setShowAlert3(false)}
          cssClass='my-custom-class'
          header={'Country'}
          subHeader={'Country'}
          message={'Select a country'}
          buttons={['OK']}
        />
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Citrus MRL</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton fill="clear" onClick={function() {window.open("https://www.facebook.com/ICAInternationalChemicals/?rf=1585922241735402",'_system', 'location=yes');}}>
                    <img alt="Facebook" src="/assets/img/facebook.png" />
        </IonButton>
        <IonButton onClick={function() {window.open("http://icaonline.co.za",'_system', 'location=yes');}}>ICA online website </IonButton>
                    <IonButton className="button_click" onClick={function() {check_fun(); go_bottom()}}>Get MRLs</IonButton>

        <IonButton href="/dosage"><IonLabel>Dosages (RSA)</IonLabel></IonButton>
        <IonButton href="/factsheetsA"><IonLabel>Factsheets Afrikaans</IonLabel></IonButton>
        <IonButton href="/factsheetsE"><IonLabel>Factsheets English</IonLabel></IonButton>
        <IonButton href="/label"><IonLabel>Labels</IonLabel></IonButton>

        <IonList>
          <IonListHeader><IonLabel><h1>Fruit</h1></IonLabel></IonListHeader>
<IonRadioGroup value={selected}>
           
           {fruit_arr.map(({ fruit, isCheck }, i) => (
            <IonItem key={i}>
              <IonLabel>{fruit}</IonLabel>
              <IonRadio slot="end" class="fruit" value={fruit}/>
            </IonItem>
          ))}

          </IonRadioGroup>
         
        </IonList>
        
          <IonListHeader><IonLabel><h1>Country</h1></IonLabel></IonListHeader>
          <IonItem>
        <IonSearchbar value={searchText} onIonChange={function (e) { setSearchText(e.detail.value!); handleInput(e);}}></IonSearchbar>
          </IonItem>
          <IonList className="scroll">
           {country_arr.map(({ country, sub, isCheck }, i) => (
            <IonItem key={i} id={country} class={country}>
              {country}
              <IonCheckbox onIonChange={function (e) {event_handle(e);}} slot="end" class="country" id={country} value={sub} name={country} checked={isCheck} />
            </IonItem>
          ))}
          </IonList>
        
        <IonButton className="button_click" onClick={function() {check_fun(); go_bottom()}}>Get MRLs</IonButton>
          <IonListHeader><IonLabel><h1>Countries Selected</h1></IonLabel></IonListHeader>
          <IonList class="country_sel"> <IonLabel id="RSA"> <div>RSA</div> </IonLabel> </IonList>
          <div><IonLabel className="red"> Residues must comply to import as well as export countries (RSA) MRL's. </IonLabel></div>
          <div><IonLabel className="blue"> * No residue </IonLabel></div>
          <div><IonLabel className="red"> No guarantees are given that the MRL data is correct at time of use. It is the user's responsibility to be familiar with the latest MRL requirements of their markets.  </IonLabel></div>
          <IonListHeader><IonLabel><h1>MRL Table</h1></IonLabel></IonListHeader>
          <IonItem class="demo">
          </IonItem>
      </IonContent>
      
    </IonPage>
  );
};
export default Home;




