import {Component} from 'react';
class Application extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    
    componentWillMount(props, state){

    }
    componentDidMount(props, state){
       console.log("Mounted with ", props, state) 
    }
    render(){
        let name = "Nick";
        return(
        <div>
           <h1>Hello {name}</h1>
           <span>This</span>
        </div>
        
       );
    }
}

export default Application;