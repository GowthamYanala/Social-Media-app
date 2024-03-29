import React,{Fragment,useEffect} from 'react'
import { connect } from 'react-redux'
import Spinner from '../Layout/Spinner'
import {getProfiles} from '../../actions/profile'
import ProfileItem from './ProfileItem'

const Profiles = ({getProfiles , profile : {profiles,loading}}) =>{
    useEffect(()=>{
        getProfiles()
    },[getProfiles])
    return(
    <Fragment>
        {loading ? <Spinner /> : <Fragment>
          <h1 className='large text-primary'>Users</h1>
          <p className='lead'>
            Browse and connect with your friends
          </p>
          <div className="profiles">
            {profiles.length>0 ? (
                profiles.map(profile=>(
                    <ProfileItem key = {profile._id} profile={profile} />
                ))
            ) : (<h4>No Profiles Found</h4>)}
          </div>
        </Fragment>}
    </Fragment>
    )
}

const mapStateToProps= state => ({
    profile:state.profile
})

export default connect(mapStateToProps,{getProfiles})(Profiles)
