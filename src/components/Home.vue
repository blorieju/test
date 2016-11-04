<template>
<div class="pageHeader">
      <div class="segment">
        <h3 class="ui dividing header">
            <i class="large home icon"></i>
            <div class="content">
              Home Dashboard
            <div class="sub header">Quickly view and edit</div>
            </div>
        </h3>
      </div>
    </div>
        <div class="ui warning message">
              <i class="close icon" data-dismiss="alert"></i>
            <div class="header">
              <i class="warning icon"></i> The current account has not been activated.
            </div>
            Inactive accounts can not be used Yeelink service, check the registration mailbox filled, complete verification.
            <a href="http://www.yeelink.net/login/resend_activate_mail" >You did not receive the activation email?</a>
        </div>
       <!-- <div class="ui small message" id="showApiKey">
           <div class="ui form segment">
                <div class="inline field">
                    <label>Your API Key:</label>
                    <div class="ui small left icon input short">
                        <i class="key icon"></i>
                        <input type="text" value="" readonly="readonly" id="apiKey">
                    </div>
                    <a class="ui mini green button" id="copy-apiKey" href="#">COPY</a>
                    <a class="ui mini blue animated button" href=#>
                        <span class="visible content">MANAGEMENT</span>
                        <span class="hidden content">
                            <i class="key icon"></i>
                        </span>
                    </a>
                    <a id="deviceQuickButton" class="ui red small labeled icon button" href="#">
                        <i class="settings icon"></i>MANAGEMENT OF ALL DEVICES
                    </a>
                </div>
          </div>
      </div> -->
  <!--device list-->
  <div class="ui three column grid" id="indexList">
    <div class="row">
      <div class="column">
        <div class="ui blue segment">
          <a href="#" class="content">
            <h4 class="deviceName">PROPERTY NUMBER 1</h4>
            <p class="deviceId">Property ID：234</p>
            <p class="deviceDescription">Here is the property description.</p>
            <p class="sensorStatus">Sensor status:
                            <span class="ui green ok label" ></span>
                            <span class="ui green ok label" ></span>
                            <span class="ui green ok label" ></span>
                            <span class="ui red error label" ></span>
                            <span class="ui green ok label" ></span>
                            <span class="ui green ok label" ></span>
                            <span class="ui green ok label" ></span>
                            <span class="ui green ok label" ></span>
                            <span class="ui green ok label" ></span>
                            <span class="ui green ok label" ></span>
                        </p>
          </a>
        </div>
      </div>
      <div class="column">
        <div class="ui blue segment">
          <a class="content" href="#">
            <h4 class="deviceName">PROPERTY NUMBER 02</h4>
            <p class="deviceId">Property ID：4354</p>
            <p class="deviceDescription">Here is the property description.</p>
                        <p class="sensorStatus">Sensor status:
                            <span class="ui green ok label" ></span>
                            <span class="ui green ok label" ></span>
                            <span class="ui green ok label" ></span>
                        </p>
          </a>
        </div>
      </div>
      <div class="column">
        <div class="ui blue segment">
          <a class="content" href="#">
            <h4 class="deviceName">PROPERTY NUMBER 03</h4>
            <p class="deviceId">Property ID：344</p>
            <p class="deviceDescription">Here is the property description.</p>
            <p class="sensorStatus">Sensor status:
                            <span class="ui green ok label" ></span>
                            <span class="ui green ok label" ></span>
                            <span class="ui green ok label" ></span>
                        </p>
          </a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <div class="ui blue segment">
          <a class="content" href="#">
            <h4 class="newDevice"><i class="huge add icon"></i>
            Add New Device</h4>
          </a>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import plans from '../plan'

export default {
    ready(){
        // store.getServices().then(services => {
        //     console.log(services)
        // });
    }
}
</script>
