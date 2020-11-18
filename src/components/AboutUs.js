import React, { Fragment } from 'react';
import './AboutUs.css';
import picture from "../images/image2.jpg";
import Carousel from "react-multi-carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
        items: 1.5,
    }
  };
class AboutUs extends React.Component {
    constructor(props)
    { 
        super(props);
        this.state = {
            showDoctors: false,
            doctors: [
                {
                    image:picture,
                    designation: "President",
                    name: "Dr. V.B. Themburnikar",
                    place:"solapur (M.S)",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                },
                {
                    image:picture,
                    designation: "Gen. Secretry",
                    name:"Dr. U.S.Pandey ",
                    place:"Varanasi (U.P)",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                },
                {
                    image:picture,
                    designation: "Treasurer",
                    name: "Dr. Ashutosh Kulakrni",
                    place:"Akola (M.S)",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                    
                },
                {
                    image:picture,
                    designation: "Organiser",
                    name: "Dr. Ashutosh Kulakrni",
                    place:"solapur (M.S)",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                    
                }
            ],
            joint:[
               {
                    image:picture,
                    designation: "President",
                    name: "Dr. V.B. Themburnikar",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                },
                {
                    image:picture,
                    designation: "Gen. Secretry",
                    name:"Dr. U.S.Pandey ",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                },
                {
                    image:picture,
                    designation: "Treasurer",
                    name: "Dr. Ashutosh Kulakrni",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                    
                },
                {
                    image:picture,
                    designation: "Treasurer",
                    name: "Dr. Ashutosh Kulakrni",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                    
                },
                {
                    image:picture,
                    designation: "Treasurer",
                    name: "Dr. Ashutosh Kulakrni",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                    
                }
            ],
            assistant:[
                 {
                    image:picture,
                    designation: "President",
                    name: "Dr. V.B. Themburnikar",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                },
                {
                    image:picture,
                    designation: "Gen. Secretry",
                    name:"Dr. U.S.Pandey ",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                },
                {
                    image:picture,
                    designation: "Treasurer",
                    name: "Dr. Ashutosh Kulakrni",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                    
                },
                {
                    image:picture,
                    designation: "Treasurer",
                    name: "Dr. Ashutosh Kulakrni",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                    
                }
            ]
            ,
        }
        // this.openModel = this.openModel.bind(this);

    }
    render()
    {return(  <>
        <div>
        <h3 >NIMA CC.(India) 19-21</h3>
        <div className="row">
        <div className="col-md-9 offset-md-3">
        <Carousel className="caro"
        swipeable={true}
        draggable={false}
        responsive={responsive}
        showArrows={true}
        ssr={false} // means to render carousel on server-side.
        // infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
        deviceType={this.props.deviceType}
    itemClass="carousel-item-padding-40-px"
    >
    
    {
        this.state.doctors.map((doctor,index) =>
        <div key={index} className="AboutUs_doctorContainer" >
        <div className="AboutUs_imageContainer">
        <img src={doctor.image} alt={doctor.name} className="AboutUs_doctorImage" />
        <p className="AboutUs_doctorDesignation">{doctor.designation}</p>
        </div>
                <p className="AboutUs_doctorName">{doctor.name}</p>
                <p >{doctor.place}</p>
        </div>
        )
    }
    </Carousel>
    </div>
    </div>
    </div>
    {/* <h3 >SECRETARY</h3>
        <div className="row">
        <div className="col-md-9 offset-md-3">
        <Carousel className="caro"
        swipeable={true}
        draggable={false}
        responsive={responsive}
        showArrows={true}
        ssr={false} // means to render carousel on server-side.
        // infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
        deviceType={this.props.deviceType}
    itemClass="carousel-item-padding-40-px"
    >
    
    {
        this.state.joint.map((joint,index) =>
        <div key={index} className="AboutUs_doctorContainer" >
        <div className="AboutUs_imageContainer">
        <img src={joint.image} alt={joint.name} className="AboutUs_doctorImage" />
        <p className="AboutUs_doctorDesignation">{joint.designation}</p>
        </div>
        <p className="AboutUs_doctorName">{joint.name}</p>
        </div>
        )
    }
    </Carousel>
    </div>
    </div> */}
    <h3 >JOINT SECRETARY</h3>
        <div className="row">
        <div className="col-md-9 offset-md-3">
        <Carousel className="caro"
        swipeable={true}
        draggable={false}
        responsive={responsive}
        showArrows={true}
        ssr={false} // means to render carousel on server-side.
        // infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
        deviceType={this.props.deviceType}
    itemClass="carousel-item-padding-40-px"
    >
    
    {
        this.state.joint.map((joint,index) =>
        <div key={index} className="AboutUs_doctorContainer" >
        <div className="AboutUs_imageContainer">
        <img src={joint.image} alt={joint.name} className="AboutUs_doctorImage" />
        <p className="AboutUs_doctorDesignation">{joint.designation}</p>
        </div>
        <p className="AboutUs_doctorName">{joint.name}</p>
        </div>
        )
    }
    </Carousel>
    </div>
    </div>
    
     <h3>ASSISTANT SECRETARY</h3>
        <div className="row">
        <div className="col-md-9 offset-md-3">
        <Carousel className="caro"
        swipeable={true}
        draggable={false}
        responsive={responsive}
        showArrows={true}
        ssr={false} // means to render carousel on server-side.
        // infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
        deviceType={this.props.deviceType}
    itemClass="carousel-item-padding-40-px"
    >
    
    {
        this.state.assistant.map((assistant,index) =>
        <div key={index} className="AboutUs_doctorContainer" >
        <div className="AboutUs_imageContainer">
        <img src={assistant.image} alt={assistant.name} className="AboutUs_doctorImage" />
        <p className="AboutUs_doctorDesignation">{assistant.designation}</p>
        </div>
        <p className="AboutUs_doctorName">{assistant.name}</p>
        </div>
        )
    }
    </Carousel>
    </div>
    </div>
    <div class="AboutUs_lastdiv">
    </div>
    </>
    )}
    }
    
    export default AboutUs;