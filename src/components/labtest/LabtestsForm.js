import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as labtestActions from '../../actions/labtestActions';
import TextInput from '../common/TextInput';
import toastr from 'toastr';

export class LabtestsForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            labtest:  props.labtest,
            errors: {},
            saving: false,
            deleteEnable: props.deleteEnable
        };

        this.updateLabtestState = this.updateLabtestState.bind(this);
        this.saveLabtest=this.saveLabtest.bind(this);
        this.deleteLabtest=this.deleteLabtest.bind(this);
        this.backBoards=this.backBoards.bind(this);
        this.onChangeGender=this.onChangeGender.bind(this);

    }

   updateLabtestState(event) {
        const field = event.target.name;
        let labtest = this.state.labtest;
        labtest[field] = event.target.value;
        return this.setState({ labtest: labtest });
    }
    
 
  
   
 labtestFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.labtest.name.length < 3) {
      errors.name = 'Name be at least 3 characters.';
      formIsValid = false;
      this.setState({ errors: errors });
      return formIsValid;
    }
    if (this.state.labtest.name.length > 50) {
      errors.name = 'Name not be more than 50 characters.';
      formIsValid = false;
      this.setState({ errors: errors });
      return formIsValid;
    }


    this.setState({ errors: errors });
    return formIsValid;
  }
  
    
  redirect() {
    this.setState({ saving: false });
    
    toastr.success('Labtest changes saved');
    this.context.router.push('/labtests');
  }
  
  backBoards(){
    this.context.router.push('/labtests');
  }

  saveLabtest(event) {
    event.preventDefault();

    if (!this.labtestFormIsValid()) {
      return;
    }

    this.setState({ saving: true });


    this.props.actions.saveLabtest(this.state.labtest)    
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
         this.setState({ saving: false });

        
      });
  }


  deleteLabtest(event) {
    event.preventDefault();
    if ((this.state.labtest._id).length==0){
      return;
    }
    this.props.actions.deleteLabtest(this.state.labtest._id)      
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);        
      });
  }

onChangeGender(){


}


    render() {

        return (
                <div className="bcontainer">
                    <div className="form-header"><label> {this.state.labtest._id?this.state.labtest._id:"New Order"} </label></div>
                <div>
                <input type="button" value="Back" className="btn btn-primary btn-xs  bbtn" onClick={this.backBoards} />
            
                </div>
                
                <div className="paraheader-labtest"><p> Step 2 - Personal Information </p></div>    
                <TextInput
                    name="name"
                    label="Name"
                    value={this.state.labtest.name}
                    onChange={this.updateLabtestState}
                    error={this.state.errors.name}
                    
                />
                <TextInput
                    name="age"
                    label="Age"
                    value={this.state.labtest.age}
                    onChange={this.updateLabtestState}
                    error={this.state.errors.age}
                    
                />  
                <div className="telement">
                <label className="telementl"> Gender</label> 
                <input 
                    type="radio"
                    name="gender"
                    value="Male"
                   
                />  Male 
                <input
                    type="radio"
                    name="gender"
                    value="Female"
                   
                />  Female                  

                </div>   
         
                <TextInput
                    name="email"
                    label="Email"
                    value={this.state.labtest.email}
                    onChange={this.updateLabtestState}
                    error={this.state.errors.email}
                    
                />    

                  
                <div className=" telement">

                    <input
                        name="brnLabtest"
                        id="brnLabtest"
                        type="submit"
                        disabled={this.state.saving}
                        value={this.state.saving ? 'Saving...' : 'Save'}
                        className="btn btn-primary btn-xs  bbtn"
                        onClick={this.saveLabtest} />


                    <input type="button"
                        value="Delete"
                        disabled={this.state.deleteEnable}
                        className="btn btn-primary btn-xs  bbtn"
                        onClick={this.deleteLabtest} />
                </div>           
              </div>      
    );
  }
}

LabtestsForm.propTypes = {
    labtest: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    deleteEnable:PropTypes.bool.isRequired
};

function getLabtestById(labtests, id) {
  const labtest = labtests.filter(labtest => labtest._id == id);
  if (labtest) return labtest[0]; //since filter returns an array, have to grab the first.
  return null;
}
//Pull in the React Router context so router is available on this.context.router.
LabtestsForm.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    const labtestId = ownProps.params.id;
    let labtest = { _id: '', name: '', age: '',email:'',dcenter:'vert' };
    let deleteEnable=true;
    if (labtestId && state.labtests.length > 0) {
        labtest = getLabtestById(state.labtests, labtestId);
    
        deleteEnable=false;
    }
    return {
        labtest: labtest,
       
        deleteEnable:deleteEnable
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(labtestActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LabtestsForm);