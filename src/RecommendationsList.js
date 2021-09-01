import React, { Component } from 'react';
import { List } from 'antd';

const data = [
  {
    title: 'Masters Degree in Education: Online Instruction',
    description: 'Why is this a good choice? Because you are interested in Masters, and your Master"s Degree is not an M.Ed.'
  },
  {
    title: 'Teacher Leader Endorsement',
    description: 'Why is this a good choice? Because you noted this as Your Preferred Endorsement'
  },
  {
    title: 'STEAM Leadership Microcredentials',
    description:'	Why is this a good choice? Because in a Specialist Role, you signaled Moderate Want for Steam Leadership'
  },
];


const RecommendationsList = () => {
  return (
    <div className="RecommendationsList" style={{paddingLeft: 20 + "px", paddingTop: 20 + "px"}}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<img src="https://cdn.iconscout.com/icon/free/png-512/online-classes-2598778-2224424.png" style={{maxWidth: 20+"px"}}/>}
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  )
}
  
  
export default RecommendationsList;