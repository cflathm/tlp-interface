import React, {useState} from 'react';
import { Table, Checkbox } from 'antd';

const dataSource = [
    {
      key: '1',
      name: 'Integrating Science & Engineering Practices',
      summer21_2: "Understanding & Integrating Science & Engineering Practices",
      Fall21_1: "Integrating Project-Based Learning with Science & Engineering Practices",
      Fall21_2: "Assessment of Science & Engineering Practices",
    },
    {
      key: '2',
      name: 'Integrating Science & Engineering Practices',
      summer21_2: "Understanding & Integrating Science & Engineering Practices",
      Fall21_1: "Integrating Project-Based Learning with Science & Engineering Practices",
      Fall21_2: "Assessment of Science & Engineering Practices",
    },
    {
      key: '3',
      name: 'Integrating Science & Engineering Practices',
      summer21_2: "Understanding & Integrating Science & Engineering Practices",
      Fall21_1: "Integrating Project-Based Learning with Science & Engineering Practices",
      Fall21_2: "Assessment of Science & Engineering Practices",
    },
    {
      key: '4',
      name: 'Integrating Science & Engineering Practices',
      summer21_2: "Understanding & Integrating Science & Engineering Practices",
      Fall21_1: "Integrating Project-Based Learning with Science & Engineering Practices",
      Fall21_2: "Assessment of Science & Engineering Practices",
    },
    {
      key: '5',
      name: 'Integrating Science & Engineering Practices',
      summer21_2: "Understanding & Integrating Science & Engineering Practices",
      Fall21_1: "Integrating Project-Based Learning with Science & Engineering Practices",
      Fall21_2: "Assessment of Science & Engineering Practices",
    },
    {
      key: '6',
      name: 'Integrating Science & Engineering Practices',
      summer21_2: "Understanding & Integrating Science & Engineering Practices",
      Fall21_1: "Integrating Project-Based Learning with Science & Engineering Practices",
      Fall21_2: "Assessment of Science & Engineering Practices",
    },
    {
      key: '7',
      name: 'Integrating Science & Engineering Practices',
      summer21_2: "Understanding & Integrating Science & Engineering Practices",
      Fall21_1: "Integrating Project-Based Learning with Science & Engineering Practices",
      Fall21_2: "Assessment of Science & Engineering Practices",
    },
  ];

  // ------------------------------------------------------------------------------------
  // help from https://stackoverflow.com/a/63008461/13741755

  const MicrocredentialsTable = (props) => {
    console.log('micro props.microcredentials',props.pathways.pathways.Microcredential)
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
      },

    ]);
  
    const handleCheckboxChangeFactory = (rowIndex, columnKey, record) => event => {
      const newCheckboxState = [...checkboxState];
      newCheckboxState[rowIndex][columnKey] = event.target.checked;
      setCheckboxState(newCheckboxState);
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
              onChange={handleCheckboxChangeFactory(rowIndex, "summer21_2")}
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
              onChange={handleCheckboxChangeFactory(rowIndex, "Fall21_1")}
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
              onChange={handleCheckboxChangeFactory(rowIndex, "Fall21_2")}
            >{record.Fall21_2Name}</Checkbox>
          </>
        )
      }
    ];
  return (
    <Table pagination={false} columns={columns} dataSource={checkboxState} />
  );
  }

// const MicrocredentialsTable = () => {
//   return (
//     <div className="last-table">
//       <Table 
//       dataSource={dataSource} 
//       columns={columns} 
//       pagination={{ hideOnSinglePage: true}}
//       />
//     </div>
//   )
// }
  
  
export default MicrocredentialsTable;