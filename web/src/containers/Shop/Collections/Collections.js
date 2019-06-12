import React, { Component } from 'react';
import { connect } from 'react-redux';

import "./Collections.css";
import Spinner from '../../../components/Spinner/Spinner';
import FullModal from '../../../hoc/FullModal/FullModal';
import Collection from '../../../components/Collection/Collection';
import Input from '../../../components/Input/Input';
import Footer from '../../../components/Footer/Footer';
import * as actions from '../../../store/actions/index';
import { checkValidatity } from '../../../shared/utility';

class Collections extends Component {
    state = {
        addNewCollection: false,
        addCollectionForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Collection Name',
                    id: 'name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            file: {
                elementType: 'input',
                elementConfig: {
                    type: 'file',
                    id: 'file',
                    placeholder: "Choose a file..."
                },
                value: '',
                files: null,
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        isEdit: false,
        editId: ''
    }

    componentDidMount() {
        this.props.onEmptyProducts();
        if (this.props.collections.length === 0) {
            this.props.onFetchCollections();
        }
    }

    addNewCollectionToggleHandler = () => {
        this.setState(prevState => {
            return {
                addNewCollection: !prevState.addNewCollection
            }
        });
    }

    addCollectionFormHandler = ( event ) => {
        event.preventDefault();

        const formData = {};
        for (let formElementIdentifier in this.state.addCollectionForm) {
            formData[formElementIdentifier] = this.state.addCollectionForm[formElementIdentifier].value;
            if (this.state.addCollectionForm[formElementIdentifier].files !== undefined) {
                formData[formElementIdentifier] = this.state.addCollectionForm[formElementIdentifier].files;
            }
        }

        if (this.state.isEdit) {
            this.props.onUpdateCollection(formData.name, formData.file, this.state.editId);
        } else {
            this.props.onAddCollection(formData.name, formData.file);
        }

        this.cleanForm();
        this.addNewCollectionToggleHandler();
    }

    inputChangedHandler = (event, inputIdentifier) => {
        let updatedFormElement = {
            ...this.state.addCollectionForm[inputIdentifier],
            value: event.target.value,
            valid: checkValidatity(event.target.value, this.state.addCollectionForm[inputIdentifier].validation),
            touched: true
        };
        if (event.target.files) {
            updatedFormElement = {
                ...updatedFormElement,
                files: event.target.files[0],
                elementConfig: {
                    ...this.state.addCollectionForm[inputIdentifier].elementConfig,
                    placeholder: event.target.files[0].name
                }
            }
        }
        const updatedAddCollectionForm = {
            ...this.state.addCollectionForm,
            [inputIdentifier]: updatedFormElement
        };
        let formIsValid = true;
        for (let inputIdentifier in updatedAddCollectionForm) {
            formIsValid = updatedAddCollectionForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            addCollectionForm: updatedAddCollectionForm,
            formIsValid: formIsValid
        });
    }

    cleanForm = () => {
        let updatedForm = {
            ...this.state.addCollectionForm
        };
        updatedForm.name.value = '';
        updatedForm.name.valid = false;
        updatedForm.file.value = '';
        updatedForm.file.files = null;
        updatedForm.file.validation.required = true;
        updatedForm.file.valid = false;
        updatedForm.file.elementConfig.placeholder="Choose a file...";
        this.setState({
            addCollectionForm: updatedForm,
            formIsValid: false,
            isEdit: false,
            editId: ''
        });
    }

    fillUpForm = (name, id) => {
        let updatedForm = {
            ...this.state.addCollectionForm
        };
        updatedForm.name.value = name;
        updatedForm.name.valid = true;
        updatedForm.file.validation.required = false;
        updatedForm.file.valid = true;
        this.setState({
            addCollectionForm: updatedForm,
            formIsValid: true,
            isEdit: true,
            editId: id
        });
        this.addNewCollectionToggleHandler();
    }

    render() {
        let collections = <Spinner />;
        if (!this.props.loading) {
            collections = this.props.collections.map(collection => (
                <Collection 
                    key={collection.id}
                    name={collection.name}
                    image={require('../../../assets/img/' + collection.image)}
                    collectionId={collection.id}
                    edit={this.fillUpForm}
                />
            ));
        }

        const formElementsArray = [];
        for (let key in this.state.addCollectionForm) {
            formElementsArray.push({
                id: key,
                config: this.state.addCollectionForm[key]
            })
        }
        let form = (
            <form onSubmit={this.addCollectionFormHandler} encType="multipart/form-data">
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        idName={formElement.config.elementConfig.id}
                        label={formElement.config.elementConfig.placeholder}
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                    />
                ))}
                <p className="text-center"><button className="btn btn-dark" disabled={!this.state.formIsValid}> { this.state.isEdit ? 'Update' : 'Add' } </button></p>
            </form>
        );

        return (
            <React.Fragment>
                {
                    this.props.role === 'admin' ? 
                    <FullModal show={this.state.addNewCollection} close={this.addNewCollectionToggleHandler} clean={this.cleanForm}>
                        { form }
                    </FullModal> : null
                }
                <div className="Collections">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mb-2">
                                <h2 className="text-center">ALL COLLECTIONS</h2>
                            </div>
                        </div>
                        {
                            this.props.role === 'admin' ? (
                                <div className="col-12 mb-2">
                                    <button className="btn btn-dark" onClick={this.addNewCollectionToggleHandler}>New Collection</button>
                                </div>
                            ) : null
                        }
                        <div className="d-flex align-items-stretch flex-wrap">
                            {collections}
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        collections: state.collection.collections,
        loading: state.collection.loading,
        role: state.auth.person.role
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCollections: () => dispatch(actions.fetchCollections()),
        onEmptyProducts: () => dispatch(actions.emptyProducts()),
        onAddCollection: (name, image) => dispatch(actions.addCollection(name, image)),
        onUpdateCollection: (name, image, id) => dispatch(actions.updateCollection(name, image, id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Collections);