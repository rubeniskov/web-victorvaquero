import React from 'react';
import axios from 'axios';

export default class SliderGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: []
    };
  }
  componentDidMount() {
    this.request = axios.get('/api/v1/slider-gallery-items')
        .then(res => {
          this.setState({
            slides: res.data
          });
        })
  }
  componentWillUnmount() {
    this.request.abort();
  }
  render() {
    return (
      <div className="slider-revolution">
         <div className="rev_slider_wrapper">
            <div id="slider1" className="rev_slider head-overlay" data-version="5.0">
               <ul>
                 {this.state.slides.map(slide =>
                    <li key={slide._id} data-transition="fade" data-slotamount="default" data-masterspeed="default"
                       data-thumb="assets/custom/images/rs-images/fullslide1-320x200.jpg"
                       data-title="Slide">
                      <img src="assets/custom/images/rs-images/04.jpg" alt="fullslide1"
                           data-bgposition="center center"
                           data-bgfit="cover"
                           data-bgrepeat="no-repeat" />
                         <div className="tp-caption cap-title font-accident-two-normal tp-resizeme rs-parallaxlevel-1"
                           data-x="left"
                           data-y="bottom"
                           data-basealign="grid"
                           data-voffset="45"
                           data-width="auto"
                           data-height="auto"
                           data-whitespace="['nowrap','normal','normal','normal']"
                           data-transform_idle="o:1;"
                           data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;"
                           data-transform_out="auto:auto;s:700;"
                           data-start="1800"
                           data-splitin="none"
                           data-splitout="none"
                           data-responsive_offset="on"
                           data-fontsize="['90','70','60','40']"
                           data-lineheight="['120','100','90','80']"
                           style={{'zIndex': 2}}>{slide.header}
                      </div>
                      <div className="tp-caption cap-subtitle font-accident-two-bold tp-resizeme rs-parallaxlevel-1"
                           data-x="left"
                           data-y="bottom"
                           data-basealign="grid"
                           data-voffset="19"
                           data-hoffset="5"
                           data-width="auto"
                           data-height="auto"
                           data-whitespace="['nowrap','normal','normal','normal']"
                           data-transform_idle="o:1;"
                           data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;"
                           data-transform_out="auto:auto;s:700;"
                           data-start="1900"
                           data-splitin="none"
                           data-splitout="none"
                           data-responsive_offset="on"
                           style={{'zIndex': 2}}>{slide.title}
                      </div>
                      <div className="tp-caption cap-sub-subtitle tp-resizeme rs-parallaxlevel-1"
                           data-x="left"
                           data-y="bottom"
                           data-basealign="grid"
                           data-voffset="0"
                           data-hoffset="6"
                           data-width="auto"
                           data-height="auto"
                           data-whitespace="['nowrap','normal','normal','normal']"
                           data-transform_idle="o:1;"
                           data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;"
                           data-transform_out="auto:auto;s:700;"
                           data-start="1950"
                           data-splitin="none"
                           data-splitout="none"
                           data-responsive_offset="on"
                           style={{'zIndex': 2}}>{slide.subtitle}
                      </div>
                    </li>
                 )}
                  {/*<li data-transition="fade" data-slotamount="default" data-masterspeed="default"
                      data-thumb="assets/custom/images/rs-images/fullslide1-320x200.jpg"
                      data-title="Slide">
                     <img src="assets/custom/images/rs-images/04.jpg" alt="fullslide1"
                          data-bgposition="center center"
                          data-bgfit="cover"
                          data-bgrepeat="no-repeat" />
                        <div className="tp-caption cap-title font-accident-two-normal tp-resizeme rs-parallaxlevel-1"
                          data-x="left"
                          data-y="bottom"
                          data-basealign="grid"
                          data-voffset="45"
                          data-width="auto"
                          data-height="auto"
                          data-whitespace="['nowrap','normal','normal','normal']"
                          data-transform_idle="o:1;"
                          data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;"
                          data-transform_out="auto:auto;s:700;"
                          data-start="1800"
                          data-splitin="none"
                          data-splitout="none"
                          data-responsive_offset="on"
                          data-fontsize="['90','70','60','40']"
                          data-lineheight="['120','100','90','80']"
                          style={{'zIndex': 2}}>Fletcher, the HTML5
                     </div>
                     <div className="tp-caption cap-subtitle font-accident-two-bold tp-resizeme rs-parallaxlevel-1"
                          data-x="left"
                          data-y="bottom"
                          data-basealign="grid"
                          data-voffset="19"
                          data-hoffset="5"
                          data-width="auto"
                          data-height="auto"
                          data-whitespace="['nowrap','normal','normal','normal']"
                          data-transform_idle="o:1;"
                          data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;"
                          data-transform_out="auto:auto;s:700;"
                          data-start="1900"
                          data-splitin="none"
                          data-splitout="none"
                          data-responsive_offset="on"
                          style={{'zIndex': 2}}>Personal One-Page Website Template
                     </div>
                     <div className="tp-caption cap-sub-subtitle tp-resizeme rs-parallaxlevel-1"
                          data-x="left"
                          data-y="bottom"
                          data-basealign="grid"
                          data-voffset="0"
                          data-hoffset="6"
                          data-width="auto"
                          data-height="auto"
                          data-whitespace="['nowrap','normal','normal','normal']"
                          data-transform_idle="o:1;"
                          data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;"
                          data-transform_out="auto:auto;s:700;"
                          data-start="1950"
                          data-splitin="none"
                          data-splitout="none"
                          data-responsive_offset="on"
                          style={{'zIndex': 2}}>For Professionals
                     </div>
                  </li>*/}
                  {/*<li data-transition="fade" data-slotamount="default" data-masterspeed="default"
                      data-thumb="assets/custom/images/rs-images/fullslide2-320x200.jpg"
                      data-title="Slide">
                     <img src="assets/custom/images/rs-images/05.jpg" alt="fullslide2" data-bgposition="center center"
                          data-bgfit="cover" data-bgrepeat="no-repeat" />

                        <div className="tp-caption cap-title font-accident-two-normal tp-resizeme rs-parallaxlevel-1"
                          data-x="center"
                          data-y="bottom"
                          data-basealign="grid"
                          data-voffset="45"
                          data-width="auto"
                          data-height="auto"
                          data-whitespace="['nowrap','normal','normal','normal']"
                          data-transform_idle="o:1;"
                          data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;"
                          data-transform_out="auto:auto;s:700;"
                          data-start="1800"
                          data-splitin="none"
                          data-splitout="none"
                          data-responsive_offset="on"
                          data-fontsize="['90','70','60','40']"
                          data-lineheight="['120','100','90','80']"
                          style={{'zIndex': 2}}>Victor Vaquero
                     </div>
                     <div className="tp-caption cap-subtitle font-accident-two-bold tp-resizeme rs-parallaxlevel-1"
                          data-x="center"
                          data-y="bottom"
                          data-basealign="grid"
                          data-voffset="19"
                          data-width="auto"
                          data-height="auto"
                          data-whitespace="['nowrap','normal','normal','normal']"
                          data-transform_idle="o:1;"
                          data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;"
                          data-transform_out="auto:auto;s:700;"
                          data-start="1900"
                          data-splitin="none"
                          data-splitout="none"
                          data-responsive_offset="on"
                          style={{'zIndex': 2}}>I am the experienced
                     </div>
                     <div className="tp-caption cap-sub-subtitle tp-resizeme rs-parallaxlevel-1"
                          data-x="center"
                          data-y="bottom"
                          data-basealign="grid"
                          data-voffset="0"
                          data-width="auto"
                          data-height="auto"
                          data-whitespace="['nowrap','normal','normal','normal']"
                          data-transform_idle="o:1;"
                          data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;"
                          data-transform_out="auto:auto;s:700;"
                          data-start="1950"
                          data-splitin="none"
                          data-splitout="none"
                          data-responsive_offset="on"
                          style={{'zIndex': 2}}>Landscape designer and Florist
                     </div>
                  </li>*/}
                  {/*<li data-transition="fade" data-slotamount="default" data-masterspeed="default"
                      data-thumb="assets/custom/images/rs-images/fullslide2-320x200.jpg"
                      data-title="Slide">
                     <img src="assets/custom/images/rs-images/06.jpg" alt="fullslide3" data-bgposition="center center"
                          data-bgfit="cover" data-bgrepeat="no-repeat" />
                        <div className="tp-caption cap-title font-accident-two-normal tp-resizeme rs-parallaxlevel-1"
                          data-x="right"
                          data-y="bottom"
                          data-basealign="grid"
                          data-voffset="45"
                          data-width="auto"
                          data-height="auto"
                          data-whitespace="['nowrap','normal','normal','normal']"
                          data-transform_idle="o:1;"
                          data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;"
                          data-transform_out="auto:auto;s:700;"
                          data-start="1800"
                          data-splitin="none"
                          data-splitout="none"
                          data-responsive_offset="on"
                          data-fontsize="['90','70','60','40']"
                          data-lineheight="['120','100','90','80']"
                          style={{'zIndex': 2}}>Fletcher, the HTML5
                     </div>
                     <div className="tp-caption cap-subtitle font-accident-two-bold tp-resizeme rs-parallaxlevel-1"
                          data-x="right"
                          data-y="bottom"
                          data-basealign="grid"
                          data-voffset="19"
                          data-hoffset="5"
                          data-width="auto"
                          data-height="auto"
                          data-whitespace="['nowrap','normal','normal','normal']"
                          data-transform_idle="o:1;"
                          data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;"
                          data-transform_out="auto:auto;s:700;"
                          data-start="1900"
                          data-splitin="none"
                          data-splitout="none"
                          data-responsive_offset="on"
                          style={{'zIndex': 2}}>Personal One-Page Website Template
                     </div>
                     <div className="tp-caption cap-sub-subtitle tp-resizeme rs-parallaxlevel-1"
                          data-x="right"
                          data-y="bottom"
                          data-basealign="grid"
                          data-voffset="0"
                          data-hoffset="4"
                          data-width="auto"
                          data-height="auto"
                          data-whitespace="['nowrap','normal','normal','normal']"
                          data-transform_idle="o:1;"
                          data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;"
                          data-transform_out="auto:auto;s:700;"
                          data-start="1950"
                          data-splitin="none"
                          data-splitout="none"
                          data-responsive_offset="on"
                          style={{'zIndex': 2}}>For Professionals
                     </div>
                  </li>*/}
               </ul>
               <div className="tp-bannertimer"></div>
            </div>
         </div>
      </div>
    );
  }
}
