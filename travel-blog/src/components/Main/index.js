import React from 'react';

import './main.scss';

import headshot from '../../images/headshot.jpg';

import Container from '../HOCs/Container';

import Image from '../HOCs/Image';

const Main = () => {
  return (
    <main>
      <Container className="main-wrapper">
        <div className="image-wrapper">
          <Image src={headshot} alt="headshot" id="headshot" />
        </div>
        <div className="content">
          <h2>A little about me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
            malesuada bibendum arcu vitae elementum curabitur. Turpis massa
            tincidunt dui ut ornare. 
          </p>
          <p>
            Aliquam ut porttitor leo a diam. Cursus eget nunc scelerisque
            viverra mauris in. Risus pretium quam vulputate dignissim
            suspendisse in est. Tempor orci eu lobortis elementum nibh tellus
            molestie. 
          </p>
          <p>
            Urna nec tincidunt praesent semper feugiat nibh sed pulvinar.
            Sollicitudin ac orci phasellus egestas tellus rutrum. Neque viverra
            justo nec ultrices dui sapien eget mi proin. 
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus. Amet nisl
            purus in mollis nunc. Pretium viverra suspendisse potenti nullam ac
            tortor vitae purus faucibus. Diam vulputate ut pharetra sit. 
          </p>
          <p>
            Neque convallis a cras semper auctor neque vitae tempus. Purus sit
            amet luctus venenatis lectus magna fringilla urna porttitor. Aliquam
            malesuada bibendum arcu vitae elementum curabitur vitae nunc sed.
            Dignissim cras tincidunt lobortis feugiat vivamus at augue.
            Facilisis sed odio morbi quis commodo odio aenean. Tellus id
            interdum velit laoreet id donec. Netus et malesuada fames ac turpis
            egestas maecenas. 
          </p>
          <p>
            Urna nunc id cursus metus aliquam eleifend mi in. Penatibus et
            magnis dis parturient montes nascetur ridiculus. Id porta nibh
            venenatis cras. Ac feugiat sed lectus vestibulum mattis. Dignissim
            convallis aenean et tortor at risus viverra. At tellus at urna
            condimentum mattis pellentesque id nibh. Egestas quis ipsum
            suspendisse ultrices gravida. Ut placerat orci nulla pellentesque
            dignissim. Ultricies leo integer malesuada nunc vel risus commodo.
            Sit amet mattis vulputate enim. 
          </p>
        </div>
      </Container>
    </main>
  );
};

export default Main;
