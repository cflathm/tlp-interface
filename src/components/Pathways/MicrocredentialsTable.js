import React, {useState} from 'react';
import { Table, Checkbox } from 'antd';

  // ------------------------------------------------------------------------------------
  // help from https://stackoverflow.com/a/63008461/13741755

  const MicrocredentialsTable = (props) => {
    // console.log('micro props.microcredentials',props.pathways.pathways.Microcredential)
    const [checkboxState, setCheckboxState] = useState([
      {
        key: 1,
        name: props.pathways.pathways.Microcredential[0].name,
        summer21_2: false,
        Fall21_1: false,
        Fall21_2: false,
        summer21_2Name: props.pathways.pathways.Microcredential[0].courses[0].name,
        Fall21_1Name: props.pathways.pathways.Microcredential[0].courses[1].name,
        Fall21_2Name: props.pathways.pathways.Microcredential[0].courses[2].name,
        summer21_2ID: props.pathways.pathways.Microcredential[0].courses[0].unique_id,
        Fall21_1ID: props.pathways.pathways.Microcredential[0].courses[1].unique_id,
        Fall21_2ID: props.pathways.pathways.Microcredential[0].courses[2].unique_id,
      },
      {
        key: 2,
        name: props.pathways.pathways.Microcredential[1].name,
        summer21_2: false,
        Fall21_1: false,
        Fall21_2: false,
        summer21_2Name: props.pathways.pathways.Microcredential[1].courses[0].name,
        Fall21_1Name: props.pathways.pathways.Microcredential[1].courses[1].name,
        Fall21_2Name: props.pathways.pathways.Microcredential[1].courses[2].name,
        summer21_2ID: props.pathways.pathways.Microcredential[1].courses[0].unique_id,
        Fall21_1ID: props.pathways.pathways.Microcredential[1].courses[1].unique_id,
        Fall21_2ID: props.pathways.pathways.Microcredential[1].courses[2].unique_id,
      },
      {
        key: 3,
        name: props.pathways.pathways.Microcredential[2].name,
        summer21_2: false,
        Fall21_1: false,
        Fall21_2: false,
        summer21_2Name: props.pathways.pathways.Microcredential[2].courses[0].name,
        Fall21_1Name: props.pathways.pathways.Microcredential[2].courses[1].name,
        Fall21_2Name: props.pathways.pathways.Microcredential[2].courses[2].name,
        summer21_2ID: props.pathways.pathways.Microcredential[2].courses[0].unique_id,
        Fall21_1ID: props.pathways.pathways.Microcredential[2].courses[1].unique_id,
        Fall21_2ID: props.pathways.pathways.Microcredential[2].courses[2].unique_id,
      },
      {
        key: 4,
        name: props.pathways.pathways.Microcredential[3].name,
        summer21_2: false,
        Fall21_1: false,
        Fall21_2: false,
        summer21_2Name: props.pathways.pathways.Microcredential[3].courses[0].name,
        Fall21_1Name: props.pathways.pathways.Microcredential[3].courses[1].name,
        Fall21_2Name: props.pathways.pathways.Microcredential[3].courses[2].name,
        summer21_2ID: props.pathways.pathways.Microcredential[3].courses[0].unique_id,
        Fall21_1ID: props.pathways.pathways.Microcredential[3].courses[1].unique_id,
        Fall21_2ID: props.pathways.pathways.Microcredential[3].courses[2].unique_id,
      },
      {
        key: 5,
        name: props.pathways.pathways.Microcredential[4].name,
        summer21_2: false,
        Fall21_1: false,
        Fall21_2: false,
        summer21_2Name: props.pathways.pathways.Microcredential[4].courses[0].name,
        Fall21_1Name: props.pathways.pathways.Microcredential[4].courses[1].name,
        Fall21_2Name: props.pathways.pathways.Microcredential[4].courses[2].name,
        summer21_2ID: props.pathways.pathways.Microcredential[4].courses[0].unique_id,
        Fall21_1ID: props.pathways.pathways.Microcredential[4].courses[1].unique_id,
        Fall21_2ID: props.pathways.pathways.Microcredential[4].courses[2].unique_id,
      },
      {
        key: 6,
        name: props.pathways.pathways.Microcredential[5].name,
        summer21_2: false,
        Fall21_1: false,
        Fall21_2: false,
        summer21_2Name: props.pathways.pathways.Microcredential[5].courses[0].name,
        Fall21_1Name: props.pathways.pathways.Microcredential[5].courses[1].name,
        Fall21_2Name: props.pathways.pathways.Microcredential[5].courses[2].name,
        summer21_2ID: props.pathways.pathways.Microcredential[5].courses[0].unique_id,
        Fall21_1ID: props.pathways.pathways.Microcredential[5].courses[1].unique_id,
        Fall21_2ID: props.pathways.pathways.Microcredential[5].courses[2].unique_id,
      },
      {
        key: 7,
        name: props.pathways.pathways.Microcredential[6].name,
        summer21_2: false,
        Fall21_1: false,
        Fall21_2: false,
        summer21_2Name: props.pathways.pathways.Microcredential[6].courses[0].name,
        Fall21_1Name: props.pathways.pathways.Microcredential[6].courses[1].name,
        Fall21_2Name: props.pathways.pathways.Microcredential[6].courses[2].name,
        summer21_2ID: props.pathways.pathways.Microcredential[6].courses[0].unique_id,
        Fall21_1ID: props.pathways.pathways.Microcredential[6].courses[1].unique_id,
        Fall21_2ID: props.pathways.pathways.Microcredential[6].courses[2].unique_id,
      },
    ]);
  
    const handleCheckboxChangeFactory = (rowIndex, columnKey, record) => event => {
      const newCheckboxState = [...checkboxState];
      newCheckboxState[rowIndex][columnKey] = event.target.checked;
      setCheckboxState(newCheckboxState);
      if(columnKey == "summer21_2"){
        if(record.summer21_2 === true){
          props.setSelectedMicrocredential(selectedMicro => [...selectedMicro, record.summer21_2ID]);
        } else {
          props.setSelectedMicrocredential(props.selectedMicrocredential.filter(thisElement => thisElement != record.summer21_2ID));
        }
      }
      if(columnKey == "Fall21_1"){
        if(record.Fall21_1 === true){
          props.setSelectedMicrocredential(selectedMicro => [...selectedMicro, record.Fall21_1ID]);
        } else {
          props.setSelectedMicrocredential(props.selectedMicrocredential.filter(thisElement => thisElement != record.Fall21_1ID));
        }  
      }
      if(columnKey == "Fall21_2"){
        if(record.Fall21_2 === true){
          props.setSelectedMicrocredential(selectedMicro => [...selectedMicro, record.Fall21_2ID]);
        } else {
          props.setSelectedMicrocredential(props.selectedMicrocredential.filter(thisElement => thisElement != record.Fall21_2ID));
        }
      }
    };
  
    const columns = [
      {
        title: 'Credential Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Summer 2, 2021',
        dataIndex: 'summer21_2',
        key: 'summer21_2',
        render: (value, record, rowIndex) => (
          <>
            <Checkbox
              checked={value}
              onChange={handleCheckboxChangeFactory(rowIndex, "summer21_2", record)}
            >{record.summer21_2Name}</Checkbox>
          </>
        )
      },
      {
        title: 'Fall 1, 2021',
        dataIndex: 'Fall21_1',
        key: 'Fall21_1',
        render: (value, record, rowIndex) => (
          <>
            <Checkbox
              checked={value}
              onChange={handleCheckboxChangeFactory(rowIndex, "Fall21_1", record)}
            >{record.Fall21_1Name}</Checkbox>
          </>
        )
      },
      {
        title: 'Fall 2, 2021',
        dataIndex: 'Fall21_2',
        key: 'Fall21_2',
        render: (value, record, rowIndex) => (
          <>
            <Checkbox
              checked={value}
              onChange={handleCheckboxChangeFactory(rowIndex, "Fall21_2", record)}
            >{record.Fall21_2Name}</Checkbox>
          </>
        )
      }
    ];
  return (
    <Table pagination={false} columns={columns} dataSource={checkboxState} />
  );
  }
  
export default MicrocredentialsTable;