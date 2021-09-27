import React from 'react';
import { Table, Checkbox } from 'antd';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const MicrocredentialsTable = () => {
  return (
    <div className="last-table">
      <div className="ant-table-wrapper">
        <div className="ant-spin-nested-loading">
          <div className="ant-spin-container">
            <div className="ant-table">
              <div className="ant-table-container">
                <div className="ant-table-content">
                  <table>
                    {/* <table style="table-layout: auto;"> */}
                        {/* <colgroup>
                            <col className="ant-table-selection-col"></col>
                        </colgroup> */}
                      <thead className="ant-table-thead">
                          <tr>
                            <th className="ant-table-cell"></th>
                            <th className="ant-table-cell">Summer 2, 2021</th>
                            <th className="ant-table-cell">Fall 1, 2021</th>
                            <th className="ant-table-cell">Fall 2, 2021</th>
                          </tr>
                      </thead>
                      <tbody className="ant-table-tbody">
                          <tr data-row-key="1" className="ant-table-row ant-table-row-level-0">
                            <td className="ant-table-cell ant-table-selection-column-microcredentials">
                            <b>Integrating Science &amp; Engineering Practices</b>
                            </td>
                            <td className="ant-table-cell"><Checkbox onChange={onChange}>Understanding &amp; Integrating Science &amp; Engineering Practices</Checkbox></td>
                            <td className="ant-table-cell"><Checkbox onChange={onChange}>Integrating Project-Based Learning with Science &amp; Engineering Practices</Checkbox></td>
                            <td className="ant-table-cell"><Checkbox onChange={onChange}>Assessment of Science &amp; Engineering Practices</Checkbox></td>
                          </tr>
                          <tr data-row-key="2" className="ant-table-row ant-table-row-level-0">
                            <td className="ant-table-cell ant-table-selection-column-microcredentials"><b>Creating Engaging Math Classrooms</b></td>
                            <td className="ant-table-cell"><Checkbox onChange={onChange}>Understanding &amp; Integrating Science &amp; Engineering Practices</Checkbox></td>
                            <td className="ant-table-cell"><Checkbox onChange={onChange}>Integrating Project-Based Learning with Science &amp; Engineering Practices</Checkbox></td>
                            <td className="ant-table-cell"><Checkbox onChange={onChange}>Assessment of Science &amp; Engineering Practices</Checkbox></td>
                          </tr>
                          <tr data-row-key="3" className="ant-table-row ant-table-row-level-0">
                            <td className="ant-table-cell ant-table-selection-column-microcredentials"><b>Computer Science Fundamentals</b></td>
                            <td className="ant-table-cell"><Checkbox onChange={onChange}>Understanding &amp; Integrating Science &amp; Engineering Practices</Checkbox></td>
                            <td className="ant-table-cell"><Checkbox onChange={onChange}>Integrating Project-Based Learning with Science &amp; Engineering Practices</Checkbox></td>
                            <td className="ant-table-cell"><Checkbox onChange={onChange}>Assessment of Science &amp; Engineering Practices</Checkbox></td>
                          </tr>
                          <tr data-row-key="4" className="ant-table-row ant-table-row-level-0">
                            <td className="ant-table-cell ant-table-selection-column-microcredentials"><b>Social &amp; Emotional Learning (SEL)</b></td>
                            <td className="ant-table-cell"><Checkbox onChange={onChange}>Understanding &amp; Integrating Science &amp; Engineering Practices</Checkbox></td>
                            <td className="ant-table-cell"><Checkbox onChange={onChange}>Integrating Project-Based Learning with Science &amp; Engineering Practices</Checkbox></td>
                            <td className="ant-table-cell"><Checkbox onChange={onChange}>Assessment of Science &amp; Engineering Practices</Checkbox></td>
                          </tr>
                          <tr data-row-key="5" className="ant-table-row ant-table-row-level-0">
                            <td className="ant-table-cell ant-table-selection-column-microcredentials"><b>Online Teaching</b></td>
                            <td className="ant-table-cell"><Checkbox onChange={onChange}>Understanding &amp; Integrating Science &amp; Engineering Practices</Checkbox></td>
                            <td className="ant-table-cell"><Checkbox onChange={onChange}>Integrating Project-Based Learning with Science &amp; Engineering Practices</Checkbox></td>
                            <td className="ant-table-cell"><Checkbox onChange={onChange}>Assessment of Science &amp; Engineering Practices</Checkbox></td>
                          </tr>
                          <tr data-row-key="6" className="ant-table-row ant-table-row-level-0">
                            <td className="ant-table-cell ant-table-selection-column-microcredentials"><b>STEAM Leadership</b></td>
                            <td className="ant-table-cell"><Checkbox onChange={onChange}>Understanding &amp; Integrating Science &amp; Engineering Practices</Checkbox></td>
                            <td className="ant-table-cell"><Checkbox onChange={onChange}>Integrating Project-Based Learning with Science &amp; Engineering Practices</Checkbox></td>
                            <td className="ant-table-cell"><Checkbox onChange={onChange}>Assessment of Science &amp; Engineering Practices</Checkbox></td>
                          </tr>
                          <tr data-row-key="7" className="ant-table-row ant-table-row-level-0">
                            <td className="ant-table-cell ant-table-selection-column-microcredentials"><b>Integrating Science &amp; Engineering Practices</b></td>
                            <td className="ant-table-cell"><Checkbox onChange={onChange}>Understanding &amp; Integrating Science &amp; Engineering Practices</Checkbox></td>
                            <td className="ant-table-cell"><Checkbox onChange={onChange}>Integrating Project-Based Learning with Science &amp; Engineering Practices</Checkbox></td>
                            <td className="ant-table-cell"><Checkbox onChange={onChange}>Assessment of Science &amp; Engineering Practices</Checkbox></td>
                          </tr>
                      </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  
  
export default MicrocredentialsTable;