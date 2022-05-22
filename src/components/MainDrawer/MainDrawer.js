import React, { useState } from 'react'
import './MainDrawer.css'

const MainDrawer = (props) => {

  const [tab, setTab] = useState(1)
  return (
    <div className='MainDrawer'>
      <div className='head'>

        <h5>Sign in / Create account</h5>
        <button className='close' onClick={props.setDrawertoggle}><i className='fa fa-times'></i></button>


        <div>

          <hr />

          <div>

            <div className='d-flex  mb-3'>
              <button className={`tab-btn ${tab === 1 ? 'selected-tab' : ''}`} onClick={() => setTab(1)}>
                <i className='fa fa-sign-in-alt'></i> Sign In
              </button>
              <button className={`tab-btn ${tab === 2 ? 'selected-tab' : ''}`} onClick={() => setTab(2)}>
                <i className='fa fa-user'></i> Sign Up
              </button>
            </div>

          </div>

{tab===1?  <form>
            <div class="form mt-2">

              <div class="col-auto">
                <div class="input-group mb-4">
                  <div class="input-group-prepend">
                    <div class="input-group-text  rounded-0 bg-white"><i className='fa fa-envelope'></i> </div>
                  </div>
                  <input type="text" class="form-control rounded-0  " id="inlineFormInputGroup" placeholder="Email" />
                </div>
              </div>
              <div class="col-auto">
                <div class="input-group mb-4">
                  <div class="input-group-prepend">
                    <div class="input-group-text rounded-0  bg-white"><i className='fa fa-lock'></i></div>
                  </div>
                  <input type="text" class="form-control rounded-0  " id="inlineFormInputGroup" placeholder="Username" />
                </div>
              </div>
              <div class="col-auto">
                <div class="form-check mb-2">
                  <input class="form-check-input  rounded-0" type="checkbox" id="autoSizingCheck" />
                  <label class="form-check-label" for="autoSizingCheck">
                    Remember me
                  </label>
                </div>
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-primary my-3 form-control rounded-0 shadow">Sign in</button>
              </div>
            </div>
          </form>:  <form>
            <div class="form ">

              <div class="col-auto">
                <div class="input-group mb-2">
                  <input type="text" class="form-control rounded-0  mb-2" id="inlineFormInputGroup" placeholder="Full name" />
                </div>
                <div class="input-group mb-2">
                  <input type="text" class="form-control rounded-0  mb-2" id="inlineFormInputGroup" placeholder="Email address" />
                </div>
              </div>
              <div class="col-auto">
                <div class="input-group mb-2">
            
                  <input type="password" class="form-control rounded-0  mb-2" id="inlineFormInputGroup" placeholder="Password" />
                </div>
              </div>
              <div class="col-auto">
                <div class="input-group mb-2">
            
                  <input type="password" class="form-control rounded-0  mb-2" id="inlineFormInputGroup" placeholder="Confirm password" />
                </div>
              </div>
              <div class="col-auto">
                <div class="form-check mb-2">
                  <input class="form-check-input" type="checkbox" id="autoSizingCheck" />
                  <label class="form-check-label" for="autoSizingCheck">
                    Remember me
                  </label>
                </div>
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-2 form-control">Submit</button>
              </div>
            </div>
          </form>}
        
        </div>
      </div>
    </div>
  )
}

export default MainDrawer