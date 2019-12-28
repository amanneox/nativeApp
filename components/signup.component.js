import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Layout, Text, Input, Button } from '@ui-kitten/components';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export const Signup = () => {
  const [value, setValue] = React.useState('');
    return (
      <Layout style={styles.container}>
		<Text>Welcome</Text>
		<Text>Please sign in to proceed to your account</Text>
	  <Input
		value={value}
		placeholder='Place your Text'
		secureTextEntry={false}
		onChangeText={setValue}
		/>
	  <Input
		value={value}
		placeholder='Place your Text'
		secureTextEntry={true}
		onChangeText={setValue}
	  />
	    <Button
          title='Go to Login'
          onPress={() => this.props.navigation.navigate('Login')}
        />
	  </Layout>
    );
  }
export default Signup;