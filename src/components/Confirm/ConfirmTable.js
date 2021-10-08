import React from 'react';
import { Table } from 'antd';
import { getCourseTermNames, generateMastersTableColumns, generateMastersTableRows, generateCourseTermName } from '../../utils/tableUtils';


// CONFIRMTABLE: CHANGE COLUMNS TO BE TERM, YEAR, “pathway” it contributes to, ?confirm checkbox? (prob not)

const dataSource = [
    {
      key: '1',
      name: 'Masters Degree in Education: Online Instruction',
      category: "Master's Degree",
      term: 'Fall 2022'
    },
    {
      key: '2',
      name: 'STEAM Leadership Micro-Credentials',
      category: "Micro-Credential",
      term: 'Summer 2022'
    },
  ];
  
  const columns = [
    {
      title: 'Course',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Pathway Name',
      dataIndex: 'pathwayName',
      key: 'pathwayName',
    },
    {
      title: 'First Term',
      dataIndex: 'terms',
      key: 'terms',
    }
  ];


  const generateConfirmTableRows = (selections) => {
    // this map returns a json object of all rows, formatted to match key-value pairs in "dataSource"
    // for each pathway in pathways, return json object
    const selectedPathway = selections.map(selection => {
      // console.log('selection', selection)
      let pathway = [];
      selection.courses.forEach(course => {
        let terms = ''
        if(generateCourseTermName(course)!='undefined undefined'){
          terms = generateCourseTermName(course)
        } else {
          terms = 'TBD'
        }
        // console.log('thiscourse',course)
        pathway.push( {
          name: course.name,
          dataIndex: course.option_id,
          key: selection.category + course.id,
          pathwayName: selection.name,
          terms: terms
      })
        // console.log('this pathway',pathway)
      });
      return pathway;
    });
    return selectedPathway.flat();
  };


const ConfirmTable = (props) => {
  // console.log('ConfirmTable: props.selectedPathways',props.selectedPathways)
  const dataSource2 = generateConfirmTableRows(props.selectedPathways)
  // console.log('dataSource2',dataSource2)
  return (
    <div className="last-table">
      <Table 
      scroll={{ x: 700 }}
      dataSource={dataSource2} 
      columns={columns} 
      // rowSelection={{type: "radio"}}
      pagination={{ hideOnSinglePage: true}}
      />
    </div>
  )
}
  
  
export default ConfirmTable;