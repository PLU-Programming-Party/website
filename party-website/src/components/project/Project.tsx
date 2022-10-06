import React from 'react';

interface projectprops{
    confetti : boolean
}
export default function Project(props : projectprops) {

  return (
    <div>
      <img className={props.confetti ? 'spinny-time' : ''} src="../../img/ski-mage.png" alt="ski mage img" />
    </div>
  )
}
