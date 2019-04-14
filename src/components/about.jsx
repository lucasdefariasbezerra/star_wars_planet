import React from 'react';
import { Grid, Container, Image } from 'semantic-ui-react';
import '../template/style.css';
import Linker from './shared/linker';
import consts from './utils/consts';

const { Row } = Grid;

const About = () => {
   return(
       <div className='cardGroupSpacing'>
           <Container>
            <Grid centered>
                <Row columns={1}>
                    <Image src='https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-png-transparent.png' className="logo"/>
                </Row>
                <Row columns={1}>
                   <Linker url='feed' text='Planets' componentType={consts.BUTTON} />
                </Row>
            </Grid>
           </Container>
       </div>
   );
};

export default About;