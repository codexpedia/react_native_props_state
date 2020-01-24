import React, { Fragment } from 'react';
import CustomCard from './CustomCard';

const App = () => {
  let firstImage = { uri: 'https://media.gettyimages.com/photos/portrait-of-sleeping-koala-bear-lone-pine-sanctuary-brisbane-picture-id460707851?s=2048x2048'};
  let secondImage = { uri: 'https://media.gettyimages.com/photos/paper-airplane-flat-design-picture-id1185579760?s=2048x2048'};
  return (
    <Fragment>
      <CustomCard url={firstImage} title={"Koala Bear"}/>
      <CustomCard url={secondImage} title={"Paper Plane"}/>
    </Fragment>
  );
};
export default App;

