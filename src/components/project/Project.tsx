import React from 'react';

interface projectprops{
    confetti : boolean
}
export default function Project(props : projectprops) {

  return (
    <div>
      <img className={props.confetti ? 'spinny-time' : ''} src={`${process.env.PUBLIC_URL}/img/ski-mage.png`} alt="ski mage img" />
    </div>
  )
}
