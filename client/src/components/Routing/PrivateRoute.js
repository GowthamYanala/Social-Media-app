import React from 'react';
import {Route ,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const PrivateRoute = ({component : Component,auth:{isAuthorized,loading}, ...rest}) =>{
    return <Route {...rest} 
                render={props=> 
                    !isAuthorized && !loading ? 
                        (<Redirect to='/login' />) : (<Component {...props}/>) }/>
};


const mapStateToProps = state =>({
    auth:state.auth
})

export default connect(mapStateToProps)(PrivateRoute)
