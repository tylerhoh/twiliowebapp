import React from 'react'
import {Form, Grid, Header,Button,Segment} from 'semantic-ui-react'


const Login =({user:{username, mobileNumber, verificationCode, verificationSent}, setUser, sendSmsCode})=>{
    const populateFields=(event,data)=>{
        setUser((draft) =>{
            draft[data.name] = data.value;
        });
    }
    return(
        <Grid textAlign='center' verticalAlign='middle' style = {{height:'100vh'}}>
            <Grid.Column style={{maxwidth:450}}>
                <Header as='h2' color = 'teal' textAlign='center'>
                    Login into your account:
                    </Header>
                    <Form>
                        <Segment stacked>
                            <Form.Input 
                            fluid 
                            icon='user' 
                            iconPosition='left' 
                            placeHolder='UserName'
                            value = {username}
                            onChange={(event, data)=>populateFields(event, data)}
                            name='username'/>
                            <Form.Input 
                             fluid 
                             icon = 'mobile alternate' 
                             iconPosition='left' 
                             placeHolder="Mobile number"
                             value={mobileNumber}
                             onChange={(event, data)=>populateFields(event, data)}
                             name = 'mobileNumber'/>
                             {verificationSent &&
                            <Form.Input
                             fluid
                             icon='key'
                             iconPosition='left'
                             placeHolder='Enter your code'
                             value={verificationCode}
                             onChange={(event,data)=> populateFields(event,data)}
                             name='verificationCode'
                            />}
                            <Button 
                             color="teal" 
                             fluid 
                             size = 'large'
                             onClick={sendSmsCode}
                             >
                                Login
                            </Button>
                        </Segment>
                    </Form>
            </Grid.Column>
        </Grid>
    );
}

export default Login;