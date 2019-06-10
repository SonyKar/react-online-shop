import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Collection.css';
import Spinner from '../../../../components/Spinner/Spinner';
import FullModal from '../../../../hoc/FullModal/FullModal';
import CollectionMenu from '../../../../components/Collection/CollectionMenu/CollectionMenu';
import Product from '../../../../components/Collection/Product/Product';
import Input from '../../../../components/Input/Input';
import Footer from '../../../../components/Footer/Footer';
import * as actions from '../../../../store/actions/index';
import { checkValidatity } from '../../../../shared/utility';

class Collection extends Component {
    state = {
        expand: false,
        addNewItem: false,
        addItemForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Item Name',
                    id: 'name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            price: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Price',
                    id: 'price'
                },
                value: '',
                validation: {
                    required: true,
                    isNumber: true
                },
                valid: false,
                touched: false
            },
            desc: {
                elementType: 'textarea',
                elementConfig: {
                    placeholder: 'Items Description',
                    rows: '10',
                    id: 'desc'
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
                    id: 'file'
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
        isEdit: false
    }

    componentDidMount() {
        if (this.props.products.length === 0) {
            this.props.onFetchProducts(this.props.match.params.collectionId);
        }
    }

    expandProductsHandler = () => {
        this.setState({expand: true});
    }
    
    shrinkProductsHandler = () => {        
        this.setState({expand: false});
    }

    addNewItemToggleHandler = () => {
        this.setState(prevState => {
            return {
                addNewItem: !prevState.addNewItem
            }
        });
    }

    addItemFormHandler = ( event ) => {
        event.preventDefault();

        const formData = {};
        for (let formElementIdentifier in this.state.addItemForm) {
            formData[formElementIdentifier] = this.state.addItemForm[formElementIdentifier].value;
            if (this.state.addItemForm[formElementIdentifier].files !== undefined) {
                formData[formElementIdentifier] = this.state.addItemForm[formElementIdentifier].files;
            }
        }

        this.props.onAddProduct(formData.name, formData.price, formData.desc, formData.file, this.props.match.params.collectionId);

        this.cleanForm();
        this.addNewItemToggleHandler();
    }

    inputChangedHandler = (event, inputIdentifier) => {
        let updatedFormElement = {
            ...this.state.addItemForm[inputIdentifier],
            value: event.target.value,
            valid: checkValidatity(event.target.value, this.state.addItemForm[inputIdentifier].validation),
            touched: true
        };
        if (event.target.files) {
            updatedFormElement = {
                ...updatedFormElement,
                files: event.target.files[0]
            }
        }
        const updatedAddItemForm = {
            ...this.state.addItemForm,
            [inputIdentifier]: updatedFormElement
        };
        let formIsValid = true;
        for (let inputIdentifier in updatedAddItemForm) {
            formIsValid = updatedAddItemForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            addItemForm: updatedAddItemForm,
            formIsValid: formIsValid
        });
    }

    cleanForm = () => {
        let updatedForm = {
            ...this.state.addItemForm
        };
        updatedForm.name.value = '';
        updatedForm.price.value = '';
        updatedForm.desc.value = '';
        updatedForm.file.value = '';
        updatedForm.file.files = null;
        updatedForm.file.validation.required = true;
        updatedForm.file.valid = false;
        this.setState({
            addItemForm: updatedForm,
            isEdit: false
        });
    }

    fillUpForm = (name, price, desc) => {
        let updatedForm = {
            ...this.state.addItemForm
        };
        updatedForm.name.value = name;
        updatedForm.price.value = price;
        updatedForm.desc.value = desc;
        updatedForm.file.validation.required = false;
        updatedForm.file.valid = true;
        this.setState({
            addItemForm: updatedForm,
            formIsValid: true,
            isEdit: true
        });
        this.addNewItemToggleHandler();
    }

    render() {
        let productClasses = "Product";
        productClasses += this.state.expand ? " col-6" : " col-4";

        let products = <Spinner />;
        if (!this.props.loading && this.props.products.length !== 0) {
            products = this.props.products.map( product => {
                return (
                    <div className={productClasses} key={product.id}>
                        <Product 
                            id={product.id}
                            image={require('../../../../assets/img/' + product.image)}
                            name={product.name}
                            price={product.price}
                            desc={product.description}
                            clicked={() => this.props.onSelectedProduct(product.id)}
                            edit={this.fillUpForm}
                        />
                    </div>  
                );
            } );
        } else if (!this.props.loading && this.props.error !== '') {
            products = <div className="noProducts">{this.props.error}</div>
        }

        const formElementsArray = [];
        for (let key in this.state.addItemForm) {
            formElementsArray.push({
                id: key,
                config: this.state.addItemForm[key]
            })
        }
        let form = (
            <form onSubmit={this.addItemFormHandler} encType="multipart/form-data">
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
                <div className="shopCollection">
                    <FullModal show={this.state.addNewItem} close={this.addNewItemToggleHandler} clean={this.cleanForm}>
                        { form }
                    </FullModal>
                    <h2 className="CollectionHeader">{this.props.match.params.collectionName}</h2>
                    <CollectionMenu expand={this.expandProductsHandler} shrink={this.shrinkProductsHandler} isExpand={this.state.expand} />
                    <div className="container">
                        <div className="row">
                            {this.props.role === 'admin' ? (
                                <div className="col-12 mb-2">
                                    <button className="btn btn-dark" onClick={this.addNewItemToggleHandler}>New Item</button>
                                </div>
                            ) : null}
                            {
                                products
                            }
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
        products: state.shop.products,
        loading: state.shop.loading,
        error: state.shop.error,
        collections: state.collection.collections,
        role: state.auth.person.role
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectedProduct: (id) => dispatch(actions.selectedProduct(id)),
        onFetchProducts: (collectionId) => dispatch(actions.fetchProducts(collectionId)),
        onAddProduct: (name, price, desc, image, collectionId) => dispatch(actions.addProduct(name, price, desc, image, collectionId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);