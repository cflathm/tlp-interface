import React from 'react';
import { Table } from 'antd';
import { getCourseTermNames, generateMastersTableColumns, generateMastersTableRows } from '../../utils/tableUtils';

/* TODO
  - Change "recommended" column to implement color scale
*/

const MastersDegreeTable = (props) => {
  const courseTermNames = getCourseTermNames(props.mastersDegrees);
  const tableColumns = generateMastersTableColumns(courseTermNames);
  const tableRows = generateMastersTableRows(props.mastersDegrees);

    return (
    <div>
      <Table 
      scroll={{ x: 700 }}
      dataSource={tableRows} 
      columns={tableColumns}
      rowSelection={{
        type: "radio",
        onChange: (record) => {
          props.setSelection(record[0]);
        }
      }}
      pagination={{ hideOnSinglePage: true}}
      />
    </div>
  )
}
  
  
export default MastersDegreeTable;