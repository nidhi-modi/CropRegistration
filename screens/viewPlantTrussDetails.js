import React, {useEffect, useState} from 'react';
import {useMutation, useLazyQuery} from '@apollo/client/react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {INSERT_PLANT_DETAILS, INSERT_TRUSS_DETAILS} from '../graphql/mutation';
import { GET_PLANT_DETAILS, GET_TRUSS_DETAILS} from '../graphql/queries';
import Database from './Database';

export const ViewPlantTrussDetails = () => {
  const db = new Database();
  const [plantData, setPlantData] = useState([]);
  const [trussData, setTrussData] = useState([]);
  const [plantDataAws, setPlantDataAws] = useState([]);
  const [trussDataAws, setTrussDataAws] = useState([]);
  const [insertPlantDetails] = useMutation(INSERT_PLANT_DETAILS);
  const [insertTrussDetails] = useMutation(INSERT_TRUSS_DETAILS);
  const [getPlantDetails] = useLazyQuery(GET_PLANT_DETAILS, {
    fetchPolicy: 'no-cache', 
    onCompleted: data => {
      setPlantDataAws(data?.plant_details)
      console.log("Plant data from AWS : ", data)

      getTrussDetails();
    }
  });
  const [getTrussDetails] = useLazyQuery(GET_TRUSS_DETAILS, {
    fetchPolicy: 'no-cache',
    onCompleted: data => {
      setTrussDataAws(data?.truss_details)
      console.log("Truss data from AWS : ", data)

    }
  });

  useEffect(() => {
    db.listPlants()
      .then(data => {
        console.log('data from local database', data);
        setPlantData(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    let objs = [];
    if (plantData?.length > 0) {
      plantData?.map(obj => {
        delete obj.plantId;
        delete obj?.__typename;
        delete obj?.id
        objs.push(obj);
        for (var key in obj) {
          if (obj[key] == '' || obj[key] == "NaN") {
            obj[key] = null
          }
        }
        console.log("here objs in plant", objs)
        insertPlantDetails({
          variables: {
            objects: objs,
          },
        })
          .then(res => {
            // res?.data?.insert_plant_details?.returning?.length > 0 && setPlantDataAws(res?.data?.insert_plant_details?.returning)
            console.log('res in plant mutation', res);
            db.listTruss().then((data) => {
              console.log("truss data in local db")
              setTrussData(data);
            }).catch((err) => {
              console.log(err); 
            })
          })
          .catch(e => {
            console.log('error in plant mutation', e);
          });
      });
    }
  }, [plantData]);

  useEffect(() => {
    let objs= []
      if (trussData?.length > 0) {
        trussData?.map(obj => {
          delete obj.trussID
          delete obj?.__typename;
          delete obj?.id;
          for (var key in obj) {
            if (obj[key] == '' || obj[key] == "NaN") {
              obj[key] = null
            }
          }
          objs.push(obj);
          console.log("here objs in truss", objs)
        }) 
          insertTrussDetails({
            variables: {
              objects: objs
            }
          }).then((res) => {
            // res?.data?.insert_truss_details?.returning?.length > 0 && setTrussDataAws(res?.data?.insert_truss_details?.returning)
            console.log("res in truss Detaaails", res) 
            getPlantQuery();
          }).catch((e) => {
            console.log("error in truss mutation", e)
          })   
      } 
  }, [trussData])

  const getPlantQuery = () => {
    getPlantDetails()
  }


  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{fontSize: 20, fontWeight: "900"}}>Plant Details in Local DB</Text>
        <Text>{JSON.stringify(plantData)}</Text>
        <Text style={{fontSize: 20, fontWeight: "900"}}>Truss Details in Local DB</Text>
        <Text>{JSON.stringify(trussData)}</Text>

        <Text style={{fontSize: 20, fontWeight: "900"}}>Plant Details in AWS</Text>
        <Text>{JSON.stringify(plantDataAws)}</Text>
        <Text style={{fontSize: 20, fontWeight: "900"}}>Truss Details in Aws</Text>
        <Text>{JSON.stringify(trussDataAws)}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F9FF', 
  },
});

export default ViewPlantTrussDetails;
