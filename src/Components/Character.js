import React from 'react';

const Character = ({items,image}) => {
  return <div className='char'>
<img src={image["path"] + "/portrait_xlarge.jpg"} alt=""  className='img'/>

   <div className='details'>
<h1>{items["name"]}</h1>
<p>{items["description"]}</p>
</div>
  </div>
};

export default Character;   
