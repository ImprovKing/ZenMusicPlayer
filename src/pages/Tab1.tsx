import React from 'react';
import { IonCol, IonContent, IonGrid, IonHeader, IonListHeader, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import {
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
} from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar><br />
          <IonSearchbar   />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonList>
      <IonListHeader>
            <IonLabel>
              <IonGrid>
              <b> songs </b>
              <b> playlists </b>
              <b> Albulms </b>
              </IonGrid>
            </IonLabel>
          </IonListHeader>

          <IonItem >
            <IonAvatar slot="start">
              <img src='https://picsum.photos/80/80?random=' alt="avatar" />
            </IonAvatar>
            <IonLabel>
              <h2> WolGang Band </h2>
                <p> album label</p>
            </IonLabel>
          </IonItem>

          <IonItem >
            <IonAvatar slot="start">
              <img src='https://picsum.photos/80/80?random=' alt="avatar" />
            </IonAvatar>
            <IonLabel>
              <h2> WolGang Band </h2>
                <p> album label</p>
            </IonLabel>
          </IonItem>

          <IonItem >
            <IonAvatar slot="start">
              <img src='https://picsum.photos/80/80?random=' alt="avatar" />
            </IonAvatar>
            <IonLabel>
              <h2> WolGang Band </h2>
                <p> album label</p>
            </IonLabel>
          </IonItem>

          <IonItem >
            <IonAvatar slot="start">
              <img src='https://picsum.photos/80/80?random=' alt="avatar" />
            </IonAvatar>
            <IonLabel>
              <h2> WolGang Band </h2>
                <p> album label</p>
            </IonLabel>
          </IonItem>

          <IonItem >
            <IonAvatar slot="start">
              <img src='https://picsum.photos/80/80?random=' alt="avatar" />
            </IonAvatar>
            <IonLabel>
              <h2> WolGang Band </h2>
                <p> album label</p>
            </IonLabel>
          </IonItem>

      </IonList>


      <IonList>
          <IonListHeader>
            <IonLabel >New Music</IonLabel>
          </IonListHeader>
          <IonGrid>
            <IonRow>

                <IonCol>    
                  <img src='https://ionic-react-demos.s3.amazonaws.com/music/bohemian-rhapsody.jpg' />
                  <IonItem lines="none">
                    <IonLabel>
                      <h3> Bohemian Raphsod</h3>
                      <p> Green Bands </p>
                    </IonLabel>
                  </IonItem>
                </IonCol>

                <IonCol>    
                  <img src='https://ionic-react-demos.s3.amazonaws.com/music/bohemian-rhapsody.jpg' />
                  <IonItem lines="none">
                    <IonLabel>
                      <h3> Bohemian Raphsod</h3>
                      <p> Green Bands </p>
                    </IonLabel>
                  </IonItem>
                </IonCol>

                <IonCol>    
                  <img src='https://ionic-react-demos.s3.amazonaws.com/music/bohemian-rhapsody.jpg' />
                  <IonItem lines="none">
                    <IonLabel>
                      <h3> Bohemian Raphsod</h3>
                      <p> Green Bands </p>
                    </IonLabel>
                  </IonItem>
                </IonCol>

                <IonCol>    
                  <img src='https://ionic-react-demos.s3.amazonaws.com/music/bohemian-rhapsody.jpg' />
                  <IonItem lines="none">
                    <IonLabel>
                      <h3> Bohemian Raphsod</h3>
                      <p> Green Bands </p>
                    </IonLabel>
                  </IonItem>
                </IonCol>

                <IonCol>    
                  <img src='https://ionic-react-demos.s3.amazonaws.com/music/bohemian-rhapsody.jpg' />
                  <IonItem lines="none">
                    <IonLabel>
                      <h3> Bohemian Raphsod</h3>
                      <p> Green Bands </p>
                    </IonLabel>
                  </IonItem>
                </IonCol>
            </IonRow>
          </IonGrid>
        </IonList>


      </IonContent>
    </IonPage>
  );
};

export default Tab1;
