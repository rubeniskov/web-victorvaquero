import React from 'react';
import axios from 'axios';

export default class ContentDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: []
    };
  }
  componentDidMount() {
    this.request = axios.get('/api/v1/skill')
        .then(res => {
          this.setState({
            skills: res.data
          });
        })
  }
  componentWillUnmount() {
    this.request.abort();
  }
  render() {
    return (
      <section id="details" className="m-details e-block e-block-skin" data-stellar-background-ratio="0.5">
         <div className="container pt-section" data-name="Details" id="ptsection-two">

            <div className="container text-center">
               <h3 className="font-accident-one-bold uppercase fontcolor-regular">Sobre mí</h3>
               <h5 className="font-accident-one-bold title-light uppercase hovercolor">Trabajando duro hasta alcanzar el éxito</h5>
               <div className="dividewhite4"></div>
               <p className="small fontcolor-regular">
                  Nuestra prioridad como abogados son nuestros clientes, <br/> por eso mismo aportamos el máximo de nuestros esfuerzos
                  en cada uno de los casos para ofrecer un trato directo y transparente.
               </p>
            </div>

            <div className="dividewhite8"></div>

            <div className="row">
            {this.state.skills.map(skill =>
                <div key={skill._id} className="col-md-3 infoblock">
                   <div className="row">
                      <div className="col-lg-3 col-md-4 col-sm-2"><i className="flaticon-photo246"></i></div>
                      <div className="col-lg-9 col-md-8 col-sm-10">
                         <h5 className="font-accident-one-bold uppercase">{skill.name}</h5>

                         <div className="dividewhite1"></div>
                         <p className="small">
                            {skill.description}
                         </p>
                      </div>
                   </div>
                </div>
            )}
            </div>
         </div>
      </section>
    );
  }
}
