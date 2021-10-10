import React from 'react';
import { Table } from 'antd';
import { getCourseTermNames, generateMastersTableColumns, generateMastersTableRows, generateCourseTermName } from '../../utils/tableUtils';


// CONFIRMTABLE: CHANGE COLUMNS TO BE TERM, YEAR, “pathway” it contributes to, ?confirm checkbox? (prob not)
  
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

  const generateConfirmTableRows = (userSelections) => {
    // this map returns a json object of all rows, formatted to match key-value pairs in "dataSource"
    // for each pathway in pathways, return json object
    console.log(userSelections)
    const selectedPathway = userSelections.map(selection => {
      // console.log('selection', selection)
      let pathway = [];
      if(selection.courses){
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
            key: course.unique_id,
            pathwayName: selection.name,
            terms: terms
          })
          // console.log('this pathway',pathway)
      });
    } else {
      // if this selection has no "courses" field (IE a micro-credential)
      let terms = ''
        if(generateCourseTermName(selection)!='undefined undefined'){
          terms = generateCourseTermName(selection)
        } else {
          terms = 'TBD'
        }
        // console.log('thisselection',selection)
        pathway.push( {
          name: selection.name,
          dataIndex: selection.option_id,
          key: selection.unique_id,
          pathwayName: selection.credential_name,
          terms: terms
        })
    }
      return pathway;
    });
    return selectedPathway.flat();
  };


const ConfirmTable = (props) => {
  // console.log('ConfirmTable: props.selections',props.selections)
  const dataSource = generateConfirmTableRows(props.selections)
  // console.log('dataSource',dataSource)
  return (
    <div className="last-table">
      <Table 
      scroll={{ x: 700 }}
      dataSource={dataSource} 
      columns={columns} 
      // rowSelection={{type: "radio"}}
      pagination={{ hideOnSinglePage: true}}
      />
    </div>
  )
}
  
  
export default ConfirmTable;