import React, { Component } from 'react';
import { Layout, Text } from '@ui-kitten/components';
export  default class AccountScreen extends Component{
	render(){
		return(
		  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			<Text category='h1'>Account</Text>
		  </Layout>
		);
	}
}