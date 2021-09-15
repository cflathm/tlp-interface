import React from 'react';
import { Table, Checkbox } from 'antd';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const MicrocredentialsTable = () => {
  return (
    <div className="last-table">
      <div class="ant-table-wrapper">
        <div class="ant-spin-nested-loading">
          <div class="ant-spin-container">
            <div class="ant-table">
              <div class="ant-table-container">
                <div class="ant-table-content">
                  <table>
                    {/* <table style="table-layout: auto;"> */}
                        {/* <colgroup>
                            <col class="ant-table-selection-col"></col>
                        </colgroup> */}
                      <thead class="ant-table-thead">
                          <tr>
                            <th class="ant-table-cell"></th>
                            <th class="ant-table-cell">Summer 2, 2021</th>
                            <th class="ant-table-cell">Fall 1, 2021</th>
                            <th class="ant-table-cell">Fall 2, 2021</th>
                          </tr>
                      </thead>
                      <tbody class="ant-table-tbody">
                          <tr data-row-key="1" class="ant-table-row ant-table-row-level-0">
                            <td class="ant-table-cell ant-table-selection-column-microcredentials">
                            <Checkbox onChange={onChange}><b>Integrating Science &amp; Engineering Practices</b></Checkbox>
                            </td>
                            <td class="ant-table-cell"><Checkbox onChange={onChange}>Understanding &amp; Integrating Science &amp; Engineering Practices</Checkbox></td>
                            <td class="ant-table-cell"><Checkbox onChange={onChange}>Integrating Project-Based Learning with Science &amp; Engineering Practices</Checkbox></td>
                            <td class="ant-table-cell"><Checkbox onChange={onChange}>Assessment of Science &amp; Engineering Practices</Checkbox></td>
                          </tr>
                          <tr data-row-key="2" class="ant-table-row ant-table-row-level-0">
                            <td class="ant-table-cell ant-table-selection-column-microcredentials"><Checkbox onChange={onChange}><b>Creating Engaging Math Classrooms</b></Checkbox></td>
                            <td class="ant-table-cell"><Checkbox onChange={onChange}>Understanding &amp; Integrating Science &amp; Engineering Practices</Checkbox></td>
                            <td class="ant-table-cell"><Checkbox onChange={onChange}>Integrating Project-Based Learning with Science &amp; Engineering Practices</Checkbox></td>
                            <td class="ant-table-cell"><Checkbox onChange={onChange}>Assessment of Science &amp; Engineering Practices</Checkbox></td>
                          </tr>
                          <tr data-row-key="3" class="ant-table-row ant-table-row-level-0">
                            <td class="ant-table-cell ant-table-selection-column-microcredentials"><Checkbox onChange={onChange}><b>Computer Science Fundamentals</b></Checkbox></td>
                            <td class="ant-table-cell"><Checkbox onChange={onChange}>Understanding &amp; Integrating Science &amp; Engineering Practices</Checkbox></td>
                            <td class="ant-table-cell"><Checkbox onChange={onChange}>Integrating Project-Based Learning with Science &amp; Engineering Practices</Checkbox></td>
                            <td class="ant-table-cell"><Checkbox onChange={onChange}>Assessment of Science &amp; Engineering Practices</Checkbox></td>
                          </tr>
                          <tr data-row-key="4" class="ant-table-row ant-table-row-level-0">
                            <td class="ant-table-cell ant-table-selection-column-microcredentials"><Checkbox onChange={onChange}><b>Social &amp; Emotional Learning (SEL)</b></Checkbox></td>
                            <td class="ant-table-cell"><Checkbox onChange={onChange}>Understanding &amp; Integrating Science &amp; Engineering Practices</Checkbox></td>
                            <td class="ant-table-cell"><Checkbox onChange={onChange}>Integrating Project-Based Learning with Science &amp; Engineering Practices</Checkbox></td>
                            <td class="ant-table-cell"><Checkbox onChange={onChange}>Assessment of Science &amp; Engineering Practices</Checkbox></td>
                          </tr>
                          <tr data-row-key="5" class="ant-table-row ant-table-row-level-0">
                            <td class="ant-table-cell ant-table-selection-column-microcredentials"><Checkbox onChange={onChange}><b>Online Teaching</b></Checkbox></td>
                            <td class="ant-table-cell"><Checkbox onChange={onChange}>Understanding &amp; Integrating Science &amp; Engineering Practices</Checkbox></td>
                            <td class="ant-table-cell"><Checkbox onChange={onChange}>Integrating Project-Based Learning with Science &amp; Engineering Practices</Checkbox></td>
                            <td class="ant-table-cell"><Checkbox onChange={onChange}>Assessment of Science &amp; Engineering Practices</Checkbox></td>
                          </tr>
                          <tr data-row-key="6" class="ant-table-row ant-table-row-level-0">
                            <td class="ant-table-cell ant-table-selection-column-microcredentials"><Checkbox onChange={onChange}><b>STEAM Leadership</b></Checkbox></td>
                            <td class="ant-table-cell"><Checkbox onChange={onChange}>Understanding &amp; Integrating Science &amp; Engineering Practices</Checkbox></td>
                            <td class="ant-table-cell"><Checkbox onChange={onChange}>Integrating Project-Based Learning with Science &amp; Engineering Practices</Checkbox></td>
                            <td class="ant-table-cell"><Checkbox onChange={onChange}>Assessment of Science &amp; Engineering Practices</Checkbox></td>
                          </tr>
                          <tr data-row-key="7" class="ant-table-row ant-table-row-level-0">
                            <td class="ant-table-cell ant-table-selection-column-microcredentials"><Checkbox onChange={onChange}><b>Integrating Science &amp; Engineering Practices</b></Checkbox></td>
                            <td class="ant-table-cell"><Checkbox onChange={onChange}>Understanding &amp; Integrating Science &amp; Engineering Practices</Checkbox></td>
                            <td class="ant-table-cell"><Checkbox onChange={onChange}>Integrating Project-Based Learning with Science &amp; Engineering Practices</Checkbox></td>
                            <td class="ant-table-cell"><Checkbox onChange={onChange}>Assessment of Science &amp; Engineering Practices</Checkbox></td>
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