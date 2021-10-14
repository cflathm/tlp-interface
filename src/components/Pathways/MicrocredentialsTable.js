import React, {useState} from 'react';
import { Table, Checkbox } from 'antd';

  // ------------------------------------------------------------------------------------
  // help from https://stackoverflow.com/a/63008461/13741755

  const MicrocredentialsTable = (props) => {
    // console.log('micro props.microcredentials',props.pathways.pathways.Microcredential)
    let credentialRecommendations = {};
    let credentials = props.pathways.pathways.Microcredential;
    credentials.forEach(credential => {
      let recommendedText = '';
      if(credential.rec_pos === 3){
        recommendedText = '\n(#3 Recommendation)'
      }
      if(credential.rec_pos === 2){
        recommendedText = '\n(#2 Recommendation)'
      } 
      if(credential.rec_pos === 1){
        recommendedText = '\n(#1 Recommendation)'
      }
      credentialRecommendations[credential.name] = credential.name + recommendedText
      // row["name"] = pathway.name + recommendedText
    })
    // console.log('here',credentialRecommendations)
    // console.log('here2',props.pathways.pathways.Microcredential[0].name)
    // console.log('here3',credentialRecommendations[props.pathways.pathways.Microcredential[0]])
    // console.log('here4',props.pathways.pathways.Microcredential[0].rec_pos)
    const [checkboxState, setCheckboxState] = useState([
      {
        key: 1,
        name: credentialRecommendations[props.pathways.pathways.Microcredential[0].name],
        spring22_1: false,
        spring22_2: false,
        summer22_1: false,
        spring22_1Name: props.pathways.pathways.Microcredential[0].courses[0].name,
        spring22_2Name: props.pathways.pathways.Microcredential[0].courses[1].name,
        summer22_1Name: props.pathways.pathways.Microcredential[0].courses[2].name,
        spring22_1ID: props.pathways.pathways.Microcredential[0].courses[0].unique_id,
        spring22_2ID: props.pathways.pathways.Microcredential[0].courses[1].unique_id,
        summer22_1ID: props.pathways.pathways.Microcredential[0].courses[2].unique_id,
        recommended: props.pathways.pathways.Microcredential[0].rec_pos
      },
      {
        key: 2,
        name: credentialRecommendations[props.pathways.pathways.Microcredential[1].name],
        spring22_1: false,
        spring22_2: false,
        summer22_1: false,
        spring22_1Name: props.pathways.pathways.Microcredential[1].courses[0].name,
        spring22_2Name: props.pathways.pathways.Microcredential[1].courses[1].name,
        summer22_1Name: props.pathways.pathways.Microcredential[1].courses[2].name,
        spring22_1ID: props.pathways.pathways.Microcredential[1].courses[0].unique_id,
        spring22_2ID: props.pathways.pathways.Microcredential[1].courses[1].unique_id,
        summer22_1ID: props.pathways.pathways.Microcredential[1].courses[2].unique_id,
        recommended: props.pathways.pathways.Microcredential[1].rec_pos
      },
      {
        key: 3,
        name: credentialRecommendations[props.pathways.pathways.Microcredential[2].name],
        spring22_1: false,
        spring22_2: false,
        summer22_1: false,
        spring22_1Name: props.pathways.pathways.Microcredential[2].courses[0].name,
        spring22_2Name: props.pathways.pathways.Microcredential[2].courses[1].name,
        summer22_1Name: props.pathways.pathways.Microcredential[2].courses[2].name,
        spring22_1ID: props.pathways.pathways.Microcredential[2].courses[0].unique_id,
        spring22_2ID: props.pathways.pathways.Microcredential[2].courses[1].unique_id,
        summer22_1ID: props.pathways.pathways.Microcredential[2].courses[2].unique_id,
        recommended: props.pathways.pathways.Microcredential[2].rec_pos
      },
      {
        key: 4,
        name: credentialRecommendations[props.pathways.pathways.Microcredential[3].name],
        spring22_1: false,
        spring22_2: false,
        summer22_1: false,
        spring22_1Name: props.pathways.pathways.Microcredential[3].courses[0].name,
        spring22_2Name: props.pathways.pathways.Microcredential[3].courses[1].name,
        summer22_1Name: props.pathways.pathways.Microcredential[3].courses[2].name,
        spring22_1ID: props.pathways.pathways.Microcredential[3].courses[0].unique_id,
        spring22_2ID: props.pathways.pathways.Microcredential[3].courses[1].unique_id,
        summer22_1ID: props.pathways.pathways.Microcredential[3].courses[2].unique_id,
        recommended: props.pathways.pathways.Microcredential[3].rec_pos
      },
      {
        key: 5,
        name: credentialRecommendations[props.pathways.pathways.Microcredential[4].name],
        spring22_1: false,
        spring22_2: false,
        summer22_1: false,
        spring22_1Name: props.pathways.pathways.Microcredential[4].courses[0].name,
        spring22_2Name: props.pathways.pathways.Microcredential[4].courses[1].name,
        summer22_1Name: props.pathways.pathways.Microcredential[4].courses[2].name,
        spring22_1ID: props.pathways.pathways.Microcredential[4].courses[0].unique_id,
        spring22_2ID: props.pathways.pathways.Microcredential[4].courses[1].unique_id,
        summer22_1ID: props.pathways.pathways.Microcredential[4].courses[2].unique_id,
        recommended: props.pathways.pathways.Microcredential[4].rec_pos
      },
      {
        key: 6,
        name: credentialRecommendations[props.pathways.pathways.Microcredential[5].name],
        spring22_1: false,
        spring22_2: false,
        summer22_1: false,
        spring22_1Name: props.pathways.pathways.Microcredential[5].courses[0].name,
        spring22_2Name: props.pathways.pathways.Microcredential[5].courses[1].name,
        summer22_1Name: props.pathways.pathways.Microcredential[5].courses[2].name,
        spring22_1ID: props.pathways.pathways.Microcredential[5].courses[0].unique_id,
        spring22_2ID: props.pathways.pathways.Microcredential[5].courses[1].unique_id,
        summer22_1ID: props.pathways.pathways.Microcredential[5].courses[2].unique_id,
        recommended: props.pathways.pathways.Microcredential[5].rec_pos
      },
      {
        key: 7,
        name: credentialRecommendations[props.pathways.pathways.Microcredential[6].name],
        spring22_1: false,
        spring22_2: false,
        summer22_1: false,
        spring22_1Name: props.pathways.pathways.Microcredential[6].courses[0].name,
        spring22_2Name: props.pathways.pathways.Microcredential[6].courses[1].name,
        summer22_1Name: props.pathways.pathways.Microcredential[6].courses[2].name,
        spring22_1ID: props.pathways.pathways.Microcredential[6].courses[0].unique_id,
        spring22_2ID: props.pathways.pathways.Microcredential[6].courses[1].unique_id,
        summer22_1ID: props.pathways.pathways.Microcredential[6].courses[2].unique_id,
        recommended: props.pathways.pathways.Microcredential[6].rec_pos
      },
    ]);
  
    const handleCheckboxChangeFactory = (rowIndex, columnKey, record) => event => {
      const newCheckboxState = [...checkboxState];
      newCheckboxState[rowIndex][columnKey] = event.target.checked;
      setCheckboxState(newCheckboxState);
      if(columnKey === "spring22_1"){
        if(record.spring22_1 === true){
          props.setSelectedMicrocredential(selectedMicro => [...selectedMicro, record.spring22_1ID]);
        } else {
          props.setSelectedMicrocredential(props.selectedMicrocredential.filter(thisElement => thisElement !== record.spring22_1ID));
        }
      }
      if(columnKey === "spring22_2"){
        if(record.spring22_2 === true){
          props.setSelectedMicrocredential(selectedMicro => [...selectedMicro, record.spring22_2ID]);
        } else {
          props.setSelectedMicrocredential(props.selectedMicrocredential.filter(thisElement => thisElement !== record.spring22_2ID));
        }  
      }
      if(columnKey === "summer22_1"){
        if(record.summer22_1 === true){
          props.setSelectedMicrocredential(selectedMicro => [...selectedMicro, record.summer22_1ID]);
        } else {
          props.setSelectedMicrocredential(props.selectedMicrocredential.filter(thisElement => thisElement !== record.summer22_1ID));
        }
      }
    };
  
    const columns = [
      {
        title: 'Credential Name',
        dataIndex: 'name',
        key: 'name',
        width: '180px'
      },
      {
        title: 'Spring 1 2022',
        dataIndex: 'spring22_1',
        key: 'spring22_1',
        render: (value, record, rowIndex) => (
          <>
            <Checkbox
              checked={value}
              onChange={handleCheckboxChangeFactory(rowIndex, "spring22_1", record)}
            >{record.spring22_1Name}</Checkbox>
          </>
        )
      },
      {
        title: 'Spring 2 2022',
        dataIndex: 'spring22_2',
        key: 'spring22_2',
        render: (value, record, rowIndex) => (
          <>
            <Checkbox
              checked={value}
              onChange={handleCheckboxChangeFactory(rowIndex, "spring22_2", record)}
            >{record.spring22_2Name}</Checkbox>
          </>
        )
      },
      {
        title: 'Summer 1 2022',
        dataIndex: 'summer22_1',
        key: 'summer22_1',
        render: (value, record, rowIndex) => (
          <>
            <Checkbox
              checked={value}
              onChange={handleCheckboxChangeFactory(rowIndex, "summer22_1", record)}
            >{record.summer22_1Name}</Checkbox>
          </>
        )
      }
    ];
  return (
    <Table 
      pagination={false} 
      columns={columns} 
      dataSource={checkboxState} 
      rowClassName={(record, index) => ("recommended_"+record.recommended)}
      scroll={{ x: 900 }}
    />
  );
  }
  
export default MicrocredentialsTable;