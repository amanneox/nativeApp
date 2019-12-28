import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Layout, Text, Input, Button, Icon } from '@ui-kitten/components';
const ForwardIcon = (style) => (
  <Icon {...style} name='arrow-circle-right-outline' />
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
	flexDirection: 'column',
    backgroundColor: '#fff',	
  },
  welcomeText:{
	fontWeight:'bold',
	color:'#fc4041',
    marginTop: 85,
	padding:15,
	marginLeft:24,
	fontSize:26
  },
  noticeText:{		
	color:'#5d6275',
	padding:15,
	marginLeft:24
  },
  formContainer:{
    padding:15,
	alignItems: 'center',
  },
  EmailInput:{
  marginTop:24
  },
  PasswordInput:{
  marginTop:24
  },
  fromButtons:{
	flex: 1,
	flexDirection: 'column',
    backgroundColor: '#fff',
	justifyContent:'center',
	alignItems:'center',

  },
  SignButton:{
  flexDirection: 'row-reverse',
  marginLeft:24,
  marginTop:12,
  marginRight:24,
  marginBottom:24,
  },
  LoginButton:{
  flexDirection: 'row-reverse',
  marginLeft:24,
  marginRight:24,
  marginBottom:24,
  },
  forgot:{
  textAlign: 'center',
  color:'#3366FF',
  justifyContent:'center',
  alignItems:'center',
  padding:15
  },
  skip:{
  textAlign: 'center',
  color:'#5d6275',
  justifyContent:'center',
  alignItems:'center',
  padding:15
  },
  footer:{
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  termText:{
  textAlign: 'center',
  }
})
export default class Login extends React.Component {
   state = {
    email: '',
    password: ''
  }
  handleEmailChange = email => {
    this.setState({ email })
  }

  handlePasswordChange = password => {
    this.setState({ password })
  }

  onLogin = async () => {
    const { email, password } = this.state
    try {
      if (email.length > 0 && password.length > 0) {
        this.props.navigation.navigate('App')
      }
    } catch (error) {
      alert(error)
    }
  }

  goToSignup = () => this.props.navigation.navigate('Signup')
  render() {
    const { email, password } =  this.state

    return (
      <Layout style={styles.container}>
		<Layout level='1'>
		<Text style={styles.welcomeText}>Welcome</Text>
		<Text style={styles.noticeText}>Please sign in to proceed to your account</Text>
		</Layout>
		<Layout level='1' style={styles.formContainer}>
	  <Input
	    style={styles.EmailInput}
		value={email}
		placeholder='Enter Email'
		secureTextEntry={false}
		 onChangeText={this.handleEmailChange}
		/>
		
	  <Input
	    style={styles.PasswordInput}
		value={password}
		placeholder='Enter Password'
		secureTextEntry={true}
		 onChangeText={this.handlePasswordChange}
	  />
	  </Layout>
	  
	  <Layout style={styles.formButtons}>
	  <Button appearance='outline' icon={ForwardIcon} style={styles.LoginButton} onPress={this.onLogin}>Continue</Button>
	  <Text style={styles.forgot}>Forgot your password?</Text>
	  <Button appearance='outline' icon={ForwardIcon} style={styles.SignButton} onPress={this.goToSignup}>New User? Create Account</Button>
	  <Text style={styles.skip}>Skip for now</Text>
	  </Layout>
	  <Layout style={styles.footer}>
	  <Text style={styles.termText}>Terms & Conditions</Text>
	  </Layout>
	  </Layout>
	    );
	}
  }